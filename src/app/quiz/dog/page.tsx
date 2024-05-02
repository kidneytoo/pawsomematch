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
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

const QuizDogPage = () => {
  const { scene, toNextScene } = useQuiz();
  const { setPools } = useResultAtom();

  useEffect(() => {
    setPools(DOG_POOLS);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Scene toNextScene={toNextScene} /> */}
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 1}>
            <SceneDog2 isShow={scene === 1} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 2}>
            <SceneDog3 toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 3}>
            <SceneDog4 toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 4}>
            <SceneDog5 toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 5}>
            <SceneDog6 toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 6}>
            <SceneDog7 isShow={scene === 6} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 7}>
            <SceneDog8 toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 8}>
            <SceneDogBudget toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 9}>
            <SceneDogHabit isShow={scene === 9} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 10}>
            <SceneDogConfident
              isShow={scene === 10}
              toNextScene={toNextScene}
            />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 11}>
            <SceneDogResult isShow={scene === 11} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
      </div>
    </main>
  );
};

export default QuizDogPage;
