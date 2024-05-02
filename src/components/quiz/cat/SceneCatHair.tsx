import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useState } from 'react';
import { LONG_HAIR_CATS, SHORT_HAIR_CATS } from '@/constants/cat';
import NextButton from '@/components/common/NextButton/NextButton';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

type SceneDog6Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneCatHair = ({ isShow, toNextScene }: SceneDog6Props) => {
  const [current, setCurrent] = useState(2);
  const { addScore, updateAnswer } = useResultAtom();

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
        className="object-cover"
        src="/images/quiz/bg-touching-pet.webp"
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
                  <p className="my-1">คุณเห็นน้องแมวมากมาย</p>
                  <p className="my-1">ที่พร้อมจะเล่นกับคุณ</p>
                </FadeInOut>
              ) : (
                <FadeInOut isShow={current === 2}>
                  <p className="my-1">คุณพบกับน้องแมว</p>
                  <p className="my-1">ที่ชอบตัวหนึ่ง</p>
                </FadeInOut>
              )}
              <div className="mt-8">
                <NextButton
                  onClick={() => isShow && setCurrent(current + 1)}
                />
              </div>
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center animate-fade">
              <p className="my-1">เมื่อคุณอยู่กับน้องแมวตัวนั้น</p>
              <p className="my-1">คุณจึงลูบหัวลูบตัวมัน</p>
              <p className="mb-4">คุณรู้สึกถึง ...</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(SHORT_HAIR_CATS, 'short')}
              >
                ขนสั้นเนียนนุ่ม
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(LONG_HAIR_CATS, 'long')}
              >
                ขนยาวสลวย
              </button>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneCatHair;
