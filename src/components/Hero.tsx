import { BookOpen, Feather, Heart, Sparkles, Star, PenTool, ArrowDown } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 animate-gradient-shift"></div>
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float opacity-40">
        <Feather className="h-16 w-16 text-yellow-300" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <BookOpen className="h-20 w-20 text-pink-300" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-35" style={{ animationDelay: '2s' }}>
        <Heart className="h-12 w-12 text-red-300" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-35" style={{ animationDelay: '0.5s' }}>
        <Star className="h-14 w-14 text-yellow-400" fill="currentColor" />
      </div>
      <div className="absolute top-60 left-1/4 animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="h-10 w-10 text-cyan-300" />
      </div>
      <div className="absolute bottom-60 right-1/4 animate-float opacity-30" style={{ animationDelay: '2.5s' }}>
        <PenTool className="h-12 w-12 text-green-300" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced title with multiple effects */}
          <div className="mb-8">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight relative">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                Aryan Writes
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
            </h1>
            
            {/* Decorative line with heart */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent flex-1 max-w-32"></div>
              <Heart className="h-8 w-8 text-pink-400 animate-pulse" fill="currentColor" />
              <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent flex-1 max-w-32"></div>
            </div>
          </div>
          
          {/* Subtitle with gradient */}
          <p className="text-xl md:text-3xl mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Where words dance with emotions and every verse tells a story from the heart
            </span>
          </p>
          
          {/* Featured poem preview with enhanced styling */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 border border-white/30 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="h-6 w-6 text-yellow-400 animate-pulse" fill="currentColor" />
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-yellow-200">
                  Featured Poetry
                </h3>
                <Star className="h-6 w-6 text-yellow-400 animate-pulse" fill="currentColor" />
              </div>
              
              <blockquote className="font-display text-lg md:text-2xl leading-relaxed text-white/95 italic mb-6">
                "Tell the preachers to shatter their glass,<br />
                Tell the healers to taste their own herbs.<br />
                I traded in teeth and got paid in steel..."
              </blockquote>
              
              <div className="text-right">
                <span className="text-pink-300 font-semibold">~ From "Rebellion & Healing"</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToPoems}
              size="lg"
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 border-2 border-white/20"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative flex items-center gap-3">
                <BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Explore Poetry Collection
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </div>
            </Button>
            
            <Button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Heart className="mr-3 h-5 w-5" />
              About the Poet
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-white/60" />
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;