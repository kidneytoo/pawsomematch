import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  DOG_POOLS,
  LARGE_DOGS,
  MEDIUM_DOGS,
  SMALL_DOGS,
} from '@/constants/dog';
import { useState } from 'react';
import NextButton from '@/components/common/NextButton/NextButton';

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
    >
      <Image
        className="object-cover"
        src="/images/quiz/bg-staff-dog.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-24 z-20 px-8">
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
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
              <div className="mt-8">
                <NextButton onClick={() => current < 3 && setCurrent(current + 1)} />
              </div>
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-1">ระหว่างเดินไปคุณได้ยิน</p>
              <p className="my-1">เสียงหมาเห่าดังขึ้นเรื่อย ๆ</p>
              <p className="mb-6">คุณรู้สึกอย่างไร</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect('annoy')}
              >
                รำคาญเสียงหมาเห่า
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect('neutral')}
              >
                เฉย ๆ ธรรมชาติของหมา
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect('excited')}
              >
                ตื่นเต้นที่จะได้พบน้องหมา
              </button>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneDog5;
