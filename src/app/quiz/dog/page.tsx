'use client';

import { useEffect } from 'react';

import SceneDog1 from '@/components/quiz/dog/SceneDog1';
import SceneDog2 from '@/components/quiz/dog/SceneDog2';
import SceneDog3 from '@/components/quiz/dog/SceneDog3';
import SceneDog4 from '@/components/quiz/dog/SceneDog4';
import SceneDog5 from '@/components/quiz/dog/SceneDog5';
import SceneDog6 from '@/components/quiz/dog/SceneDog6';
import SceneDog7 from '@/components/quiz/dog/SceneDog7';
import SceneDog8 from '@/components/quiz/dog/SceneDog8';
import SceneDogBudget from '@/components/quiz/dog/SceneDogBudget';
import SceneDogHabit from '@/components/quiz/dog/SceneDogHabit';

import { DOG_POOLS } from '@/constants/dog';
import { useQuiz } from '@/hooks/useQuiz';
import { useResultAtom } from '@/stores/result/useAtom';
import SceneDogConfident from '@/components/quiz/dog/SceneDogConfident';
import SceneDogResult from '@/components/quiz/dog/SceneDogResult';

const SCENES: Record<number, (props: any) => JSX.Element> = {
  1: SceneDog1,
  2: SceneDog2,
  3: SceneDog3,
  4: SceneDog4,
  5: SceneDog5,
  6: SceneDog6,
  7: SceneDog7,
  8: SceneDog8,
  9: SceneDogBudget,
  10: SceneDogHabit,
  11: SceneDogConfident,
  12: SceneDogResult,
};

const QuizDogPage = () => {
  const { scene, toNextScene } = useQuiz();
  const { setPools } = useResultAtom();
  const Scene = SCENES[scene] ?? <></>;

  useEffect(() => {
    setPools(DOG_POOLS);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Scene toNextScene={toNextScene} />
    </main>
  );
};

export default QuizDogPage;
