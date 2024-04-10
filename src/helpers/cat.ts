import cats from '@/constants/cat.json';
import { AnimalResult } from '@/types/animal';

export const getCat = (type: string): AnimalResult | null => {
  const catObj = cats as Record<string, AnimalResult>
  if (catObj[type]) {
    return catObj[type];
  }
  return null;
}