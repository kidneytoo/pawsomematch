import Image from 'next/image';
import NextButton from '@/components/common/NextButton/NextButton';
import { useSecond } from '@/hooks/useSecond';
import { redirect } from 'next/navigation';

type PreIntro3Props = {
  isShow: boolean;
  toNextScene: () => void;
};
const PreIntro3 = ({ isShow, toNextScene }: PreIntro3Props) => {
  const second = useSecond(isShow);
  return (
    <>
      <div className="absolute inset-x-0 top-24 z-20 animate-fade">
        <div className="mt-auto text-brown-text text-center text-2xl flex flex-col items-center">
          <p className="my-1">เพื่อที่จะดูว่าคุณน่าจะเหมาะ</p>
          <p className="my-1">กับน้องหมา น้องแมว</p>
          <p className="my-1">พันธุ์ไหนจากลักษณะนิสัย</p>
          <p className="my-1">สถานที่ และปัจจัยที่เกี่ยวข้อง</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-24 z-20 animate-fade">
        <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
          {second >= 2 && (
            <div className="mt-6 animate-fade">
              <NextButton type="link" href="/quiz" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PreIntro3;
