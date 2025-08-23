import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PoemCard from "./PoemCard";
import SearchBar from "./SearchBar";
import { BookOpen, Heart, Mic, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Poem } from "@/data/poems";

const PoemsCollection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [poems, setPoems] = useState<Poem[]>([]);
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", label: "All Poems", icon: Sparkles, color: "bg-gray-100 text-gray-800 border-gray-200" },
    { id: "english", label: "English", icon: BookOpen, color: "bg-blue-100 text-blue-800 border-blue-200" },
    { id: "hindi", label: "Hindi", icon: Heart, color: "bg-green-100 text-green-800 border-green-200" },
    { id: "shayari", label: "Shayari", icon: Mic, color: "bg-purple-100 text-purple-800 border-purple-200" },
  ];

  useEffect(() => {
    fetchPoems();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [poems, activeCategory, searchQuery]);

  const fetchPoems = async () => {
    try {
      const { data, error } = await supabase
        .from('poems')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching poems:', error);
        return;
      }
      
      const transformedPoems: Poem[] = data?.map((poem: any) => ({
        ...poem,
        fullText: poem.full_text
      })) || [];
      
      setPoems(transformedPoems);
    } catch (error) {
      console.error('Error fetching poems:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = poems;
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(poem => poem.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(poem => 
        poem.title.toLowerCase().includes(query) ||
        poem.fullText.toLowerCase().includes(query) ||
        poem.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredPoems(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section id="poems" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Poetry Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore heartfelt poems across different languages and emotions. 
            Each piece captures a moment, a feeling, a story waiting to be discovered.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  activeCategory === category.id 
                    ? "bg-primary text-white shadow-md" 
                    : `${category.color} hover:shadow-md border`
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Poems Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading poems...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                },
                exit: { 
                  opacity: 0,
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {filteredPoems.length > 0 ? (
                filteredPoems.map((poem) => (
                  <motion.div
                    key={poem.id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { 
                        y: 0, 
                        opacity: 1,
                        transition: { type: "spring", stiffness: 300, damping: 25 }
                      },
                      exit: { y: -20, opacity: 0 }
                    }}
                    layout
                  >
                    <PoemCard poem={poem} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="max-w-md mx-auto">
                    <div className="text-6xl mb-4 opacity-50">📝</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">No poems found</h3>
                    <p className="text-gray-600">
                      {searchQuery 
                        ? `No poems match "${searchQuery}". Try a different search term.`
                        : `No poems available in the "${activeCategory}" category yet. Check back soon for new additions!`
                      }
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default PoemsCollection;