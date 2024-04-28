import Image from 'next/image';
import { useSecond } from '@/hooks/useSecond';
import Link from 'next/link';
import { useEffect } from 'react';

type SceneDog1Props = {
  toNextScene: () => void;
};
const SceneDog1 = ({ toNextScene }: SceneDog1Props) => {
  const second = useSecond();

  useEffect(() => {
    if (second >= 3) {
      toNextScene();
    }
  }, [second])

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative bg-[#DBB4AE]">
      <div className="bg-[#96184C] px-8 pb-6 pt-8 flex items-center">
        <Image
          src="/images/icons/chevron-left.svg"
          alt="Chevron Left"
          width={20}
          height={40}
        />
        <div className="mx-6 flex-grow flex items-center">
          <Image
            src="/images/icons/user-white.svg"
            alt="User"
            width={40}
            height={40}
          />
          <p className="ml-4 text-white font-bold text-2xl">mymint</p>
        </div>
        <Image
          src="/images/icons/phone.svg"
          alt="Phone"
          width={40}
          height={40}
        />
      </div>
      <div className="mt-8 mx-4">
        <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
          <p className="whitespace-nowrap text-2xl">ตื่นยังอะ</p>
        </div>
        <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
          <p className="whitespace-nowrap text-2xl">เราตื่นละ</p>
        </div>
        <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
          <p className="whitespace-nowrap text-2xl">สรุปจะไปคาเฟ่หมาหรือแมว</p>
        </div>
        <div className="my-4 ml-auto w-min rounded-2xl px-4 py-2 bg-[#F2E5D1]">
          <p className="whitespace-nowrap text-2xl">คาเฟ่หมา</p>
        </div>
        {second >= 1 && (
          <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
          <p className="whitespace-nowrap text-2xl">ได้เลย เจอกันนะ</p>
        </div>
        )}
      </div>
      
    </div>
  );
};

export default SceneDog1;
