import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

import { useResultAtom } from '@/stores/result/useAtom';
import { CAT_POOLS } from '@/constants/cat';

type SceneCatBudgetProps = {
  toNextScene: () => void;
};
const SceneCatBudget = ({ toNextScene }: SceneCatBudgetProps) => {
  const { addScore, updateAnswer } = useResultAtom();

  const handleSelect = (pools: string[], answer: string) => {
    addScore(pools);
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
      <FadeIn>
        <div className="absolute inset-x-0 bottom-48 z-20 px-12">
          <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
            <p className="my-2">ฮ่า ๆ แต่จะเลี้ยงทีนี่ลงทุนอยู่นะ</p>
            <p className="my-2">ตัดเรื่องเงินไปไม่ได้เลย</p>
            <button
              className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
              onClick={() => handleSelect(CAT_POOLS, 'no-money')}
            >
              จริง เรื่องเงินเป็นปัญหาใหญ่เลย!
            </button>
            <button
              className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
              onClick={() => handleSelect(CAT_POOLS, 'manage-money')}
            >
              นี่คิดว่าน่าจะพอบริหาร
              <br />
              ค่าใช้จ่ายได้ง่ายนะ
            </button>
            <button
              className="my-2 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
              onClick={() => handleSelect(CAT_POOLS, 'full-support-money')}
            >
              เรื่องเงินเราพร้อมซัพพอร์ตเต็มที่
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SceneCatBudget;
