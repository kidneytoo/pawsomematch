'use client';

import Modal from '@/components/common/Modal';
import Image from 'next/image';
import { useState } from 'react';

type ResultImageProps = {
  image: {
    sketch: string;
    real: string;
  };
  name: string;
};
const ResultImage = ({ image, name }: ResultImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden w-full pb-4/3 bg-gray-100 rounded-2xl border-4 border-brown-bg"
      >
        <Image className="object-cover" src={image.sketch} fill alt={name} />
        <div className="absolute bottom-1 inset-x-0 mx-0.5 flex justify-center">
          <button className="bg-brown-bg text-white text-[10px] px-4 py-1 rounded-full">
            กดเพื่อดูรูปน้องตัวจริง
          </button>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Image
          className="object-cover w-full"
          src={image.real}
          width={600}
          height={400}
          alt={name}
        />
      </Modal>
    </>
  );
};

export default ResultImage;
