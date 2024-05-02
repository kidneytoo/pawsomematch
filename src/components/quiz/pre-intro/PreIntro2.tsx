import Image from 'next/image';
import NextButton from '@/components/common/NextButton/NextButton';
import { useSecond } from '@/hooks/useSecond';
import { redirect } from 'next/navigation';

type PreIntro2Props = {
  toNextScene: () => void;
};
const PreIntro2 = ({ toNextScene }: PreIntro2Props) => {
  const second = useSecond();
  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/home/bg-home-01.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-x-0 top-24 z-20 animate-fade">
        <div className="mt-auto text-brown-text text-center text-2xl flex flex-col items-center">
          <p className="my-1">คุณจะได้รับบทบาทสมมติ</p>
          <p className="my-1">เสมือนได้ไปสัมผัสน้องหมา</p>
          <p className="my-1">น้องแมวตัวจริงที่คาเฟ่</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-24 z-20 animate-fade">
        <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
          {second >= 2 && (
            <div className="mt-6 animate-fade">
              <NextButton onClick={toNextScene} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreIntro2;
