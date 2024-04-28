export type AnimalResult = {
  name: string;
  habits: string[];
  image: {
    sketch: string;
    real: string;
    result: string;
  };
  details: string[];
  tip: string;
  place: string;
  size?: string;
  height: {
    min?: number;
    max?: number;
    male?: {
      min: number;
      max: number
    };
    female?: {
      min: number;
      max: number
    }
  };
  weight: {
    min?: number;
    max?: number;
    male?: {
      min: number;
      max: number
    };
    female?: {
      min: number;
      max: number
    }
  };
  cost: {
    min: number;
    max: number;
  };
  wanting: string[];
  diseases: string[];
}