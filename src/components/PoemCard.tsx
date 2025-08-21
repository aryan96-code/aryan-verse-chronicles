import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Poem } from "@/data/poems";
import { BookOpen, Heart, Mic, Star } from "lucide-react";
import FavoriteButton from "./FavoriteButton";

interface PoemCardProps {
  poem: Poem;
}

// Helper function to get theme class name from title
const getThemeClassName = (title: string) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('rebellion')) return 'theme-rebellion';
  if (titleLower.includes('marne ke baad')) return 'theme-marne';
  if (titleLower.includes('यादों की रेत')) return 'theme-yadon';
  if (titleLower.includes('tere bin jeete')) return 'theme-tere-bin';
  if (titleLower.includes('tere nishaan')) return 'theme-tere-nishaan';
  if (titleLower.includes('बर्बादी')) return 'theme-barbadi';
  if (titleLower.includes('जाने के बाद')) return 'theme-jane-ke-baad';
  if (titleLower.includes('sitara')) return 'theme-sitara';
  if (titleLower.includes('longing')) return 'theme-longing';
  if (titleLower.includes('silence')) return 'theme-silence';
  if (titleLower.includes('midnight')) return 'theme-midnight';
  if (titleLower.includes('dil ki baat')) return 'theme-dil-ki-baat';
  if (titleLower.includes('chali gayi')) return 'theme-chali-gayi';
  
  // Default theme based on category
  if (title.includes('hindi') || /[अ-ह]/.test(title)) return 'theme-yadon';
  if (title.includes('shayari')) return 'theme-dil-ki-baat';
  return 'theme-midnight';
};

const PoemCard = ({ poem }: PoemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'english': return <BookOpen className="h-3 w-3" />;
      case 'hindi': return <Heart className="h-3 w-3" />;
      case 'shayari': return <Mic className="h-3 w-3" />;
      default: return <BookOpen className="h-3 w-3" />;
    }
  };

  const themeClass = getThemeClassName(poem.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        scale: { duration: 0.2 }
      }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`poem-card ${themeClass}`}>
        <div className="poem-header">
          <h2 className="text-lg font-bold leading-tight mb-2">
            {poem.title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="poem-category-badge flex items-center gap-1">
                {getCategoryIcon(poem.category)}
                {poem.category}
              </span>
              {poem.featured && (
                <span className="featured-badge">
                  <Star className="h-3 w-3" />
                  Featured
                </span>
              )}
            </div>
            <FavoriteButton poemId={poem.id} />
          </div>
        </div>
        
        <div className="poem-content">
          <p className="poem-preview">
            {poem.preview}
          </p>
          
          <div className="poem-footer">
            <Link to={`/poem/${poem.id}`}>
              <button className="read-btn">
                <BookOpen className="h-4 w-4" />
                Read Poem
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PoemCard;