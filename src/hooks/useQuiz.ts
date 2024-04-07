import { useState } from "react";

export const useQuiz = () => {
  const [scene, setScene] = useState(1);

  const toNextScene = () => {
    setScene((prev) => prev + 1);
  };

  return { scene, toNextScene };
};
