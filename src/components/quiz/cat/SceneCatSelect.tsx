import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  DOG_POOLS,
  LARGE_DOGS,
  MEDIUM_DOGS,
  SMALL_DOGS,
} from '@/constants/dog';
import { useState } from 'react';
import { FRIENDLY_CATS, NEUTRAL_CATS } from '@/constants/cat';

type SceneDog5Props = {
  toNextScene: () => void;
};
const SceneCatSelect = ({ toNextScene }: SceneDog5Props) => {
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
        src="/images/quiz/bg-staff-cat.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-48 z-20 px-16"
          onClick={() => setCurrent(current + 1)}
        >
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              {current === 1 ? (
                <>
                  <p className="my-2">พนักงานพาคุณและเพื่อน</p>
                  <p className="my-2">ไปที่โซนน้องแมวสุดน่ารัก</p>
                </>
              ) : (
                <>
                  <p className="my-2">คุณเห็นน้องแมวมากมาย</p>
                  <p className="my-2">บางตัวเข้ามาหา</p>
                  <p className="my-2">บางตัวนอนเล่น</p>
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
              <p className="my-2">คุณเห็นน้องแมวมากมาย</p>
                  <p className="my-2">บางตัวเข้ามาหา</p>
                  <p className="my-2">บางตัวนอนเล่น คุณเลือกที่จะ</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(NEUTRAL_CATS, 'wait')}
              >
                รอแมวที่เดินเข้ามาหา
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(FRIENDLY_CATS, 'go')}
              >
                เดินไปหาแมวที่นอนอยู่
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatSelect;
