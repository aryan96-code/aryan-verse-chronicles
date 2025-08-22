import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, BookOpen, Heart, Mic, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading poem...</p>
        </div>
      </div>
    );
  }

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6 opacity-50">📚</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Poem Not Found</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
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
      </div>
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'english': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'hindi': return 'bg-green-100 text-green-800 border-green-200';
      case 'shayari': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
          
          <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share Poem
          </Button>
        </div>

        {/* Poem content */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge 
                variant="outline" 
                className={`${getCategoryColor(poem.category)} flex items-center gap-2 px-3 py-1 text-sm font-medium border`}
              >
                {getCategoryIcon(poem.category)}
                {poem.category.charAt(0).toUpperCase() + poem.category.slice(1)}
              </Badge>
              
              {poem.featured && (
                <Badge 
                  variant="outline" 
                  className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-2 px-3 py-1 text-sm"
                >
                  <Star className="h-4 w-4 fill-current" />
                  Featured Poem
                </Badge>
              )}
            </div>
            
            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              {poem.title}
            </h1>
            
            {/* Poem content */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none">
                <div className="font-display text-lg md:text-xl leading-relaxed text-gray-800 whitespace-pre-wrap text-center">
                  {poem.fullText}
                </div>
              </div>
            </div>
            
            {/* Author signature */}
            <div className="text-center mb-8">
              <div className="font-display text-xl md:text-2xl text-primary font-semibold">
                ~ Aryan Writes
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/#poems">
                  <Heart className="h-4 w-4 mr-2" />
                  Explore More Poems
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/#contact">Connect With Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PoemPage;