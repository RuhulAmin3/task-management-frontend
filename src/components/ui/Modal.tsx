"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type ModalType = {
  open: boolean;
  handleOpen: () => void;
  header: string;
  children: React.ReactNode | React.ReactElement;
};

const Modal = ({ open, handleOpen, header, children }: ModalType) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{header}</DialogHeader>
        {children}
      </Dialog>
    </>
  );
};
export default Modal;
