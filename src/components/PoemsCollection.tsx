import { useState } from "react";
import { Button } from "@/components/ui/button";
import PoemCard from "./PoemCard";
import { poems, getPoemsByCategory } from "@/data/poems";
import { Star, Globe, Heart, Moon } from "lucide-react";

const PoemsCollection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPoems, setFilteredPoems] = useState(poems);

  const categories = [
    { id: 'all', label: 'All', icon: Star },
    { id: 'hindi', label: 'Hindi', icon: Globe },
    { id: 'english', label: 'English', icon: Heart },
    { id: 'shayari', label: 'Shayari', icon: Moon }
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setFilteredPoems(getPoemsByCategory(category));
  };

  return (
    <section id="poems" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-4">
            Poetry Collection
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
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
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-primary text-white shadow-elegant hover:shadow-glow' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoems.map((poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>

        {filteredPoems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No poems found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PoemsCollection;