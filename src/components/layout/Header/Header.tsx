'use client';

import Credit from '@/components/home/Credit/Credit';
import FooterLogo from '@/components/home/FooterLogo/FooterLogo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const isHideHeader = false;

  if (isHideHeader) {
    return null;
  }

  return (
    <>
      <header
        className={twMerge(
          'h-12 z-40 py-2 px-4 w-full fixed inset-x-0 transition-all duration-300 bg-gradient-to-b from-[#DBD0BE] to-[#F2E5D1]'
        )}
      >
        <div className="mx-auto max-w-lg flex items-center justify-between">
          <div />
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className="text-white"
            onClick={() => setIsShow(!isShow)}
          >
            <span className="sr-only">Open main menu</span>
            {!isShow ? (
              <Bars3Icon className="h-8" />
            ) : (
              <XMarkIcon className="h-8" />
            )}
          </button>
        </div>
      </header>
      <div
        className={twMerge(
          'absolute inset-0 transition-all duration-300 z-20 min-h-screen bg-[#F2E5D1] overflow-y-hidden',
          !isShow && 'hidden'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="flex-grow overflow-y-scroll"><Credit /></div>
          <div className="py-4 flex justify-center">
            <FooterLogo />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
