import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

type Scene1Props = {
  toNextScene: () => void;
};
const Scene1 = ({ toNextScene }: Scene1Props) => {
  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/home/bg-home-01.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <FadeIn>
        <div
          className="absolute inset-x-0 bottom-24 z-20"
          onClick={() => toNextScene()}
        >
          <div className="mt-auto text-white text-center text-3xl flex flex-col items-center">
            <p className="my-1">คุณตื่นขึ้นมาพร้อม</p>
            <p>เสียงนาฬิกาปลุกที่ดังขึ้น</p>
            <Image
              className="mt-6"
              src="/images/icons/right-arrow.svg"
              alt="Right Arrow"
              width={30}
              height={15}
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Scene1;
