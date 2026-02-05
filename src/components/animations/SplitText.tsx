import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

const SplitText = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  highlightWords = [],
  highlightClassName = 'text-primary',
}: SplitTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');

    gsap.set(chars, { opacity: 0, y: 20, rotateX: -90 });

    const anim = gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger,
      delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      anim.kill();
    };
  }, [delay, stagger]);

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className={`char inline-block ${isHighlight ? highlightClassName : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="char inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
