import Hero from "@/components/Hero";
import PoemsCollection from "@/components/PoemsCollection";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PoemsCollection />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
