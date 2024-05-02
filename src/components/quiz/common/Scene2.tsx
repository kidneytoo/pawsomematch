'use client';

import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import FadeInOut from '@/components/common/FadeInOut/FadeInOut';
import LockIcon from '@/components/icon/LockIcon';
import UserIcon from '@/components/icon/UserIcon';
import { useSecond } from '@/hooks/useSecond';

import LoopBG from '../LoopBG/LoopBG';
import { useSoundAtom } from '@/stores/sound/useAtom';

type Scene2Props = {
  scene: number;
  isShow: boolean;
  toNextScene: () => void;
};

const Scene3 = ({ toNextScene }: { toNextScene: () => void }) => {
  const second = useSecond();
  return (
    <div
      className={twMerge(
        'absolute inset-x-0 bottom-24 z-20 mx-4 transition-transform duration-500',
        second > 2 ? 'translate-y-0' : 'translate-y-[300%]'
      )}
    >
      <div
        className="mt-4 w-full relative rounded-3xl px-4 py-4 flex items-center bg-white"
        onClick={() => toNextScene()}
      >
        <div className="w-8 h-8">
          <UserIcon />
        </div>
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
  );
};

const Scene2 = ({ scene, isShow, toNextScene }: Scene2Props) => {
  const { isOn } = useSoundAtom();
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (isShow && isOn) {
      audioRef.current?.play();
    }
  }, [isShow]);


  return (
    <div
      className={twMerge(
        'absolute z-40 mx-auto w-full max-w-lg min-h-screen transition-transform duration-500',
        !isShow ? 'translate-y-full' : 'translate-y-0'
      )}
    >
      <audio ref={audioRef} src="/audio/alarm.mp3" />
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
            onClick={() => {
              audioRef.current?.pause();
              toNextScene()
            }}
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
        {scene === 3 && <Scene3 toNextScene={toNextScene} />}
      </div>
    </div>
  );
};

export default Scene2;
