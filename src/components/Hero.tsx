import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "./FloatingHearts";

const Hero = () => {
  const scrollToPoems = () => {
    const element = document.getElementById('poems');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-dancing font-bold mb-6 drop-shadow-lg animate-fade-in">
          Where Words Dance and Emotions Sing
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Immerse yourself in the world of poetry, where every verse tells a story
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8 border border-white/20 shadow-glow animate-scale-in">
          <h2 className="text-xl md:text-2xl font-merriweather font-bold mb-4 text-gold">
            Featured Poem: "Ghosts of Laughter"
          </h2>
          <div className="text-left font-merriweather text-sm md:text-base leading-relaxed whitespace-pre-line">
            {`It's not the flowing that breaks you.
In the ghosts of laughter
that can turn your silence later,
will flow away from your heart.`}
          </div>
        </div>

        <Button 
          onClick={scrollToPoems}
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-6 text-lg rounded-full shadow-elegant transition-all duration-300 hover:shadow-glow hover:scale-105"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Explore My Poems
        </Button>
      </div>
    </section>
  );
};

export default Hero;