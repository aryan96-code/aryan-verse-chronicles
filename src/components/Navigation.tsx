import { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PenTool className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white font-display">
              Aryan Writes
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('poems')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Poems
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
        >
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('poems')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Poems
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;