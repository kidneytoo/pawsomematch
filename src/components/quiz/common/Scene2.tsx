'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import FadeInOut from '@/components/common/FadeInOut/FadeInOut';
import LoopBG from '../LoopBG/LoopBG';
import LockIcon from '@/components/icon/LockIcon';
import { useSecond } from '@/hooks/useSecond';

type Scene2Props = {
  scene: number;
  isShow: boolean;
  toNextScene: () => void;
};
const Scene2 = ({ scene, isShow, toNextScene }: Scene2Props) => {
  const second = useSecond(scene === 2);
  return (
    <div
      className={twMerge(
        'absolute z-40 mx-auto w-full max-w-lg min-h-screen transition-transform duration-500',
        !isShow ? 'translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="min-h-screen relative">
        <FadeInOut isShow={scene <= 2}>
          <div className="absolute inset-0 bg-[#231F20] z-10" />
        </FadeInOut>
        <FadeInOut isShow={scene === 3}>
          <LoopBG />
        </FadeInOut>
        <div className="absolute left-1/2 -translate-x-1/2 top-12 z-20">
          <div className="flex flex-col items-center">
            <div className="mb-4 w-8">
              <LockIcon isOn={scene === 3} />
            </div>
            <p
              className={twMerge(
                'text-8xl font-bold transition-colors duration-300',
                scene === 2 ? 'text-white' : 'text-brown-text'
              )}
            >
              07:00
            </p>
          </div>
        </div>
        <FadeInOut isShow={scene <= 2}>
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-24 z-20"
            onClick={() => toNextScene()}
          >
            <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
              <p className="mb-8 text-4xl font-bold">นาฬิกาปลุก</p>
              <div className="mx-4 mb-16 px-4 py-4 w-60 rounded-full bg-[#E9A343]">
                <p>หยุด</p>
              </div>
              <p className="text-white text-lg">กดหยุดนาฬิกาปลุกเพื่อไปต่อ</p>
            </div>
          </div>
        </FadeInOut>
        {scene === 3 && (
          <div
            className={twMerge(
              'absolute inset-x-0 bottom-24 z-20 mx-4 transition-transform duration-500',
              second > 2 ? 'translate-y-0' : 'translate-y-full'
            )}
          >
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

            <div
              className={twMerge(
                'mt-8 text-center text-2xl flex flex-col items-center',
                second <= 4 && 'invisible'
              )}
            >
              <p className="text-xl">กดเพื่ออ่านข้อความ</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scene2;
