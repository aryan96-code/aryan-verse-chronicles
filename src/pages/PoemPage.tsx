import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, BookOpen, Heart, Mic, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FavoriteButton from "@/components/FavoriteButton";
import { supabase } from "@/integrations/supabase/client";
import { Poem } from "@/data/poems";

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [poem, setPoem] = useState<Poem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPoem(id);
    }
  }, [id]);

  const fetchPoem = async (poemId: string) => {
    try {
      const { data, error } = await supabase
        .from('poems')
        .select('*')
        .eq('id', poemId)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching poem:', error);
        return;
      }
      
      if (data) {
        const transformedPoem = {
          ...data,
          fullText: data.full_text
        } as unknown as Poem;
        setPoem(transformedPoem);
      }
    } catch (error) {
      console.error('Error fetching poem:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading poem...</p>
        </div>
      </div>
    );
  }

  if (!poem) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6 opacity-50">📚</div>
          <h1 className="text-3xl font-bold mb-4">Poem Not Found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The poem you're looking for might have been moved or doesn't exist. 
            Let's get you back to exploring our collection.
          </p>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'english': return <BookOpen className="h-4 w-4" />;
      case 'hindi': return <Heart className="h-4 w-4" />;
      case 'shayari': return <Mic className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: poem.title,
      text: `Check out this beautiful poem: "${poem.title}"`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "Poem link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <motion.div 
      className="min-h-screen py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
          
          <div className="flex items-center gap-2">
            <FavoriteButton poemId={poem.id} />
            <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Poem
            </Button>
          </div>
        </motion.div>

        {/* Poem content */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${poem.theme.gradient}`} />
          
          <div className="relative z-10 p-8 md:p-16" style={{ color: poem.theme.textColor }}>
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Badge 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: poem.theme.accentColor, color: '#111' }}
              >
                {getCategoryIcon(poem.category)}
                {poem.category.charAt(0).toUpperCase() + poem.category.slice(1)}
              </Badge>
              
              {poem.featured && (
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-background/20 backdrop-blur-sm text-foreground/90"
                >
                  <Star className="h-4 w-4 fill-current" />
                  Featured Poem
                </Badge>
              )}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {poem.title}
            </motion.h1>
            
            <motion.div 
              className="mb-16"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <pre className="whitespace-pre-wrap font-sans text-lg md:text-xl leading-relaxed tracking-wide opacity-95 text-center">
                {poem.fullText}
              </pre>
            </motion.div>
            
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div 
                className="font-dancing text-2xl md:text-3xl"
                style={{ color: poem.theme.accentColor }}
              >
                ~ Aryan Writes
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Button asChild size="lg" className="bg-background/20 hover:bg-background/30 text-foreground border border-foreground/20 hover:border-foreground/40 backdrop-blur-sm transition-all duration-300">
                <Link to="/#poems">
                  <Heart className="h-4 w-4 mr-2" />
                  Explore More Poems
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:border-foreground/40 bg-transparent hover:bg-background/10 backdrop-blur-sm">
                <Link to="/#contact">Connect With Me</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PoemPage;