import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useState } from 'react';
import { NOT_FIRST_CATS } from '@/constants/cat';

type SceneDog8Props = {
  toNextScene: () => void;
};
const SceneCatFamily = ({ toNextScene }: SceneDog8Props) => {
  const [current, setCurrent] = useState(1);
  const { addScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    addScore(pools);
    updateAnswer(answer);
    if (answer === 'first') {
      setCurrent(3);
      return;
    }
    if (current < 3) {
      setCurrent(current + 1);
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
          className="absolute inset-x-0 bottom-48 z-20 px-12"
          onClick={() => setCurrent(current + 1)}
        >
          {current === 1 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-2">ที่บ้านเลี้ยงสัตว์ตัวอื่นด้วยไหม</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'first')}
              >
                ไม่มีนะ ถ้าเลี้ยงก็เป็นตัวแรกเลย
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect(NOT_FIRST_CATS, 'not-first')}
              >
                มีสัตว์เลี้ยงอีกตัวอยู่แล้ว
              </button>
            </div>
          )}
          {current === 2 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-2">กังวลไหมว่าต้องเลี้ยงน้องแมว</p>
              <p className="my-2">ด้วยกันกับสัตว์ตัวอื่นหน่ะ</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'not-worry')}
              >
                ไม่กังวลเลย
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'train')}
              >
                น่าจะต้องฝึกดูแหละ
              </button>
            </div>
          )}
          {current === 3 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="my-2">แล้วที่บ้านมีพี่น้องหรือเปล่า</p>
              <p className="my-2">เผื่อมาเป็นเพื่อนเล่นกับแมวได้ไง</p>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'family-love-cat')}
              >
                มีนะ และน่าจะชอบแมวกันด้วย
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'family-not-love-cat')}
              >
                มีนะ แต่ไม่น่าชอบแมวหน่ะสิ
              </button>
              <button
                className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
                onClick={() => handleSelect([], 'no-family')}
              >
                ไม่มีหรอก
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatFamily;
