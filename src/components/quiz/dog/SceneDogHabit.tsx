import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_DESCRIPTIONS, DOG_POOLS } from '@/constants/dog';
import { useEffect, useState } from 'react';
import LoopBG from '../LoopBG/LoopBG';
import NextButton from '@/components/common/NextButton/NextButton';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

type SceneDogHabitProps = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneDogHabit = ({ isShow, toNextScene }: SceneDogHabitProps) => {
  const [current, setCurrent] = useState(1);
  const [maxScores, setMaxScores] = useState<string[]>([]);
  const { addScore, updateAnswer, getMax3Scores } = useResultAtom();

  useEffect(() => {
    if (isShow && maxScores.length === 0) {
      setMaxScores(getMax3Scores());
    }
  }, [isShow]);

  const answer = (answer: string) => {
    updateAnswer(answer);
    setCurrent(3);
  };

  const selectHabit = (key: string) => {
    addScore([key]);
    addScore([key]);
    updateAnswer(key);
    toNextScene();
  };

  useEffect(() => {
    if (current > 3) {
      toNextScene();
    }
  }, [current]);

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <LoopBG />
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20">
          <div className="mt-auto text-brown-bg text-center text-2xl flex flex-col items-center">
            {current <= 2 && (
              <>
                {current === 1 ? (
                  <FadeInOut isShow={current === 1}>
                    <p>แต่ดูหน้าน้องสิ ชอบไม่ใช่หรอพันธ์ุนี้</p>
                    <p>หากพยายามจนไม่เหลือปัญหา…</p>
                    <p className="mb-4">อยากเลี้ยงน้องเลยไหมล่ะ</p>
                  </FadeInOut>
                ) : (
                  <FadeInOut isShow={current === 2}>
                    <p className="mb-4">อยากเลี้ยงน้องเลยไหมล่ะ</p>
                  </FadeInOut>
                )}
              </>
            )}
            {current === 3 && (
              <FadeInOut isShow={current === 3}>
                <p className="mb-4">ชอบหมาแบบไหนมากกว่ากัน</p>
              </FadeInOut>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-24 px-8 flex justify-center z-30">
          {current === 1 && (
            <NextButton onClick={() => isShow && setCurrent(current + 1)} />
          )}
          {current === 2 && (
            <div className="px-12 animate-fade">
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => answer('sure')}
              >
                แน่นอนสิ
              </button>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => answer('dont-know')}
              >
                ไม่รู้เหมือนกัน
              </button>
            </div>
          )}
          {current === 3 && (
            <div className="animate-fade">
              {maxScores.map((key) => (
                <button
                  key={key}
                  className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                  onClick={() => selectHabit(key)}
                >
                  {DOG_DESCRIPTIONS[key]}
                </button>
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneDogHabit;
