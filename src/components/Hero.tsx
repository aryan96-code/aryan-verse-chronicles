import { BookOpen, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPoems = () => {
    const element = document.getElementById('poems');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Feather className="h-16 w-16 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <BookOpen className="h-20 w-20 animate-pulse" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Aryan Writes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Where words dance with emotions and every verse tells a story from the heart
          </p>
          
          {/* Featured poem preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="font-display text-lg md:text-xl font-semibold mb-4 text-yellow-200">
              Latest Featured Poem
            </h3>
            <blockquote className="font-display text-base md:text-lg leading-relaxed text-white/95 italic">
              "Tell the preachers to shatter their glass,<br />
              Tell the healers to taste their own herbs.<br />
              I traded in teeth and got paid in steel..."
            </blockquote>
          </div>
          
          <Button 
            onClick={scrollToPoems}
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Poetry Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;