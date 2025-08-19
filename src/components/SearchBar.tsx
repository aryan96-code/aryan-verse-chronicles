import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => (
  <div className="max-w-xl mx-auto mb-10">
    <div className="relative">
      <Input
        type="text"
        placeholder="Search by title, content or emotion..."
        className="w-full pl-12 pr-4 py-4 text-base bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-300"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
    </div>
  </div>
);

export default SearchBar;