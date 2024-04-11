import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';
import { useSecond } from '@/hooks/useSecond';

type Scene2Props = {
  toNextScene: () => void;
};
const Scene3 = ({ toNextScene }: Scene2Props) => {
  const second = useSecond();

  const delayToNextScene = () => {
    if (second >= 4) {
      toNextScene();
    }
  }

  const getBGLoop = () => {
    const loops: Record<number, string> = {
      0: '/images/quiz/scene3/loop1.webp',
      1: '/images/quiz/scene3/loop2.webp',
      2: '/images/quiz/scene3/loop3.webp',
      3: '/images/quiz/scene3/loop4.webp',
      4: '/images/quiz/scene3/loop5.webp',
    };

    return loops[second % 5];
  };
  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
      onClick={() => delayToNextScene()}
    >
      <Image className="object-cover" src={getBGLoop()} alt="Loop BG" fill />
      <div className="absolute inset-x-0 top-24 z-20">
        <div className="px-8 w-full flex flex-col items-center">
          <Image
            className="mb-8"
            src="/images/icons/lock-brown.svg"
            alt="Lock"
            width={32}
            height={32}
          />
          <p className="text-brown-text-light text-9xl font-bold">07:00</p>
          {second >= 2 && (
            <div className="mt-4 w-full relative rounded-3xl px-4 py-4 flex items-center bg-white">
              <Image
                src="/images/icons/user.svg"
                alt="Lock"
                width={40}
                height={40}
              />
              <div className="ml-4">
                <p className="text-2xl font-bold">mymint</p>
                <p className="text-2xl">1 ข้อความใหม่</p>
              </div>
              <p className="absolute top-4 right-4">ตอนนี้</p>
            </div>
          )}
        </div>
      </div>
      {second >= 4 && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-48 z-20">
            <div className="mt-auto text-center text-2xl flex flex-col items-center">
              <p className="text-xl">กดเพื่ออ่านข้อความ</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Scene3;
