'use client';
import Image from 'next/image';

import FadeInOut from '@/components/common/FadeInOut/FadeInOut';
import PreIntro1 from '@/components/quiz/pre-intro/PreIntro1';
import PreIntro2 from '@/components/quiz/pre-intro/PreIntro2';
import PreIntro3 from '@/components/quiz/pre-intro/PreIntro3';
import { useQuiz } from '@/hooks/useQuiz';


const PreIntroPage = () => {
  const { scene, toNextScene } = useQuiz();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        <Image
          className="object-cover"
          src="/images/home/bg-home-01.webp"
          alt="Home BG"
          fill
          priority
        />
        <FadeInOut isShow={scene === 1} delay={0}>
          <PreIntro1 isShow={scene === 1} toNextScene={toNextScene} />
        </FadeInOut>
        <FadeInOut isShow={scene === 2} delay={1000}>
          <PreIntro2 isShow={scene === 2} toNextScene={toNextScene} />
        </FadeInOut>
        <FadeInOut isShow={scene === 3} delay={1000}>
          <PreIntro3 isShow={scene === 3} toNextScene={toNextScene} />
        </FadeInOut>
      </div>
    </main>
  );
};

export default PreIntroPage;
