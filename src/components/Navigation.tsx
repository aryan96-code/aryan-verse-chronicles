import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-gradient-primary text-white z-50 shadow-elegant">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Feather className="w-8 h-8 text-gold" />
            <span className="text-2xl font-dancing font-bold drop-shadow-md">
              Aryan Writes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('poems')}
              className="hover:text-gold transition-colors duration-300"
            >
              Poems
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gold transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gold transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold hover:bg-white/10"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)}>
            <div className="fixed right-0 top-0 h-full w-64 bg-gradient-primary transform translate-x-0 transition-transform duration-300">
              <div className="p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="mb-4 text-white hover:text-gold hover:bg-white/10 ml-auto block"
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="block w-full text-left py-2 px-4 text-white hover:text-gold hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('poems')}
                    className="block w-full text-left py-2 px-4 text-white hover:text-gold hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    Poems
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left py-2 px-4 text-white hover:text-gold hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left py-2 px-4 text-white hover:text-gold hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;