import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';
import { useSecond } from '@/hooks/useSecond';
import LoopBG from '../LoopBG/LoopBG';

type Scene2Props = {
  toNextScene: () => void;
};
const Scene3 = ({ toNextScene }: Scene2Props) => {
  const second = useSecond();

  // const delayToNextScene = () => {
  //   if (second >= 4) {
  //     toNextScene();
  //   }
  // }

  return (
    <div
      className="absolute z-50 mx-auto w-full max-w-lg min-h-screen animate-fade"
      onClick={() => toNextScene()}
    >
      <div className="min-h-screen relative">
        <LoopBG />
        <div className="absolute inset-x-0 top-24 z-20">
          <div className="px-8 w-full flex flex-col items-center">
            <Image
              className="mb-8"
              src="/images/icons/lock-brown.svg"
              alt="Lock"
              width={32}
              height={32}
            />
            <p className="text-brown-text-light text-8xl font-bold">07:00</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-24 z-20 mx-4">
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
          {second >= 4 ? (
            <div className="mt-8 text-center text-2xl flex flex-col items-center">
              <p className="text-xl">กดเพื่ออ่านข้อความ</p>
            </div>
          ) : (
            <div className="mt-8">
              <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scene3;
