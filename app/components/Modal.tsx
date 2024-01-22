"use client";
import { cn } from "@/utils/style";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closeModal } from "@/redux/modal/modalSlice";
import CreateResumeModal from "../dashboard/resume/components/CreateResumeModal";
type Props = {
  children?: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { isOpen, name, mode } = useSelector((state: RootState) => state.modal);
  const handleClose = () => {
    dispatch(closeModal());
  };

  const modalClass = cn({
    "modal modal-middle": true,
    "modal-open": isOpen,
  });
  return (
    <div className={modalClass}>
      <div className="modal-box">
        {children}

        {/* <div className="modal-action">
          <button className="btn btn-primary" onClick={handleClose}>
            Yay!
          </button>
        </div> */}
      </div>
      <div className="modal-backdrop " onClick={handleClose}></div>
    </div>
  );
};

export default Modal;
