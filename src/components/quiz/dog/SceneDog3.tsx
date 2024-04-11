import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_POOLS } from '@/constants/dog';
import { useEffect, useState } from 'react';

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
          onClick={() => setCurrent(current + 1)}
        >
          <div className="mt-auto text-brown-bg text-center text-3xl flex flex-col items-center">
            {current === 1 && (
              <p className="mb-12">คุณเตรียมตัวออกไปเจอเพื่อน</p>
            )}
            {current === 2 && (
              <>
                <p>ถึงคาเฟ่แล้ว ได้เวลาเข้าไปหา</p>
                <p className="mb-12">น้องหมาแสนน่ารักแล้วสิ ...</p>
              </>
            )}
            {current === 3 && (
              <>
                <p>ระหว่างสั่งเครื่องดื่ม</p>
                <p className="mb-12">พนักงานถามว่า</p>
              </>
            )}
            <Image
              className="mt-4"
              src="/images/icons/right-arrow-black.svg"
              alt="Right Arrow"
              width={30}
              height={15}
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDog3;
