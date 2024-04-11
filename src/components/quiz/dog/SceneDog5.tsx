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

type SceneDog5Props = {
  toNextScene: () => void;
};
const SceneDog5 = ({ toNextScene }: SceneDog5Props) => {
  const [current, setCurrent] = useState(1);
  const { result, filterPools, updateAnswer } = useResultAtom();

  const getText = () => {
    if (result.answer.includes('small')) {
      return 'หมาเล็ก';
    }
    if (result.answer.includes('medium')) {
      return 'หมากลาง';
    }
    return 'หมาใหญ่';
  };

  const handleSelect = (answer: string) => {
    updateAnswer(answer);
    toNextScene();
  };

  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
      onClick={() => current < 3 && setCurrent(current + 1)}
    >
      <Image
        className="object-cover"
        src="/images/quiz/bg-staff-dog.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div className="absolute inset-x-0 bottom-24 z-20 px-16">
          {current < 3 && (
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              {current === 1 ? (
                <>
                  <p className="my-1">พนักงานพาคุณและเพื่อน</p>
                  <p className="my-1">ไปที่โซน{getText()}</p>
                </>
              ) : (
                <>
                  <p className="my-1">ระหว่างเดินไปคุณได้ยิน</p>
                  <p className="my-1">เสียงหมาเห่าดังขึ้นเรื่อย ๆ</p>
                </>
              )}
              <Image
                className="mt-8"
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              <p className="my-1">ระหว่างเดินไปคุณได้ยิน</p>
              <p className="my-1">เสียงหมาเห่าดังขึ้นเรื่อย ๆ</p>
              <p className="mb-6">คุณรู้สึกอย่างไร</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect('annoy')}
              >
                รำคาญเสียงหมาเห่า
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect('neutral')}
              >
                เฉย ๆ ธรรมชาติของหมา
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect('excited')}
              >
                ตื่นเต้นที่จะได้พบน้องหมา
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDog5;
