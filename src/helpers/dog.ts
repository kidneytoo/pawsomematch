import dogs from '@/constants/dog.json';
import { AnimalResult } from '@/types/animal';

export const getDog = (type: string): AnimalResult | null => {
  const dogObj = dogs as Record<string, AnimalResult>
  if (dogObj[type]) {
    return dogObj[type];
  }
  return null;
}