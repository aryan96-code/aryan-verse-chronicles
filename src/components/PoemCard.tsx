import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Mic, Star } from "lucide-react";
import { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'english': return <BookOpen className="h-3 w-3" />;
      case 'hindi': return <Heart className="h-3 w-3" />;
      case 'shayari': return <Mic className="h-3 w-3" />;
      default: return <BookOpen className="h-3 w-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'english': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'hindi': return 'bg-green-100 text-green-800 border-green-200';
      case 'shayari': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge 
            variant="outline" 
            className={`${getCategoryColor(poem.category)} flex items-center gap-1 text-xs font-medium border`}
          >
            {getCategoryIcon(poem.category)}
            {poem.category.charAt(0).toUpperCase() + poem.category.slice(1)}
          </Badge>
          {poem.featured && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>
        <h3 className="font-display font-semibold text-lg text-gray-900 leading-tight line-clamp-2">
          {poem.title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 font-body">
          {poem.preview}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link to={`/poem/${poem.id}`} className="flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            Read Full Poem
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PoemCard;