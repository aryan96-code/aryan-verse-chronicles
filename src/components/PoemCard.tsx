import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Poem } from "@/data/poems";
import { BookOpen, Heart, Mic, Star } from "lucide-react";

interface PoemCardProps {
  poem: Poem;
}

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
      <Card className="relative h-full overflow-hidden bg-transparent border-none shadow-2xl">
        {/* Dynamic background with theme */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${poem.theme.gradient}`}
        />
        
        {/* Background pattern overlay */}
        {poem.theme.bgPattern && (
          <div 
            className="absolute inset-0 opacity-30 transition-opacity duration-500"
            style={{ 
              backgroundImage: poem.theme.bgPattern,
              backgroundPosition: poem.theme.patternPosition || 'center',
              backgroundSize: isHovered ? '150%' : '200%',
              transition: 'all 0.8s ease-out'
            }}
          />
        )}
        
        {/* Animated gradient overlay on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0"
          animate={{ 
            opacity: isHovered ? 0.1 : 0,
            background: isHovered ? `radial-gradient(circle at 50% 50%, ${poem.theme.accentColor}40, transparent 60%)` : 'transparent'
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 flex flex-col h-full p-6" style={{ color: poem.theme.textColor }}>
          <CardHeader className="p-0 mb-4">
            <div className="flex justify-between items-start mb-3">
              <motion.div
                animate={{ 
                  backgroundColor: isHovered ? `${poem.theme.accentColor}20` : poem.theme.accentColor,
                  scale: isHovered ? 1.05 : 1
                }}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium capitalize"
                style={{ 
                  backgroundColor: poem.theme.accentColor, 
                  color: '#111'
                }}
                transition={{ duration: 0.3 }}
              >
                {getCategoryIcon(poem.category)}
                {poem.category}
              </motion.div>
              
              {poem.featured && (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isHovered ? 12 : 0 }}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-background/20 backdrop-blur-sm text-foreground/90"
                >
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </motion.div>
              )}
            </div>
            
            <CardTitle 
              className="text-2xl font-bold leading-tight"
              style={{ 
                color: isHovered ? poem.theme.accentColor : poem.theme.textColor,
                transition: 'color 0.3s ease'
              }}
            >
              {poem.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex-grow mb-4">
            <motion.div 
              className="text-sm opacity-90 leading-relaxed"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              <pre className="whitespace-pre-wrap font-sans">
                {poem.preview}
              </pre>
            </motion.div>
          </CardContent>
          
          <CardFooter className="p-0">
            <Button 
              asChild 
              variant="ghost" 
              className="w-full justify-between group text-foreground/80 hover:text-foreground border border-foreground/20 hover:border-foreground/40 bg-background/10 hover:bg-background/20 backdrop-blur-sm"
            >
              <Link to={`/poem/${poem.id}`}>
                <span className="font-medium">Read Full Poem</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default PoemCard;