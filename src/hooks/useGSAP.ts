import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Text split animation hook
export const useSplitTextAnimation = (
  textRef: RefObject<HTMLElement>,
  options?: {
    trigger?: RefObject<HTMLElement>;
    delay?: number;
    stagger?: number;
    duration?: number;
  }
) => {
  useEffect(() => {
    if (!textRef.current) return;
    
    const text = textRef.current;
    const originalText = text.innerText;
    const chars = originalText.split('');
    
    text.innerHTML = chars
      .map(char => char === ' ' 
        ? '<span class="inline-block">&nbsp;</span>' 
        : `<span class="inline-block opacity-0">${char}</span>`
      )
      .join('');
    
    const charElements = text.querySelectorAll('span');
    
    const tl = gsap.timeline({
      scrollTrigger: options?.trigger?.current || text,
      start: 'top 80%',
    });
    
    tl.to(charElements, {
      opacity: 1,
      y: 0,
      duration: options?.duration || 0.05,
      stagger: options?.stagger || 0.02,
      delay: options?.delay || 0,
      ease: 'power2.out',
    });
    
    return () => {
      tl.kill();
      text.innerHTML = originalText;
    };
  }, [textRef, options]);
};

// Fade up animation on scroll
export const useFadeUpOnScroll = (
  ref: RefObject<HTMLElement>,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    start?: string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    gsap.set(ref.current, { opacity: 0, y: options?.y || 60 });
    
    const anim = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: options?.duration || 1,
      delay: options?.delay || 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: options?.start || 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [ref, options]);
};

// Staggered children animation
export const useStaggerAnimation = (
  containerRef: RefObject<HTMLElement>,
  childSelector: string,
  options?: {
    delay?: number;
    stagger?: number;
    duration?: number;
    y?: number;
    start?: string;
  }
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const children = containerRef.current.querySelectorAll(childSelector);
    
    gsap.set(children, { opacity: 0, y: options?.y || 40 });
    
    const anim = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: options?.duration || 0.8,
      stagger: options?.stagger || 0.15,
      delay: options?.delay || 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: options?.start || 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [containerRef, childSelector, options]);
};

// Parallax scroll effect
export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.5,
  direction: 'up' | 'down' = 'up'
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const yValue = direction === 'up' ? -100 * speed : 100 * speed;
    
    const anim = gsap.to(ref.current, {
      y: yValue,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [ref, speed, direction]);
};

// Scale on scroll
export const useScaleOnScroll = (
  ref: RefObject<HTMLElement>,
  options?: {
    startScale?: number;
    endScale?: number;
    start?: string;
    end?: string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    gsap.set(ref.current, { scale: options?.startScale || 0.8 });
    
    const anim = gsap.to(ref.current, {
      scale: options?.endScale || 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: options?.start || 'top 85%',
        end: options?.end || 'top 20%',
        scrub: 1,
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [ref, options]);
};

// Horizontal scroll section
export const useHorizontalScroll = (
  containerRef: RefObject<HTMLElement>,
  contentRef: RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    const getScrollAmount = () => {
      const contentWidth = contentRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      return -(contentWidth - viewportWidth);
    };
    
    const anim = gsap.to(contentRef.current, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${contentRef.current?.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [containerRef, contentRef]);
};

// Magnetic effect for buttons
export const useMagneticEffect = (ref: RefObject<HTMLElement>, strength: number = 0.3) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };
    
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength]);
};

// Counter animation
export const useCounterAnimation = (
  ref: RefObject<HTMLElement>,
  endValue: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    const obj = { value: 0 };
    
    const anim = gsap.to(obj, {
      value: endValue,
      duration: options?.duration || 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        const displayValue = options?.decimals 
          ? obj.value.toFixed(options.decimals)
          : Math.round(obj.value);
        el.innerText = `${options?.prefix || ''}${displayValue}${options?.suffix || ''}`;
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [ref, endValue, options]);
};

// Text reveal with mask
export const useTextReveal = (
  ref: RefObject<HTMLElement>,
  options?: {
    delay?: number;
    duration?: number;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    
    gsap.set(el, { 
      clipPath: 'inset(0 100% 0 0)',
      opacity: 1 
    });
    
    const anim = gsap.to(el, {
      clipPath: 'inset(0 0% 0 0)',
      duration: options?.duration || 1.2,
      delay: options?.delay || 0,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
    
    return () => {
      anim.kill();
    };
  }, [ref, options]);
};

export default {
  useSplitTextAnimation,
  useFadeUpOnScroll,
  useStaggerAnimation,
  useParallax,
  useScaleOnScroll,
  useHorizontalScroll,
  useMagneticEffect,
  useCounterAnimation,
  useTextReveal,
};
