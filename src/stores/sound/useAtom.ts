import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { soundAtom } from './atom';
import { usePathname } from 'next/navigation';
import { set } from 'firebase/database';

export const useSoundAtom = () => {
  const pathname = usePathname();
  const [{ isOn, isClick, toResult }, setSound] = useAtom(soundAtom);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isOn && isClick) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isOn, isClick]);

  useEffect(() => {
    if (toResult) {
      audioRef.current?.pause();
    }
  }, [toResult])

  return { isOn, setSound, audioRef };
};
