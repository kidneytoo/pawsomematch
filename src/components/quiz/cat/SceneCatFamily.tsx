import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useState } from 'react';
import { CAT_POOLS, FAMILY_NOT_HAPPY_CATS } from '@/constants/cat';

type SceneDog8Props = {
  toNextScene: () => void;
};
const SceneCatFamily = ({ toNextScene }: SceneDog8Props) => {
  const [current, setCurrent] = useState(1);
  const { addScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    addScore(pools);
    updateAnswer(answer);
    if (answer === 'family' || answer === 'alone') {
      toNextScene();
      return;
    }
    if (current === 1) {
      setCurrent(2);
    } else {
      toNextScene();
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/bg-family.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-24 z-20 px-12"
          onClick={() => setCurrent(current + 1)}
        >
          {current === 1 && (
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              <p className="mb-4">อืมม แล้วที่บ้านล่ะ?</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'family')}
              >
                ครอบครัวเราก็อยากมี<br />เลี้ยงไว้เหมือนกัน
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(CAT_POOLS, 'family-happy')}
              >
                ที่บ้านไม่มีปัญหา
                <br />
                ถ้าน้องไม่สร้างปัญหานะ
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(FAMILY_NOT_HAPPY_CATS, 'family-not-happy')}
              >
                ที่บ้านไม่ค่อยโอเคที่จะเลี้ยงเลย
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'alone')}
              >
                เราอยู่คนเดียวน่ะ
              </button>
            </div>
          )}
          {current === 2 && (
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              <p className="mb-4">ห่วงเรื่องไรที่บ้านที่สุดหรอ?</p>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([...FAMILY_NOT_HAPPY_CATS, 'scottishFold'], 'have-kid')}
              >
                มีเด็กเล็ก
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(CAT_POOLS, 'aggressive-aware')}
              >
                กลัวน้องทำลายข้าวของ
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(FAMILY_NOT_HAPPY_CATS, 'have-another-pet')}
              >
                มีสัตว์เลี้ยงอีกตัวอยู่แล้ว
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatFamily;
