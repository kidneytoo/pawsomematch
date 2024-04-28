import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { ANNOYED_DOGS, DOG_POOLS, TIME_DOGS } from '@/constants/dog';
import { useEffect, useState } from 'react';
import { getDog } from '@/helpers/dog';
import { redirect } from 'next/navigation';
import NextButton from '@/components/common/NextButton/NextButton';

type SceneDogResultProps = {
  toNextScene: () => void;
};
const SceneDogResult = ({ toNextScene }: SceneDogResultProps) => {
  const [current, setCurrent] = useState(1);
  const { getMostScore } = useResultAtom();

  const dog = getDog(getMostScore());

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
        src={dog?.image.sketch ?? ''}
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
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <>
                <p>รู้ใจตัวเองดีนะ ...</p>
                <p className="mb-4">งั้นก็คงถึงเวลาบอกลาน้องแล้วล่ะ</p>
              </>
            </div>
          </div>
        </FadeIn>
      )}
      <FadeIn>
        <div className="absolute inset-x-0 bottom-24 z-30 px-8 flex flex-col items-center">
          {current === 2 && (
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <>
                <p className="my-2 whitespace-nowrap">
                  คุณมองน้องเป็นครั้งสุดท้าย...
                </p>
              </>
            </div>
          )}
          <div className="mt-8">
            <NextButton onClick={() => setCurrent(current + 1)} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDogResult;
