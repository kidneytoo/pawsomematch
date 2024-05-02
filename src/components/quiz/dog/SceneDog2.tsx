import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import { APARTMENT_DOGS, DOG_POOLS } from '@/constants/dog';
import { useSecond } from '@/hooks/useSecond';

type SceneDog2Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const SceneDog2 = ({ isShow, toNextScene }: SceneDog2Props) => {
  const { filterPools, updateAnswer } = useResultAtom();
  const second = useSecond(isShow);

  const handleSelect = (pools: string[], answer: string) => {
    filterPools(pools);
    updateAnswer(answer);
    toNextScene();
  };

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
          <div className="absolute inset-x-0 bottom-28 z-20 flex flex-col items-center px-16 animate-fade">
            <div className="mx-auto max-w-sm">
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(APARTMENT_DOGS, 'apartment')}
              >
                อพาร์ตเมนต์ของตัวเอง
              </button>
              <button
                className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
                onClick={() => handleSelect(DOG_POOLS, 'home')}
              >
                บ้านของตัวเอง
              </button>
            </div>
          </div>
        </>
    </>
  );
};

export default SceneDog2;
