import { Link } from "react-router-dom";
import { BookOpen, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const categoryColors = {
    hindi: "bg-gradient-accent text-white",
    english: "bg-gradient-primary text-white", 
    shayari: "bg-accent text-white"
  };

  const categoryIcons = {
    hindi: "🇮🇳",
    english: "🇺🇸",
    shayari: "🌙"
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white overflow-hidden animate-fade-in">
      {poem.featured && (
        <Badge className="absolute top-3 right-3 z-10 bg-gold text-black font-semibold">
          <Star className="w-3 h-3 mr-1" fill="currentColor" />
          Featured
        </Badge>
      )}
      
      <CardHeader className={`${categoryColors[poem.category]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{poem.title}</h3>
          <p className="text-sm opacity-90 flex items-center">
            <span className="mr-2">{categoryIcons[poem.category]}</span>
            {poem.category.charAt(0).toUpperCase() + poem.category.slice(1)}
          </p>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="font-merriweather text-sm leading-relaxed text-gray-700 line-clamp-4 whitespace-pre-line">
          {poem.preview}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          asChild
          className="w-full bg-gray-50 hover:bg-gray-100 text-primary border-0 shadow-none hover:shadow-soft transition-all duration-300"
        >
          <Link to={`/poem/${poem.id}`} className="flex items-center justify-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Full Poem
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PoemCard;