import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 6,
          size: 12 + Math.random() * 8,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="floating-heart text-primary"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;