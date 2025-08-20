import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import PoemCard from '@/components/PoemCard';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Poem } from '@/data/poems';

const FavoritesPage = () => {
  const [favoritePoems, setFavoritePoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchFavorites = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select(`
          poems (
            id,
            title,
            category,
            preview,
            full_text,
            theme,
            featured
          )
        `)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error fetching favorites:', error);
        return;
      }
      
      // Transform database format to match frontend interface
      const poems: Poem[] = data?.map((fav: any) => ({
        ...fav.poems,
        fullText: fav.poems.full_text  // Map database field to frontend field
      })).filter(Boolean) || [];
      setFavoritePoems(poems);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div 
          className="text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
            <p className="text-muted-foreground mb-6">
              Sign in to save your favorite poems and access them anytime.
            </p>
          </div>
          <Button onClick={() => navigate('/auth')}>
            <BookOpen className="mr-2 h-4 w-4" />
            Sign In to Continue
          </Button>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your favorites...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heart className="h-12 w-12 mx-auto text-destructive mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Your Favorite Poems
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {favoritePoems.length === 0 
              ? "You haven't saved any favorites yet. Start exploring and save poems you love!"
              : `You have ${favoritePoems.length} favorite ${favoritePoems.length === 1 ? 'poem' : 'poems'}`
            }
          </p>
        </motion.div>

        {favoritePoems.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6 opacity-50">📚</div>
              <h2 className="text-2xl font-semibold mb-4">No favorites yet</h2>
              <p className="text-muted-foreground mb-8">
                Discover beautiful poems and click the heart icon to save them to your favorites.
              </p>
              <Button onClick={() => navigate('/')}>
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Poems
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {favoritePoems.map((poem, index) => (
              <motion.div
                key={poem.id}
                variants={{
                  hidden: { y: 50, opacity: 0, scale: 0.9 },
                  visible: { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 25 }
                  }
                }}
              >
                <PoemCard poem={poem} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;