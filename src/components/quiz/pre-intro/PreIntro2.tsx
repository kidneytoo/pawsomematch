import Image from 'next/image';
import NextButton from '@/components/common/NextButton/NextButton';
import { useSecond } from '@/hooks/useSecond';
import { redirect } from 'next/navigation';

type PreIntro2Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const PreIntro2 = ({ isShow, toNextScene }: PreIntro2Props) => {
  const second = useSecond(isShow);
  return (
    <>
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
    </>
  );
};

export default PreIntro2;
