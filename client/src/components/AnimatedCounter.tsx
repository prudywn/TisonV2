import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ 
  end, 
  suffix = '', 
  duration = 2, 
  className = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      let animationId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);
      
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5, ease: "easeOut" }
      });

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [isVisible, end, duration, controls]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      className={className}
    >
      {count}{suffix}
    </motion.span>
  );
}