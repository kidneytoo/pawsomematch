import { useEffect, useState } from 'react';

export const useSecond = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return second;
};
