import Image from 'next/image';
import FadeIn from '../../animation/FadeIn';

type Scene2Props = {
  toNextScene: () => void;
};
const Scene2 = ({ toNextScene }: Scene2Props) => {
  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <div className="absolute inset-0 bg-[#231F20] z-10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-24 z-20">
        <div className="flex flex-col items-center">
          <Image
            className="mb-8"
            src="/images/icons/lock.svg"
            alt="Lock"
            width={32}
            height={32}
          />
          <p className="text-white text-8xl font-bold">07:00</p>
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-24 z-20"
        onClick={() => toNextScene()}
      >
        <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
          <p className="mb-8 text-4xl font-bold">นาฬิกาปลุก</p>
          <div className="mx-4 mb-16 px-4 py-4 w-60 rounded-full bg-[#E9A343]">
            <p>หยุด</p>
          </div>
          <p className="text-white text-lg">กดหยุดนาฬิกาปลุกเพื่อไปต่อ</p>
        </div>
      </div>
    </div>
  );
};

export default Scene2;
