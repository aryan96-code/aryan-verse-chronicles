import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FavoriteButtonProps {
  poemId: string;
  className?: string;
}

const FavoriteButton = ({ poemId, className = "" }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(poemId));
  }, [poemId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter((id: string) => id !== poemId)
      : [...favorites, poemId];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Button 
      variant="ghost"
      size="sm"
      onClick={toggleFavorite}
      className={`p-2 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 border border-border/20 hover:border-border/40 transition-all duration-300 ${className}`}
    >
      <Heart 
        className={`h-4 w-4 transition-colors duration-300 ${
          isFavorite ? 'text-destructive fill-destructive' : 'text-muted-foreground hover:text-foreground'
        }`}
      />
    </Button>
  );
};

export default FavoriteButton;