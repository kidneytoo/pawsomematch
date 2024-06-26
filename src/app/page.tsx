import Image from 'next/image';

import FooterLogo from '@/components/home/FooterLogo/FooterLogo';
import IosButton from '@/components/home/IosButton/IosButton';
import Header from '@/components/layout/Header/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F2E5D1]">
      <Header />
      <div className="mx-auto w-full max-w-lg min-h-screen relative flex flex-col">
        <div className="mt-16 flex flex-col items-center">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Paw Logo"
              width={60}
              height={91}
            />
          </div>
          <div className="mt-6 rounded-2xl shadow-md w-[250px] h-[200px] overflow-hidden relative">
            <Image
              className="object-cover object-home"
              src="/images/home/bg-home-01.webp"
              alt="Home BG"
              fill
            />
          </div>
          <div className="my-6">
            <div className="text-center font-bold text-brown-text text-2xl">
              <p className="my-2">คุณเหมาะกับน้องหมา</p>
              <p>น้องแมว พันธุ์ไหนกันนะ</p>
            </div>
          </div>
          <div className="my-4">
            <IosButton />
          </div>
        </div>
        <div className="mt-auto py-6 flex justify-center">
          <FooterLogo />
        </div>
      </div>
    </main>
  );
}
