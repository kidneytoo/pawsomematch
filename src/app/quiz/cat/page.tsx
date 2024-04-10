'use client';

import { useEffect } from 'react';

import SceneCatChat from '@/components/quiz/cat/SceneCatChat';
import { CAT_POOLS } from '@/constants/cat';
import { useQuiz } from '@/hooks/useQuiz';
import { useResultAtom } from '@/stores/result/useAtom';
import SceneCatPlace from '@/components/quiz/cat/SceneCatPlace';
import SceneCatGo from '@/components/quiz/cat/SceneCatGo';
import SceneCatStaff from '@/components/quiz/cat/SceneCatStaff';
import SceneCatSelect from '@/components/quiz/cat/SceneCatSelect';
import SceneCatHair from '@/components/quiz/cat/SceneCatHair';
import SceneCatTime from '@/components/quiz/cat/SceneCatTime';
import SceneCatFamily from '@/components/quiz/cat/SceneCatFamily';
import SceneCatHabit from '@/components/quiz/cat/SceneCatHabit';
import SceneCatConfident from '@/components/quiz/cat/SceneCatConfident';
import SceneCatResult from '@/components/quiz/cat/SceneCatResult';

const SCENES: Record<number, (props: any) => JSX.Element> = {
  1: SceneCatChat,
  2: SceneCatPlace,
  3: SceneCatGo,
  4: SceneCatStaff,
  5: SceneCatSelect,
  6: SceneCatHair,
  7: SceneCatTime,
  8: SceneCatFamily,
  9: SceneCatHabit,
  10: SceneCatConfident,
  11: SceneCatResult,
};

const QuizCatPage = () => {
  const { scene, toNextScene } = useQuiz();
  const { setPools } = useResultAtom();
  const Scene = SCENES[scene] ?? <></>;

  useEffect(() => {
    setPools(CAT_POOLS);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Scene toNextScene={toNextScene} />
    </main>
  );
};

export default QuizCatPage;
