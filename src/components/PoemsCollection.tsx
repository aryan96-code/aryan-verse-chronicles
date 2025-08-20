import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PoemCard from "./PoemCard";
import SearchBar from "./SearchBar";
import { BookOpen, Heart, Mic, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Poem } from "@/data/poems";

const PoemsCollection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [poems, setPoems] = useState<Poem[]>([]);
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", label: "All Poems", icon: Sparkles },
    { id: "english", label: "English", icon: BookOpen },
    { id: "hindi", label: "Hindi", icon: Heart },
    { id: "shayari", label: "Shayari", icon: Mic },
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
      
      // Transform database format to match frontend interface
      const transformedPoems: Poem[] = data?.map((poem: any) => ({
        ...poem,
        fullText: poem.full_text  // Map database field to frontend field
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
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(poem => poem.category === activeCategory);
    }
    
    // Filter by search query
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
    <section id="poems" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
            Poetry Collection
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Explore heartfelt poems across different languages and emotions. 
            Each piece captures a moment, a feeling, a story waiting to be discovered.
          </p>
        </motion.div>
        
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
        
        {/* Enhanced category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                      : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Poems grid with stagger animation */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading poems...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              filteredPoems.map((poem, index) => (
                <motion.div
                  key={poem.id}
                  variants={{
                    hidden: { y: 50, opacity: 0, scale: 0.9 },
                    visible: { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1,
                      transition: { type: "spring", stiffness: 300, damping: 25 }
                    },
                    exit: { y: -50, opacity: 0, scale: 0.9 }
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
                  <h3 className="text-xl font-semibold mb-2 text-foreground">No poems found</h3>
                  <p className="text-muted-foreground">
                    No poems available in the "{activeCategory}" category yet. 
                    Check back soon for new additions!
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