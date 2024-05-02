import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  DOG_POOLS,
  LARGE_DOGS,
  MEDIUM_DOGS,
  SMALL_DOGS,
} from '@/constants/dog';
import { useState } from 'react';
import { FRIENDLY_CATS, NEUTRAL_CATS } from '@/constants/cat';
import NextButton from '@/components/common/NextButton/NextButton';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

type SceneDog5Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneCatSelect = ({ isShow, toNextScene }: SceneDog5Props) => {
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
      <>
        <div className="absolute inset-x-0 bottom-24 z-20 px-8">
          {current < 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              {current === 1 ? (
                <FadeInOut isShow={current === 1}>
                  <p className="my-1">พนักงานพาคุณและเพื่อน</p>
                  <p className="my-1">ไปที่โซนน้องแมวสุดน่ารัก</p>
                </FadeInOut>
              ) : (
                <FadeInOut isShow={current === 2}>
                  <p className="my-1">คุณเห็นน้องแมวมากมาย</p>
                  <p className="my-1">บางตัวเข้ามาหา</p>
                  <p className="my-1">บางตัวนอนเล่น</p>
                </FadeInOut>
              )}
              <div className="mt-8">
                <NextButton
                  onClick={() => isShow && current < 3 && setCurrent(current + 1)}
                />
              </div>
            </div>
          )}
          {current === 3 && (
            <>
              <div className="mt-auto text-center text-2xl flex flex-col items-center text-white animate-fade">
                <p className="my-1">คุณเห็นน้องแมวมากมาย</p>
                <p className="my-1">บางตัวเข้ามาหา</p>
                <p className="mb-4">บางตัวนอนเล่น คุณเลือกที่จะ</p>
                <button
                  className="my-1 w-full text-brown-text rounded-2xl px-6 py-2 bg-white text-xl"
                  onClick={() => handleSelect(NEUTRAL_CATS, 'wait')}
                >
                  รอแมวที่เดินเข้ามาหา
                </button>
                <button
                  className="my-1 w-full text-brown-text rounded-2xl px-6 py-2 bg-white text-xl"
                  onClick={() => handleSelect(FRIENDLY_CATS, 'go')}
                >
                  เดินไปหาแมวที่นอนอยู่
                </button>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneCatSelect;
