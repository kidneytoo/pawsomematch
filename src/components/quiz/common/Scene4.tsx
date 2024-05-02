import Image from 'next/image';
import { useSecond } from '@/hooks/useSecond';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Scene4Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const Scene4AfterSelect = ({ choice, toNextScene }: { choice: 'dog' | 'cat', toNextScene: () => void }) => {
  const second = useSecond();
  const router = useRouter();

  useEffect(() => {
    if (second >= 2) {
      toNextScene();
    }
    if (second >= 3) {
      router.push(`/quiz/${choice}`);
    }
  }, [second]);
  return (
    <>
      <div className="my-4 ml-auto w-min rounded-2xl px-4 py-2 bg-[#F2E5D1]">
        <p className="whitespace-nowrap text-2xl">
          {choice === 'dog' ? 'คาเฟ่หมา' : 'คาเฟ่แมว'}
        </p>
      </div>
      {second >= 1 && (
        <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
          <p className="whitespace-nowrap text-2xl">ได้เลย เจอกันนะ</p>
        </div>
      )}
    </>
  );
};

const Scene4 = ({ isShow, toNextScene }: Scene4Props) => {
  const [choice, setChoice] = useState<'dog' | 'cat' | null>(null);
  const second = useSecond(isShow, 0);
  return (
    <div
      className={twMerge(
        'absolute z-50 mx-auto w-full max-w-lg min-h-screen bg-[#DBB4AE] transition-transform duration-500',
        !isShow ? 'translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="min-h-screen relative">
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
          {second >= 1 && (
            <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
              <p className="whitespace-nowrap text-2xl">ตื่นยังอะ</p>
            </div>
          )}
          {second >= 2 && (
            <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
              <p className="whitespace-nowrap text-2xl">เราตื่นละ</p>
            </div>
          )}
          {second >= 3 && (
            <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
              <p className="whitespace-nowrap text-2xl">
                สรุปจะไปคาเฟ่หมาหรือแมว
              </p>
            </div>
          )}
          {choice && <Scene4AfterSelect choice={choice} toNextScene={toNextScene} />}
        </div>
        {!choice && second >= 4 && (
          <div className="absolute inset-x-0 bottom-24 mx-8">
            <button
              onClick={() => setChoice('dog')}
              className="my-2 block w-full bg-brown-text rounded-3xl px-6 py-3 text-white text-2xl text-center"
            >
              คาเฟ่หมา
            </button>
            <button
              onClick={() => setChoice('cat')}
              className="my-2 block w-full bg-brown-text rounded-3xl px-6 py-3 text-white text-2xl text-center"
            >
              คาเฟ่แมว
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Scene4;
