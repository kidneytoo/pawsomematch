import Image from 'next/image';

import { useSecond } from '@/hooks/useSecond';

const LoopBG = () => {
  const second = useSecond();
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
    <Image className="object-cover" src={getBGLoop()} alt="Loop BG" fill />
  );
};

export default LoopBG;
