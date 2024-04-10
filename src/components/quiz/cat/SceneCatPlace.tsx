import Image from 'next/image';

import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_POOLS } from '@/constants/dog';
import { CAT_POOLS } from '@/constants/cat';

type SceneDog2Props = {
  toNextScene: () => void;
};
const SceneCatPlace = ({ toNextScene }: SceneDog2Props) => {
  const { updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    updateAnswer(answer);
    toNextScene();
  }

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/bg-home-02.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div className="absolute inset-x-0 bottom-80 z-20">
          <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
            <p className="my-2">คุณวางโทรศัพท์ลง</p>
            <p className="my-2">ลุกจากเตียงและมองไปรอบ ๆ</p>
            <p className="my-2">คุณพบว่าตัวเองอยู่ใน</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="absolute inset-x-0 bottom-40 z-20 flex flex-col items-center px-16">
          <button
            className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
            onClick={() => handleSelect(CAT_POOLS, 'apartment')}>
            อพาร์ตเมนต์ของตัวเอง
          </button>
          <button
            className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
            onClick={() => handleSelect(CAT_POOLS, 'home')}>
            บ้านของตัวเอง
          </button>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatPlace;
