-- Create profiles table for user data
CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create poems table
CREATE TABLE public.poems (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  preview text NOT NULL,
  full_text text NOT NULL,
  theme jsonb NOT NULL,
  featured boolean DEFAULT false,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on poems
ALTER TABLE public.poems ENABLE ROW LEVEL SECURITY;

-- Create policies for poems
CREATE POLICY "Anyone can view poems" 
ON public.poems 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create poems" 
ON public.poems 
FOR INSERT 
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own poems" 
ON public.poems 
FOR UPDATE 
USING (auth.uid() = author_id);

-- Create favorites table
CREATE TABLE public.favorites (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  poem_id uuid NOT NULL REFERENCES public.poems(id) ON DELETE CASCADE,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, poem_id)
);

-- Enable RLS on favorites
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Create policies for favorites
CREATE POLICY "Users can view their own favorites" 
ON public.favorites 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites" 
ON public.favorites 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites" 
ON public.favorites 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_poems_updated_at
  BEFORE UPDATE ON public.poems
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing poems data
INSERT INTO public.poems (title, category, preview, full_text, theme, featured) VALUES
('wo chali gayi, to kya hua?', 'shayari', 'wo chali gayi, to kya hua?
main zinda hoon, par ye swaal rah gya..', 'wo chali gayi, to kya hua?
main zinda hoon, par ye swaal rah gya..

jab laut ke ayegii wo,
to milunga use-magar dhalti shaam ki Tarah,
khoya hua sa, bikhra hua saa...

mere kamre me ab sirf kitabein haii,
aur khwabon ke siwa kuch nahii, 
wo jab ayegi to paayegii-
main hoon, magar sirf dikhawe ke liye.

zindagi to chlti rhegii,
magar ab wo meri nahi,
bas ek saya hoga waqt ka,
jo uske saamne jhuthi muskan liye khada hoga...', '{"gradient": "from-purple-900 via-blue-800 to-indigo-900", "accentColor": "#8b5cf6", "textColor": "#e0e7ff", "bgPattern": "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", "patternPosition": "center"}', true);