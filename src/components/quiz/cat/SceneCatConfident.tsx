import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useEffect, useState } from 'react';
import { CAT_POOLS } from '@/constants/cat';
import LoopBG from '../LoopBG/LoopBG';
import NextButton from '@/components/common/NextButton/NextButton';

type SceneDogConfidentProps = {
  toNextScene: () => void;
};
const SceneDogConfident = ({ toNextScene }: SceneDogConfidentProps) => {
  const [current, setCurrent] = useState(1);
  const { addScore, updateAnswer } = useResultAtom();

  const answer = (answer: string) => {
    updateAnswer(answer);
    setCurrent(3);
  };

  const handleScore = (pools: string[], answer: string) => {
    addScore(pools);
    updateAnswer(answer);
    toNextScene();
  };

  useEffect(() => {
    if (current > 3) {
      toNextScene();
    }
  }, [current]);

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <LoopBG />
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20">
          <div className="mt-auto text-brown-bg text-center text-2xl flex flex-col items-center">
            {current === 1 && (
              <>
                <p>แล้วได้คิดบ้างหรือเปล่า</p>
                <p className="mb-4">ว่าเราต้องรับถึงข้อเสียเขาด้วย</p>
              </>
            )}
            {current === 2 && (
              <>
                <p>ถ้าได้เลี้ยงเขา มั่นใจหรือเปล่า</p>
                <p>ว่าเราจะให้เวลาเขา ดูแลเขา</p>
                <p className="mb-4">ถึงแม้ว่าเขาจะดื้อบ้าง ซนบ้าง</p>
              </>
            )}
            {current === 3 && (
              <>
                <p className="mb-4">คุณมั่นใจหรือเปล่านะ</p>
              </>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-24 z-30 px-8">
          {current === 2 && (
            <NextButton onClick={() => setCurrent(current + 1)} />
          )}
          {current === 1 && (
            <div>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => answer('always-know')}
              >
                รู้สิ
              </button>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => answer('never-think')}
              >
                ไม่เคยคิดเลย
              </button>
            </div>
          )}
          {current === 3 && (
            <div>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => handleScore(CAT_POOLS, 'confident')}
              >
                มั่นใจสิ...จะมอบให้
                <br />
                ทั้งเวลาและความรักเลย
              </button>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() => handleScore(['scottishFold', 'maine'], 'ready')}
              >
                แม้ว่าจะดื้อบ้าง แต่ก็
                <br />
                พร้อมจะเรียนรู้เขา
              </button>
              <button
                className="my-1 w-full bg-brown-text rounded-2xl px-6 py-2 text-white text-xl"
                onClick={() =>
                  handleScore(['russianBlue', 'bali'], 'time-aware')
                }
              >
                สิ่งที่กลัวคือไม่มีเวลา
                <br />
                ให้เขานี่แหละ
              </button>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SceneDogConfident;
