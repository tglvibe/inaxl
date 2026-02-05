import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1,
  as: Component = 'div' 
}: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.set(textRef.current, { yPercent: 100 });

    const anim = gsap.to(textRef.current, {
      yPercent: 0,
      duration,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      anim.kill();
    };
  }, [delay, duration]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
};

export default TextReveal;
