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
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

const SCENES: Record<number, (props: any) => JSX.Element> = {
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
      {/* <Scene toNextScene={toNextScene} /> */}
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 1}>
            <SceneCatPlace isShow={scene === 1} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 2}>
            <SceneCatGo toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 3}>
            <SceneCatStaff toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 4}>
            <SceneCatSelect isShow={scene === 4} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 5}>
            <SceneCatHair isShow={scene === 5} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 6}>
            <SceneCatTime isShow={scene === 6} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 7}>
            <SceneCatFamily toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 8}>
            <SceneCatHabit isShow={scene === 8} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 9}>
            <SceneCatConfident isShow={scene === 9} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
        <div className="absolute inset-0">
          <FadeInOut isShow={scene === 10}>
            <SceneCatResult isShow={scene === 10} toNextScene={toNextScene} />
          </FadeInOut>
        </div>
      </div>
    </main>
  );
};

export default QuizCatPage;
