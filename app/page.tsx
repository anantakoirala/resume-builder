// Drawer.js

"use client";
import React, { useState } from "react";
import Sidebar from "./dashboard/resume/components/sidebar";
import ContentFields from "./dashboard/resume/components/ContentFields";
import LeftDrawer from "./dashboard/resume/components/Drawer/LeftDrawer";
import SideBar from "./dashboard/resumes/components/SideBar";
import Drawer from "./dashboard/resume/components/Drawer/Drawer";

const Page = () => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerOpen(!leftDrawerOpen);
  };

  const toggleRightDrawer = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const [isOpenRight, setIsOpenRight] = React.useState(false);
  const [isOpenLeft, setIsOpenLeft] = React.useState(false);

  return (
    <div className="flex relative overflow-hidden">
      <LeftDrawer isOpen={isOpenLeft} setIsOpen={setIsOpenLeft}>
        a
      </LeftDrawer>
      <Drawer isOpen={isOpenRight} setIsOpen={setIsOpenRight}>
        b
      </Drawer>
      {/* left sidebar desktop */}
      <div className="hidden lg:block w-96 h-screen bg-slate-600">
        <div className="relative menu w-full min-h-screen h-screen bg-slate-50 text-base-content flex flex-row overflow-y-hidden">
          <Sidebar />
          <ContentFields />
        </div>
      </div>
      {/* left sidebar ends desktop */}
      {/* right sidebar desktop */}
      <div
        className={`w-full lg:flex-1
          duration-200  h-screen`}
      >
        <div className="flex flex-col mx-3 h-screen">
          <div className="flex flex-row justify-center">
            <button
              className="h-6 border  bg-black text-white"
              onClick={() => setIsOpenLeft(true)}
            >
              left
            </button>
            <button
              className="h-6 border  bg-black text-white"
              onClick={() => setIsOpenRight(true)}
            >
              right{" "}
            </button>
          </div>
          <div className="flex items-center justify-center bg-red-200  w-full h-full">
            main content
          </div>
        </div>
      </div>
      {/* righ sidebar desktop ends */}
      <div className="hidden lg:block w-96 h-screen bg-slate-600">
        right sidebat
      </div>
      {/* <div
        className={
          " w-screen max-w-lg lg:w-96 right-0 top-10 absolute bg-green-300 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (rightDrawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        right
      </div> */}
    </div>
  );
};

export default Page;
