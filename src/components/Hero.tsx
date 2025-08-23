import { BookOpen, Feather, Heart, Sparkles, Star, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToPoems = () => {
    const element = document.getElementById('poems');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift"></div>
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Feather className="h-16 w-16 text-white/60" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <BookOpen className="h-20 w-20 text-white/60" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-25" style={{ animationDelay: '2s' }}>
        <Heart className="h-12 w-12 text-pink-300/60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-25" style={{ animationDelay: '0.5s' }}>
        <Star className="h-14 w-14 text-yellow-300/60" />
      </div>
      <div className="absolute top-60 left-1/4 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="h-10 w-10 text-blue-300/60" />
      </div>
      <div className="absolute bottom-60 right-1/4 animate-float opacity-20" style={{ animationDelay: '2.5s' }}>
        <PenTool className="h-12 w-12 text-purple-300/60" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced title with shimmer effect */}
          <div className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight relative">
              <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-shimmer">
                Aryan Writes
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-40"></div>
              <Heart className="h-6 w-6 text-pink-300 animate-pulse" fill="currentColor" />
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-40"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl mb-12 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Where words dance with emotions and every verse tells a story from the heart
          </p>
          
          {/* Enhanced featured poem preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 border border-white/20 max-w-3xl mx-auto shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="h-5 w-5 text-yellow-300 animate-pulse" fill="currentColor" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-yellow-200">
                  Latest Featured Poem
                </h3>
                <Star className="h-5 w-5 text-yellow-300 animate-pulse" fill="currentColor" />
              </div>
              <blockquote className="font-display text-lg md:text-xl leading-relaxed text-white/95 italic">
                "Tell the preachers to shatter their glass,<br />
                Tell the healers to taste their own herbs.<br />
                I traded in teeth and got paid in steel..."
              </blockquote>
            </div>
          </div>
          
          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPoems}
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold px-10 py-6 text-lg rounded-full shadow-glow hover:shadow-elegant transition-all duration-500 animate-pulse-glow group"
            >
              <BookOpen className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Explore Poetry Collection
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;