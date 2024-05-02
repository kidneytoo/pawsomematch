'use client';
import Image from 'next/image';

import FadeInOut from '@/components/common/FadeInOut/FadeInOut';
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
    <main className="bg-black flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        {/* <Scene toNextScene={toNextScene} /> */}
        <FadeInOut isShow={scene <= 2}>
          <Scene1 toNextScene={toNextScene} />
        </FadeInOut>
        <Scene2 scene={scene} isShow={scene === 2 || scene === 3} toNextScene={toNextScene} />
        <FadeInOut isShow={scene <= 2} delay={0}>
          <Image
            className="object-cover"
            src="/images/home/bg-home-01.webp"
            alt="Home BG"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
        </FadeInOut>
      </div>
    </main>
  );
};

export default QuizPage;
