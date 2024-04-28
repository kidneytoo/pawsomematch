import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';
import NextButton from '@/components/common/NextButton/NextButton';

type Scene1Props = {
  toNextScene: () => void;
};
const Scene1 = ({ toNextScene }: Scene1Props) => {
  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative"
    >
      <Image
        className="object-cover"
        src="/images/home/bg-home-01.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <div className="absolute inset-x-0 bottom-24 z-20 animate-fade">
        <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
          <p className="my-1">คุณตื่นขึ้นมาพร้อม</p>
          <p>เสียงนาฬิกาปลุกที่ดังขึ้น</p>
          <div className="mt-6">
            <NextButton onClick={toNextScene} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene1;
