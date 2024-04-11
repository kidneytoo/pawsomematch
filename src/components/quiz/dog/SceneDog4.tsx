import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { DOG_POOLS, LARGE_DOGS, MEDIUM_DOGS, SMALL_DOGS } from '@/constants/dog';

type SceneDog4Props = {
  toNextScene: () => void;
};
const SceneDog4 = ({ toNextScene }: SceneDog4Props) => {
  const { filterPools, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    filterPools(pools);
    updateAnswer(answer);
    toNextScene();
  }

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/bg-staff-dog.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-24 z-20 px-16"
        >
          <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
            <p className="my-2">วันนี้สนใจไปโซนไหนดีคะ</p>
            <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
            onClick={() => handleSelect(SMALL_DOGS, 'small')}>
            โซนน้องหมาพันธุ์เล็ก
          </button>
          <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
            onClick={() => handleSelect(MEDIUM_DOGS, 'medium')}>
            โซนน้องหมาพันธุ์กลาง
          </button>
          <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
            onClick={() => handleSelect([...MEDIUM_DOGS, ...LARGE_DOGS], 'large')}>
            โซนน้องหมาพันธุ์ใหญ่
          </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneDog4;
