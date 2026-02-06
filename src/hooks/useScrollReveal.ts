import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Individual reveal elements - fade up
      gsap.utils.toArray<HTMLElement>('[data-animate="reveal"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      // Stagger groups - children animate in sequence
      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((group) => {
        gsap.fromTo(
          Array.from(group.children) as HTMLElement[],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 88%' },
          }
        );
      });

      // Fade from left
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Fade from right
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-right"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Scale in
      gsap.utils.toArray<HTMLElement>('[data-animate="scale"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return ref;
}
