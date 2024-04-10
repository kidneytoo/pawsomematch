import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  DOG_POOLS,
  LARGE_DOGS,
  LONG_HAIR_DOGS,
  MEDIUM_DOGS,
  NEED_TIME_DOGS,
  SHORT_HAIR_DOGS,
  SMALL_DOGS,
} from '@/constants/dog';
import { useState } from 'react';
import { CAT_POOLS, TIME_CATS } from '@/constants/cat';

type SceneDog6Props = {
  toNextScene: () => void;
};
const SceneCatTime = ({ toNextScene }: SceneDog6Props) => {
  const [current, setCurrent] = useState(1);
  const { addScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    addScore(pools);
    updateAnswer(answer);
    toNextScene();
  };

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src={
          current <= 2
            ? '/images/quiz/bg-friend-cat.webp'
            : '/images/quiz/bg-time.webp'
        }
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-48 z-20 px-12"
          onClick={() => setCurrent(current + 1)}
        >
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              {current === 1 ? (
                <>
                  <p className="my-2">เพื่อนของคุณเดินเข้ามาหา</p>
                </>
              ) : (
                <>
                  <p className="my-2">ชอบจริง ๆ เลยนะแมวเนี่ย</p>
                  <p className="my-2">เห็นบ่นอยากเลี้ยงอยู่นั่นแหละ ...</p>
                  <p className="my-2">ทำไมไม่เลี้ยงไว้สักตัวล่ะ</p>
                </>
              )}
              <Image
                className="mt-4"
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-2">ติดเรื่องเวลาหรอ?</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(TIME_CATS, 'no-time')}
              >
                ใช่ กลัวจะไม่มีเวลาให้น้องเลย
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(CAT_POOLS, 'have-time')}
              >
                กลัวว่าจะไม่ว่างบ้างหน่ะ
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(CAT_POOLS, 'have-time-full')}
              >
                ไม่ต้องห่วงเลย
                <br />
                เวลาหน่ะมีให้เต็มที่อยู่แล้ว
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatTime;
