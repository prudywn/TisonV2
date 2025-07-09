import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}