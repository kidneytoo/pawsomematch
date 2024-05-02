'use client';

import NextButton from '@/components/common/NextButton/NextButton';
import { useMobileDetect } from '@/hooks/useMobileDetect';
import { useSoundAtom } from '@/stores/sound/useAtom';
import { useRouter } from 'next/navigation';

const IosButton = () => {
  const router = useRouter();
  const { isIos } = useMobileDetect();
  const { setSound } = useSoundAtom();

  const onClick = () => {
    setSound((prev) => ({...prev, isClick: true}))
    router.push(isIos() ? '/ios-experience' : '/pre-intro');
  }
  return (
      <NextButton
        type="button"
        onClick={onClick}
      />
  );
};

export default IosButton;
