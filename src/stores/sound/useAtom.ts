import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { soundAtom } from './atom';

export const useSoundAtom = () => {
  const [isOn, setIsOn] = useAtom(soundAtom);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isOn) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isOn]);

  return { isOn, setIsOn, audioRef };
};
