import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useState } from 'react';
import { LONG_HAIR_CATS, SHORT_HAIR_CATS } from '@/constants/cat';

type SceneDog6Props = {
  toNextScene: () => void;
};
const SceneCatHair = ({ toNextScene }: SceneDog6Props) => {
  const [current, setCurrent] = useState(2);
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
        src="/images/quiz/bg-touching-pet.webp"
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
                  <p className="my-2">คุณเห็นน้องหมามากมาย</p>
                  <p className="my-2">ที่พร้อมจะเล่นกับคุณ</p>
                </>
              ) : (
                <>
                  <p className="my-2">คุณพบกับน้องแมว</p>
                  <p className="my-2">ที่ชอบตัวหนึ่ง</p>
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
              <p className="my-2">เมื่อคุณอยู่กับน้องแมวตัวนั้น</p>
              <p className="my-2">คุณจึงลูบหัวลูบตัวมัน</p>
              <p className="my-2">คุณรู้สึกถึง ...</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(SHORT_HAIR_CATS, 'short')}
              >
                ขนสั้นเนียนนุ่ม
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(LONG_HAIR_CATS, 'long')}
              >
                ขนยาวสลวย
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatHair;