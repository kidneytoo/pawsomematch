import Image from 'next/image';

import { useResultAtom } from '@/stores/result/useAtom';
import {
  CHEAP_DOGS,
  DOG_POOLS,
  MANAGE_MONEY_DOGS,
} from '@/constants/dog';

type SceneDogBudgetProps = {
  toNextScene: () => void;
};
const SceneDogBudget = ({ toNextScene }: SceneDogBudgetProps) => {
  const { addScore, removeScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    if (answer === 'manage-money') {
      removeScore(pools);
    } else {
      addScore(pools);
    }
    updateAnswer(answer);
    toNextScene();
  };

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/bg-budget.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <>
        <div className="absolute inset-x-0 bottom-24 z-20 px-8">
          <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
            <p className="my-1 whitespace-nowrap">ฮ่า ๆ แต่จะเลี้ยงทีนี่ลงทุนอยู่นะ</p>
            <p className="mb-4">ตัดเรื่องเงินไปไม่ได้เลย</p>
            <button
              className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
              onClick={() => handleSelect(CHEAP_DOGS, 'no-money')}
            >
              จริง เรื่องเงินเป็นปัญหาใหญ่เลย!
            </button>
            <button
              className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
              onClick={() => handleSelect(MANAGE_MONEY_DOGS, 'manage-money')}
            >
              นี่คิดว่าน่าจะพอบริหาร
              <br />
              ค่าใช้จ่ายได้ง่ายนะ
            </button>
            <button
              className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
              onClick={() => handleSelect(DOG_POOLS, 'full-support-money')}
            >
              เรื่องเงินเราพร้อมซัพพอร์ตเต็มที่
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default SceneDogBudget;
