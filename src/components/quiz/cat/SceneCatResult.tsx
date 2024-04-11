import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { getCat } from '@/helpers/cat';

type SceneDogResultProps = {
  toNextScene: () => void;
};
const SceneCatResult = ({ toNextScene }: SceneDogResultProps) => {
  const [current, setCurrent] = useState(1);
  const { getMostScore } = useResultAtom();

  const cat = getCat(getMostScore());

  useEffect(() => {
    if (current > 2) {
      redirect(`/result/${getMostScore()}`);
    }
  }, [current]);

  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
      onClick={() => setCurrent(current + 1)}
    >
      <Image
        className="object-cover"
        src={cat?.image.sketch ?? ''}
        alt="Home BG"
        fill
      />
      {current === 1 && <div className="absolute inset-0 bg-[#231F20] z-10" />}
      {current === 2 && (
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      )}
      {current === 1 && (
        <FadeIn>
          <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-20">
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              <>
                <p>รู้ใจตัวเองดีนะ ...</p>
                <p className="mb-4">งั้นก็คงถึงเวลาบอกลาน้องแล้วล่ะ</p>
              </>
              <Image
                className="mt-8"
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            </div>
          </div>
        </FadeIn>
      )}
      {current === 2 && (
        <FadeIn>
          <div className="absolute inset-x-0 bottom-24 z-20 px-16">
            <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
              <>
                <p className="my-2 whitespace-nowrap">
                  คุณมองน้องเป็นครั้งสุดท้าย...
                </p>
              </>
              <Image
                className="mt-8"
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={30}
                height={15}
              />
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
};

export default SceneCatResult;
