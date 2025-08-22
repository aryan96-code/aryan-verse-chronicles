import { Feather, Heart, BookOpen, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About the Poet
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet Aryan, a passionate poet who weaves emotions into words and transforms experiences into verses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-white">
                  <Feather className="w-24 h-24 mx-auto mb-6 text-yellow-300" />
                  <div className="text-6xl font-display font-bold mb-4">A</div>
                  <p className="text-2xl font-semibold">Aryan</p>
                  <p className="text-lg opacity-90 mt-2">Poet & Wordsmith</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <PenTool className="w-6 h-6 mr-3 text-primary" />
                Journey of Words
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hello, I'm Aryan. Poetry for me is not just words on paper—it's the rhythm of my heartbeat, 
                the whisper of my soul, and the canvas where I paint my deepest emotions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Growing up in a culturally rich environment, I was exposed to both English and Hindi literature, 
                which shaped my unique poetic voice that seamlessly blends traditional and contemporary themes.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary">
              <CardContent className="p-6">
                <h4 className="font-display text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  My Creative Philosophy
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  My poetry has evolved from simple rhymes to complex explorations of human emotions. 
                  I draw inspiration from everyday experiences, relationships, and the beautiful chaos of life. 
                  Each poem is a piece of my soul, crafted with care and shared with love.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Poems Written</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Languages</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-gray-600 font-medium">Emotions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;