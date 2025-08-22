import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => (
  <div className="max-w-md mx-auto">
    <div className="relative">
      <Input
        type="text"
        placeholder="Search poems by title, content, or category..."
        className="w-full pl-10 pr-4 py-3 text-base bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-primary rounded-lg shadow-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  </div>
);

export default SearchBar;