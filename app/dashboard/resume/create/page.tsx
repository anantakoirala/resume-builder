"use client";
import React from "react";
import Sidebar from "../components/sidebar";
import ContentFields from "../components/ContentFields";
import { useHideScrollbar } from "@/app/utils/hideScrollbar";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative menu w-80  lg:w-[75%] min-h-screen h-screen bg-slate-50 text-base-content flex flex-row overflow-y-hidden">
          <Sidebar />
          <ContentFields />
        </div>
      </div>
    </div>
  );
};

export default Page;
