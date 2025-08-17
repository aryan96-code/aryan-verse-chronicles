import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPoemById } from "@/data/poems";
import { useToast } from "@/hooks/use-toast";

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const poem = id ? getPoemById(id) : null;

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800">
        <Card className="p-8 text-center bg-white/10 backdrop-blur-lg border-white/20">
          <h1 className="text-2xl font-bold text-white mb-4">Poem Not Found</h1>
          <p className="text-white/80 mb-6">The poem you're looking for doesn't exist.</p>
          <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: poem.title,
          text: poem.preview,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "Poem link has been copied to clipboard.",
        });
      }
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  };

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${poem.theme.gradient} relative overflow-hidden`}
      style={{ 
        backgroundImage: poem.theme.bgPattern 
      }}
    >
      {/* Navigation Bar */}
      <nav className="relative z-10 p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button 
            asChild 
            variant="ghost" 
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collection
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleShare}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Poem Content */}
      <main className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Poem Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="text-sm font-medium" style={{ color: poem.theme.textColor }}>
                {poem.category.charAt(0).toUpperCase() + poem.category.slice(1)} Poetry
              </span>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-merriweather font-bold mb-6 leading-tight"
              style={{ color: poem.theme.textColor }}
            >
              {poem.title}
            </h1>
            
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: poem.theme.accentColor }}
            ></div>
          </div>

          {/* Poem Text */}
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
            <div className="p-8 md:p-12">
              <div 
                className="font-merriweather text-lg md:text-xl leading-relaxed whitespace-pre-line text-center"
                style={{ color: poem.theme.textColor }}
              >
                {poem.fullText}
              </div>
            </div>
          </Card>

          {/* Author Signature */}
          <div className="text-center mt-12">
            <div 
              className="font-dancing text-2xl md:text-3xl"
              style={{ color: poem.theme.accentColor }}
            >
              ~ Aryan Writes
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="space-y-4">
              <p 
                className="text-lg mb-6"
                style={{ color: poem.theme.textColor }}
              >
                Enjoyed this poem? Explore more of my poetry collection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm"
                >
                  <Link to="/#poems">
                    <Heart className="w-4 h-4 mr-2" />
                    More Poems
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/#contact">
                    Connect With Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20 animate-float"
          style={{ backgroundColor: poem.theme.accentColor }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full opacity-10 animate-float"
          style={{ backgroundColor: poem.theme.accentColor, animationDelay: '2s' }}
        ></div>
      </div>
    </div>
  );
};

export default PoemPage;