import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import { useState } from 'react';
import { CAT_POOLS, TIME_CATS } from '@/constants/cat';
import NextButton from '@/components/common/NextButton/NextButton';
import { twMerge } from 'tailwind-merge';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

type SceneDog6Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneDog7 = ({ isShow, toNextScene }: SceneDog6Props) => {
  const [current, setCurrent] = useState(1);
  const { addScore, removeScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    addScore(pools);
    updateAnswer(answer);
    toNextScene();
  };

  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
    >
      <Image
        className={twMerge(
          'object-cover transition-opacity duration-500',
          current <= 2 ? 'opacity-100' : 'opacity-0'
        )}
        src="/images/quiz/bg-friend-cat.webp"
        alt="Home BG"
        fill
      />
      <Image
        className={twMerge(
          'object-cover transition-opacity duration-500',
          current > 2 ? 'opacity-100' : 'opacity-0'
        )}
        src="/images/quiz/bg-time.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-24 z-20 px-12">
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              {current === 1 ? (
                <FadeInOut isShow={current === 1}>
                  <p className="my-1">เพื่อนของคุณเดินเข้ามาหา</p>
                </FadeInOut>
              ) : (
                <FadeInOut isShow={current === 2}>
                  <p className="my-1">ชอบจริง ๆ เลยนะแมวเนี่ย</p>
                  <p className="my-1 whitespace-nowrap">
                    เห็นบ่นอยากเลี้ยงอยู่นั่นแหละ...
                  </p>
                  <p className="my-1">ทำไมไม่เลี้ยงไว้สักตัวล่ะ</p>
                </FadeInOut>
              )}
              <div className="mt-8">
                <NextButton onClick={() => isShow && current < 3 && setCurrent(current + 1)} />
              </div>
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center animate-fade">
              <p className="mb-4">ติดเรื่องเวลาหรอ?</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(TIME_CATS, 'no-time')}
              >
                ใช่ กลัวจะไม่มีเวลาให้น้องเลย
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(CAT_POOLS, 'have-time')}
              >
                ก็พอมีเวลาให้น้องอยู่บ้างนะ
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(CAT_POOLS, 'have-time-full')}
              >
                ไม่ห่วงเรื่องนั้นเลย
                <br />
                เวลามีให้อยู่แล้ว
              </button>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneDog7;
