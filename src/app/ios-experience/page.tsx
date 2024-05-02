import Image from 'next/image';

import NextButton from '@/components/common/NextButton/NextButton';
import Header from '@/components/layout/Header/Header';
import FooterLogo from '@/components/home/FooterLogo/FooterLogo';
import { isIOS } from '@/utils/platform';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F2E5D1]">
      <Header />
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        <div className="mt-16 flex flex-col items-center">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Paw Logo"
              width={60}
              height={91}
            />
          </div>
          <div className="mt-6 text-center text-brown-text text-lg">
            <p className="font-bold my-1">เพื่อประสบการณ์ที่ดีในการเล่น</p>
            <p className="my-1">แนะนำให้กดซ่อนแทบเครื่องมือ</p>
            <p className="my-1">หากท่านใช้งานผ่าน Safari</p>
          </div>
          <Image className="mt-8 mb-4" src="/images/ios-experience/1.jpg" alt="iOS 1" width={300} height={54} />
          <Image className="mb-8" src="/images/ios-experience/2.jpg" alt="iOS 2" width={200} height={135} />
          <div className="my-4">
            <NextButton type="link" href={isIOS() ? "ios-experience" : "/pre-intro"} />
          </div>
        </div>
        <div className="mt-8 py-4 flex justify-center">
          <FooterLogo />
        </div>
      </div>
    </main>
  );
}
