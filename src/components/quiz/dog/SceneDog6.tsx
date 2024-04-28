import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  DOG_POOLS,
  LARGE_DOGS,
  LONG_HAIR_DOGS,
  MEDIUM_DOGS,
  SHORT_HAIR_DOGS,
  SMALL_DOGS,
} from '@/constants/dog';
import { useState } from 'react';
import NextButton from '@/components/common/NextButton/NextButton';

type SceneDog6Props = {
  toNextScene: () => void;
};
const SceneDog6 = ({ toNextScene }: SceneDog6Props) => {
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
          current === 1
            ? '/images/quiz/bg-staff-dog.webp'
            : '/images/quiz/bg-touching-pet.webp'
        }
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div className="absolute inset-x-0 bottom-24 z-20 px-16">
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              {current === 1 ? (
                <>
                  <p className="my-1">คุณเห็นน้องหมามากมาย</p>
                  <p className="my-1">ที่พร้อมจะเล่นกับคุณ</p>
                </>
              ) : (
                <>
                  <p className="my-1">คุณเดินเข้าไปหาน้องหมา</p>
                  <p className="my-1">ที่คุณชอบตัวหนึ่ง</p>
                </>
              )}
              <div className="mt-6">
                <NextButton
                  onClick={() => current < 3 && setCurrent(current + 1)}
                />
              </div>
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-1">มันเดินเข้ามาหาคุณ</p>
              <p className="my-1">คุณจึงลูบหัวลูบตัวมัน</p>
              <p className="mb-4">คุณรู้สึกถึง ...</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(LONG_HAIR_DOGS, 'long')}
              >
                ขนนุ่มยาวสลวย
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(SHORT_HAIR_DOGS, 'short')}
              >
                ขนสั้นเนียนนุ่ม
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDog6;
