'use client';

import { useEffect, useState } from 'react';

interface LoadingProps {
  children: React.ReactNode;
}
const LoadingHOC = ({ children }: LoadingProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? children : null}</>;
};
export default LoadingHOC;
