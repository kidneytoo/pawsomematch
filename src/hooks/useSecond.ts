import { useEffect, useState } from 'react';

export const useSecond = (status?: boolean) => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSecond(0);
    }, 1000);
    return () => clearTimeout(interval);
  }, [status]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [status]);

  return second;
};
