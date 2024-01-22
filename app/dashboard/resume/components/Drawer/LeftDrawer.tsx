import React from "react";
import Sidebar from "../sidebar";
import ContentFields from "../ContentFields";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
};

const LeftDrawer = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <main
      className={
        "lg:hidden fixed overflow-hidden  bg-gray-900 bg-opacity-25 inset-0 right-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all duration-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen right-0 absolute bg-white h-full  delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="relative menu w-full min-h-screen h-screen bg-slate-50 text-base-content flex flex-row overflow-y-hidden">
          <button
            className="absolute top-2 right-10 w-4 h-4 rounded-full border flex flex-row items-center justify-center bg-red-700 text-white"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div>x</div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default LeftDrawer;
