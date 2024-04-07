'use client';

import Scene1 from '@/components/quiz/common/Scene1';
import Scene2 from '@/components/quiz/common/Scene2';
import Scene3 from '@/components/quiz/common/Scene3';
import Scene4 from '@/components/quiz/common/Scene4';
import { useQuiz } from '@/hooks/useQuiz';

const SCENES: Record<number, (props: any) => JSX.Element> = {
  1: Scene1,
  2: Scene2,
  3: Scene3,
  4: Scene4,
};

const QuizPage = () => {
  const { scene, toNextScene } = useQuiz();
  const Scene = SCENES[scene] ?? <></>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Scene toNextScene={toNextScene} />
    </main>
  );
};

export default QuizPage;
