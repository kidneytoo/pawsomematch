'use client';

import FileSaver from 'file-saver';
import Image from 'next/image';

type SaveButtonProps = {
  url: string;
  slug: string;
};
const SaveButton = ({ url, slug }: SaveButtonProps) => {
  const saveImage = () => {
    FileSaver.saveAs(url, `result-${slug}.jpg`);
  };
  return (
    <button
      onClick={() => saveImage()}
      className="flex items-center bg-brown-text rounded-full px-6 py-1.5 text-white text-sm"
    >
      <Image
        src="/images/icons/save.svg"
        width={12}
        height={12}
        alt="Save Icon"
      />
      <p className="ml-2">บันทึกรูป</p>
    </button>
  );
};

export default SaveButton;
