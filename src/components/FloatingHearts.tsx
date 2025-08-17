import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Math.random();
      const leftPosition = Math.random() * 100;
      const animationDuration = Math.random() * 3 + 4; // 4-7 seconds
      const size = Math.random() * 10 + 15; // 15-25px
      const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6

      return {
        id: id,
        style: {
          position: 'absolute' as const,
          left: `${leftPosition}vw`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
          animation: `heart-float ${animationDuration}s linear infinite`,
          color: 'hsl(var(--accent))',
        }
      };
    };

    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, createHeart);
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev, createHeart()];
        // Keep only last 20 hearts to prevent memory issues
        return newHearts.slice(-20);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          style={heart.style}
          className="animate-heart-float"
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
