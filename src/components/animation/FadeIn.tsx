import React, { useEffect, useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type FadeInProps = {
  children: React.ReactNode;
  threshold?: number;
};
const FadeIn = ({ children, threshold = 0.2 }: FadeInProps) => {
  const { isFirstVisible, ref } = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold,
  });

  useEffect(() => {
    if (isFirstVisible) {
      if (ref.current) {
        ref.current.classList.add('opacity-100');
        ref.current.classList.remove('opacity-0');
      }
    }
  }, [isFirstVisible]);

  return (
    <div ref={ref} className="opacity-0 transition-opacity duration-300">
      {children}
    </div>
  );
};
export default FadeIn;
