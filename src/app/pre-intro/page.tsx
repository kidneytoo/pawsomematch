'use client';

import PreIntro1 from '@/components/quiz/pre-intro/PreIntro1';
import PreIntro2 from '@/components/quiz/pre-intro/PreIntro2';
import { useQuiz } from '@/hooks/useQuiz';

const SCENES: Record<number, (props: any) => JSX.Element> = {
  1: PreIntro1,
  2: PreIntro2,
};

const PreIntroPage = () => {
  const { scene, toNextScene } = useQuiz();
  const Scene = SCENES[scene] ?? <></>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Scene toNextScene={toNextScene} />
    </main>
  );
};

export default PreIntroPage;
