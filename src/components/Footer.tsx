import { Heart, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/aryanwrites.18",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Feather className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="font-display text-3xl font-bold">Aryan Writes</span>
          </div>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Where emotions find their voice and words dance with the soul
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                asChild
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Collaboration Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold mb-4 text-yellow-400">
              Let's Collaborate!
            </h3>
            <p className="text-gray-300 mb-4">
              Interested in poetry collaborations, publications, or events? 
              I'm always open to connecting with fellow poets and literature enthusiasts.
            </p>
            <div className="space-y-2 text-sm">
              <p>📧 Email: <a href="mailto:aryanpriyadarshi96@gmail.com" className="text-yellow-400 hover:underline">aryanpriyadarshi96@gmail.com</a></p>
              <p>📱 Instagram: <a href="https://www.instagram.com/aryanwrites.18" className="text-yellow-400 hover:underline">@aryanwrites.18</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Aryan Writes. All rights reserved.
          </p>
          <div className="flex items-center justify-center text-yellow-400 font-display text-xl">
            <Heart className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" />
            Crafted with Love & Poetry
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;