'use client';

import NextButton from '@/components/common/NextButton/NextButton';
import { useSecond } from '@/hooks/useSecond';

type Scene1Props = {
  toNextScene: () => void;
};
const Scene1 = ({ toNextScene }: Scene1Props) => {
  const second = useSecond();

  return (
    <>
      <div className="absolute inset-x-0 bottom-24 z-20">
        <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
          {second >= 1 && <div className="mb-6 animate-fade">
          <p className="my-1">คุณตื่นขึ้นมาพร้อม</p>
          <p>เสียงนาฬิกาปลุกที่ดังขึ้น</p>
          </div>}
          {second >= 2 ?<div className="mt-6 animate-fade">
            <NextButton onClick={toNextScene} />
          </div> : <div className="mt-6 invisible">
            <NextButton onClick={toNextScene} />
          </div> }
        </div>
      </div>
    </>
  );
};

export default Scene1;
