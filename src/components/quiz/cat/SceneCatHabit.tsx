import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useEffect, useState } from 'react';

type SceneCatHabitProps = {
  toNextScene: () => void;
};
const SceneCatHabit = ({ toNextScene }: SceneCatHabitProps) => {
  const [current, setCurrent] = useState(1);
  const { updateAnswer } = useResultAtom();

  const answer = (answer: string) => {
    updateAnswer(answer);
    setCurrent(current + 1);
  };

  useEffect(() => {
    if (current > 4) {
      toNextScene();
    }
  }, [current]);

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/scene3/loop4.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20"
          onClick={() => (current === 1 || current === 3) && setCurrent(current + 1)}
        >
          <div className="mt-auto text-brown-bg text-center text-2xl flex flex-col items-center">
            {current <= 2 && (
              <>
                <p>แต่ดูหน้าน้องสิ ชอบไม่ใช่หรอพันธ์ุนี้</p>
                <p>หากพยายามจนไม่เหลือปัญหา…</p>
                <p className="mb-2">อยากเลี้ยงน้องเลยไหมล่ะ</p>
              </>
            )}
            {current === 3 && (
              <>
                <p className="mb-2">งั้นลองมาหาเลี้ยงสักตัวแล้วล่ะ</p>
              </>
            )}
            {current === 4 && (
              <>
                <p className="mb-2">อยากเลี้ยงเพราะอะไรหรอ</p>
              </>
            )}
            {current === 1 || current === 3 && (
              <Image
                className="mt-8"
                src="/images/icons/right-arrow-black.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            )}
            {current === 2 && (
              <div className="px-12">
                <button
                  className="my-2 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                  onClick={() => answer('sure')}
                >
                  แน่นอนสิ
                </button>
                <button
                  className="my-2 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                  onClick={() => answer('dont-know')}
                >
                  ไม่รู้เหมือนกัน
                </button>
              </div>
            )}
            {current === 4 && (
              <div className="px-12">
              <button
                className="my-2 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                onClick={() => answer('lonely-fix')}
              >
                เลี้ยงไว้แก้เหงา
              </button>
              <button
                className="my-2 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-2xl"
                onClick={() => answer('for-friend')}
              >
                เลี้ยงไว้เป็นเพื่อนคู่ใจ
              </button>
            </div>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatHabit;
