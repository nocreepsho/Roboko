"use client";

import { RobotProps } from "@/types";
import Image from "next/image";

import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  robot: RobotProps;
}

const RobotDetails = ({ isOpen, closeModal, robot }: carDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-sm max-h-[90vh] transform rounded-2xl bg-white border-4 border-white justify-center items-center shadow-xl transition-all flex flex-wrap gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 opacity-80 bg-white rounded-full focus:outline-none"
                  >
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className="object-contain"
                      >

                    </Image>
                  </button>

                  <div className="flex flex-col gap-7 justify-center items-center">
                    <div className="relative w-300 h-full rounded-lg object-contain">
                      <Image
                        src={robot.image}
                        alt={robot.name}
                        width={300}
                        height={300}
                        priority
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col text-left gap-2 pb-5 bg-black text-white p-6 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-extrabold text-primary-green-100">{robot.name}</h2>
                        <div>
                        <p className='flex text-[32px] leading-[38px] font-extrabold text-primary-green-100'>
                          <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                          {robot.price}
                          <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                        </p>
                        </div>
                      </div>
                      <p className="text-lg">{robot.desc}</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default RobotDetails