export interface Poem {
  id: string;
  title: string;
  category: 'hindi' | 'english' | 'shayari';
  preview: string;
  fullText: string;
  theme?: any; // Keep for backward compatibility but not used in new design
  featured?: boolean;
}

// This is now just a fallback - poems are loaded from Supabase
export const poems: Poem[] = [];

export const getFeaturedPoem = () => poems.find(poem => poem.featured) || poems[0];
export const getPoemsByCategory = (category: string) => 
  category === 'all' ? poems : poems.filter(poem => poem.category === category);
export const getPoemById = (id: string) => poems.find(poem => poem.id === id);