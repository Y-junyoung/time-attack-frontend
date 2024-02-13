"use client";

import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <div
      className="fixed top-0 left-0 bg-black/50 z-20 flex items-center justify-center right-0 bottom-0"
      onClick={handleClickBackdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-[400px] rounded-md px-5 py-8"
      >
        <h2 className="text-3xl font-bold  text-center my-12">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
