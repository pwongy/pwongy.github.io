import * as React from "react";

import { Fragment, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { X } from "phosphor-react";
import { PhotoData } from "../components/photosLayout/PhotoList";

type Props = {
  children: React.ReactElement | Array<React.ReactElement>;
  onClose?: () => void;
  width?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

export default function Modal({
  children,
  onClose,
  width,
}: Props): React.ReactElement {
  const [open, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    if (onClose != null) {
      onClose();
    }
    setOpen(false);
  }, [onClose]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`${
                width ? width : "w-full"
              } inline-block align-bottom bg-white rounded-lg text-left md:mx-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle`}
            >
              <button
                className="absolute top-3 right-3 flex-shrink-0 rounded-full hover:bg-gray-200 p-1"
                onClick={handleClose}
              >
                <X size={24} />
              </button>

              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
