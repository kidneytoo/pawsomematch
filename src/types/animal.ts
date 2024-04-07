export type AnimalResult = {
  name: string;
  habits: string[];
  image: {
    sketch: string;
    real: string;
  };
  details: string[];
  tip: string;
  place: string;
  size: string;
  height: {
    min: number;
    max: number;
  };
  weight: {
    min: number;
    max: number;
  };
  cost: {
    min: number;
    max: number;
  };
  wanting: string[];
  diseases: string[];
}