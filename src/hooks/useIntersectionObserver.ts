import { useRef, useState, useEffect } from 'react';

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const useIntersectionObserver = <T extends Element>(
  options = DEFAULT_OPTIONS
) => {
  const ref = useRef<T>(null);
  const [isFirstVisible, setIsFirstVisible] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const updateEntry: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsFirstVisible(entry.isIntersecting || isFirstVisible);
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(updateEntry, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return { ref, isVisible, isFirstVisible };
};
