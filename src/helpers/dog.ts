import dogs from '@/constants/dog.json';
import { AnimalResult } from '@/types/animal';

export const getDog = (type: string): AnimalResult => {
  return (dogs as Record<string, AnimalResult>)[type];
}