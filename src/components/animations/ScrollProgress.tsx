import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollProgressProps {
  className?: string;
}

const ScrollProgress = ({ className = '' }: ScrollProgressProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 z-[100] bg-secondary ${className}`}>
      <div
        ref={progressRef}
        className="h-full bg-primary origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;
