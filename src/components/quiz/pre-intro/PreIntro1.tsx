import Image from 'next/image';
import NextButton from '@/components/common/NextButton/NextButton';
import { useSecond } from '@/hooks/useSecond';

type PreIntro1Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const PreIntro1 = ({ isShow, toNextScene }: PreIntro1Props) => {
  const second = useSecond(isShow);
  return (
    <>
      <div className="absolute inset-x-0 top-24 z-20 animate-fade">
        <div className="mt-auto text-brown-text text-center text-2xl flex flex-col items-center">
          <p className="my-1">เมื่อคุณอยากเลี้ยงสัตว์ตัวแรก</p>
          <p className="my-1">แต่ลังเลว่าจะเลี้ยงพันธุ์ไหน</p>
          <p className="my-1">ที่เข้ากับคุณ</p>
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

export default PreIntro1;
