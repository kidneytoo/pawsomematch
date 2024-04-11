import { Dialog } from '@headlessui/react';
import React from 'react';

type Props = {
  open: boolean;
  children: JSX.Element;
  onClose?: () => void;
};

export default function Modal({ open, children, onClose }: Props): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose?.();
      }}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-75"
        aria-hidden="true"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="absolute top-4 right-4">
            <button onClick={() => onClose?.()} className="text-white text-4xl">✕</button>
          </div>
          <Dialog.Panel className="relative p-4 rounded-md w-full max-w-2xl">
            <div className="">{children}</div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
