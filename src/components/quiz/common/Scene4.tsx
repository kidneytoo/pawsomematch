import Image from 'next/image';
import { useSecond } from '@/hooks/useSecond';

type Scene4Props = {
  toNextScene: () => void;
};
const Scene4 = ({ toNextScene }: Scene4Props) => {
  const second = useSecond();

  return (
    <div
      className="mx-auto w-full max-w-lg min-h-screen relative bg-[#DBB4AE]"
    >
      <div className="bg-[#96184C] px-8 pb-6 pt-8 flex items-center">
        <Image
          src="/images/icons/chevron-left.svg"
          alt="Chevron Left"
          width={20}
          height={40}
        />
        <div className="mx-6 flex-grow flex items-center">
          <Image
            src="/images/icons/user-white.svg"
            alt="User"
            width={40}
            height={40}
          />
          <p className="ml-4 text-white font-bold text-2xl">mymint</p>
        </div>
        <Image
          src="/images/icons/phone.svg"
          alt="Phone"
          width={40}
          height={40}
        />
      </div>
      <div className="mt-8 mx-4">
        {second >= 1 && (
          <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
            <p className="whitespace-nowrap text-3xl">ตื่นยังอะ</p>
          </div>
        )}
        {second >= 2 && (
          <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
            <p className="whitespace-nowrap text-3xl">เราตื่นละ</p>
          </div>
        )}
        {second >= 3 && (
          <div className="my-4 w-min rounded-2xl px-4 py-2 bg-white">
            <p className="whitespace-nowrap text-3xl">
              สรุปจะไปคาเฟ่หมาหรือแมว
            </p>
          </div>
        )}
      </div>
      {second >= 4 && (
        <div className="mt-16 mx-8">
          <button className="my-2 w-full bg-brown-text rounded-3xl px-6 py-3 text-white text-3xl">
            คาเฟ่หมา
          </button>
          <button className="my-2 w-full bg-brown-text rounded-3xl px-6 py-3 text-white text-3xl">
            คาเฟ่แมว
          </button>
        </div>
      )}
    </div>
  );
};

export default Scene4;
