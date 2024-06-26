import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_POOLS } from '@/constants/dog';
import { useEffect, useState } from 'react';
import LoopBG from '../LoopBG/LoopBG';
import NextButton from '@/components/common/NextButton/NextButton';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';

type SceneDog3Props = {
  toNextScene: () => void;
};
const SceneDog3 = ({ toNextScene }: SceneDog3Props) => {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (current > 3) {
      toNextScene();
    }
  }, [current]);

  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
    >
      <LoopBG />
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20">
          <div className="mt-auto text-brown-bg text-center text-2xl flex flex-col items-center">
            {current === 1 && (
              <FadeInOut isShow={current === 1}>
              <p className="mb-12">คุณเตรียมตัวออกไปเจอเพื่อน</p>
              </FadeInOut>
            )}
            {current === 2 && (
              <FadeInOut isShow={current === 2}>
                <p>ถึงคาเฟ่แล้ว ได้เวลาเข้าไปหา</p>
                <p className="mb-12">น้องหมาแสนน่ารักแล้วสิ ...</p>
              </FadeInOut>
            )}
            {current === 3 && (
              <FadeInOut isShow={current === 3}>
                <p>ระหว่างสั่งเครื่องดื่ม</p>
                <p className="mb-12">พนักงานถามว่า</p>
              </FadeInOut>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-24 z-20 flex justify-center">
          <NextButton onClick={() => setCurrent(current + 1)} />
          </div>
      </>
    </div>
  );
};

export default SceneDog3;
