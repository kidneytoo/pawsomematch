'use client';
import { useSoundAtom } from "@/stores/sound/useAtom";


export const Sound = () => {
  const { audioRef } = useSoundAtom();

  return (
    <>
      <audio ref={audioRef} src="/audio/bg.mp3" loop />
    </>
  )
}