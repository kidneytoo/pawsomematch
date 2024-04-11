import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto w-full max-w-lg min-h-screen relative">
        <Image
          className="object-cover"
          src="/images/home/bg-home-01.webp"
          alt="Home BG"
          fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="my-4 flex items-center">
              <div className="mr-8">
                <Image
                  src="/images/home/paw.svg"
                  alt="Paw Logo"
                  width={72}
                  height={72}
                />
              </div>
              <div className="text-center font-bold text-white text-3xl">
                <p>คุณเหมาะกับ</p>
                <p>น้องหมา น้องแมว</p>
                <p>พันธุ์ไหนกันนะ</p>
              </div>
            </div>
            <div className="my-8">
              <Link
                href="/quiz"
                className="bg-white rounded-2xl px-6 py-2 text-brown-text text-2xl"
              >
                <>เริ่มทำแบบทดสอบ</>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
