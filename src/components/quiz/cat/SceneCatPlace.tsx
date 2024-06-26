import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_POOLS } from '@/constants/dog';
import { CAT_POOLS } from '@/constants/cat';

type SceneDog2Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneCatPlace = ({ isShow, toNextScene }: SceneDog2Props) => {
  const { updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    updateAnswer(answer);
    toNextScene();
  }

  return (
    <>
      <Image
        className="object-cover"
        src="/images/quiz/bg-home-02.webp"
        alt="Home BG"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-64 z-20">
          <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
            <p className="my-1">คุณวางโทรศัพท์ลง</p>
            <p className="my-1">ลุกจากเตียงและมองไปรอบ ๆ</p>
            <p className="my-1">คุณพบว่าตัวเองอยู่ใน</p>
          </div>
        </div>
      </>
      <>
        <div className="absolute inset-x-0 bottom-28 z-20 flex flex-col items-center px-8 animate-fade">
          <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
            onClick={() => handleSelect(CAT_POOLS, 'apartment')}>
            อพาร์ตเมนต์ของตัวเอง
          </button>
          <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
            onClick={() => handleSelect(CAT_POOLS, 'home')}>
            บ้านของตัวเอง
          </button>
        </div>
      </>
    </>
  );
};

export default SceneCatPlace;
