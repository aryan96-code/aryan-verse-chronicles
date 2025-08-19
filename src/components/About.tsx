import { Feather, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-primary mb-4">
            About the Poet
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-80 h-96 bg-gradient-primary rounded-2xl mx-auto shadow-elegant overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Feather className="w-24 h-24 mx-auto mb-6 text-gold" />
                    <div className="text-6xl font-dancing font-bold">A</div>
                    <p className="text-xl font-medium mt-4">Aryan</p>
                    <p className="text-sm opacity-80">Poet & Wordsmith</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Feather className="w-6 h-6 mr-3 text-primary" />
                Journey of a Wordsmith
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hello, I'm Aryan. Poetry for me is not just words on paper—it's the rhythm of my heartbeat, 
                the whisper of my soul, and the canvas where I paint my deepest emotions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Growing up in a culturally rich environment, I was exposed to both English and Hindi literature, 
                which shaped my unique poetic voice that seamlessly blends traditional and contemporary themes.
              </p>
            </div>

            <Card className="bg-blue-50 border-l-4 border-secondary">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-secondary mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  My Creative Evolution
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  My poetry has evolved from simple rhymes to complex explorations of human emotions. 
                  I draw inspiration from everyday experiences, relationships, and the beautiful chaos of life. 
                  Each poem is a piece of my soul, crafted with care and shared with love.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Poems Written</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-secondary">2</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground">Emotions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
