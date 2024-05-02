import React, { useState, useEffect } from 'react';

type FadeInOutProps = {
  isShow: boolean;
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};
const FadeInOut = ({
  isShow,
  children,
  duration = 1000,
  delay = 0,
}: FadeInOutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
    else {
      setIsVisible(false);
    }
  }, [isShow, delay]);

  return (
    <div
      className={`fade-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInOut;
