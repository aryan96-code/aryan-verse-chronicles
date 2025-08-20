import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  poemId: string;
  className?: string;
}

const FavoriteButton = ({ poemId, className = "" }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      checkFavoriteStatus();
    }
  }, [user, poemId]);

  const checkFavoriteStatus = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('id')
        .eq('user_id', user.id)
        .eq('poem_id', poemId)
        .maybeSingle();
      
      if (error) {
        console.error('Error checking favorite status:', error);
        return;
      }
      
      setIsFavorite(!!data);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  const toggleFavorite = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      if (isFavorite) {
        // Remove from favorites
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('poem_id', poemId);
        
        if (error) throw error;
        
        setIsFavorite(false);
        toast({
          title: "Removed from favorites",
          description: "The poem has been removed from your favorites",
        });
      } else {
        // Add to favorites
        const { error } = await supabase
          .from('favorites')
          .insert({
            user_id: user.id,
            poem_id: poemId
          });
        
        if (error) throw error;
        
        setIsFavorite(true);
        toast({
          title: "Added to favorites",
          description: "The poem has been added to your favorites",
        });
      }
    } catch (error: any) {
      console.error('Error toggling favorite:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update favorites",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <Button 
      variant="ghost"
      size="sm"
      onClick={toggleFavorite}
      disabled={loading}
      className={`p-2 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 border border-border/20 hover:border-border/40 transition-all duration-300 ${className}`}
    >
      <Heart 
        className={`h-4 w-4 transition-colors duration-300 ${
          isFavorite ? 'text-destructive fill-destructive' : 'text-muted-foreground hover:text-foreground'
        } ${loading ? 'animate-pulse' : ''}`}
      />
    </Button>
  );
};

export default FavoriteButton;