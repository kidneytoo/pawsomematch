import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_DESCRIPTIONS, DOG_POOLS } from '@/constants/dog';
import { useEffect, useState } from 'react';

type SceneDogHabitProps = {
  toNextScene: () => void;
};
const SceneDogHabit = ({ toNextScene }: SceneDogHabitProps) => {
  const [current, setCurrent] = useState(1);
  const { addScore, updateAnswer, getMax3Scores } = useResultAtom();

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
      <Image
        className="object-cover"
        src="/images/quiz/scene3/loop4.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20"
          onClick={() => current === 1 && setCurrent(current + 1)}
        >
          <div className="mt-auto text-brown-bg text-center text-3xl flex flex-col items-center">
            {current <= 2 && (
              <>
                <p>แต่ดูหน้าน้องสิ ชอบไม่ใช่หรอพันธ์ุนี้</p>
                <p>หากพยายามจนไม่เหลือปัญหา…</p>
                <p className="mb-4">อยากเลี้ยงน้องเลยไหมล่ะ</p>
              </>
            )}
            {current === 3 && (
              <>
                <p className="mb-4">ชอบหมาแบบไหนมากกว่ากัน</p>
              </>
            )}
            {current === 1 && (
              <Image
                className="mt-8"
                src="/images/icons/right-arrow-black.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            )}
            {current === 2 && (
              <div className="px-12">
                <button
                  className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                  onClick={() => answer('sure')}
                >
                  แน่นอนสิ
                </button>
                <button
                  className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                  onClick={() => answer('dont-know')}
                >
                  ไม่รู้เหมือนกัน
                </button>
              </div>
            )}
            {current === 3 && (
              <div className="px-12">
                {getMax3Scores().map((key) => (
                  <button
                    key={key}
                    className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                    onClick={() => selectHabit(key)}
                  >
                    {DOG_DESCRIPTIONS[key]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDogHabit;
