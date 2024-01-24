"use client";
import React, { useEffect, useMemo, useRef } from "react";
import Sidebar from "../components/sidebar";
import ContentFields from "../components/ContentFields";
import { useHideScrollbar } from "@/app/utils/hideScrollbar";
import { useGetResumeQuery } from "@/redux/resume/resumeApi";
import { useParams } from "next/navigation";
import LeftDrawer from "../components/Drawer/LeftDrawer";
import Drawer from "../components/Drawer/Drawer";
import { getTemplate } from "@/app/utils/getTemplate";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import First from "@/app/templates/first";
import Yeti from "@/app/templates/Yeti";
import Second from "@/app/templates/Second";
import Everest from "@/app/templates/Everest";

type Props = {};

const Page = (props: Props) => {
  const containterRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useParams();
  const Template = useMemo(() => getTemplate("first"), []);

  const { id } = useParams();

  const { data, isLoading, error } = useGetResumeQuery(id);
  const [isOpenRight, setIsOpenRight] = React.useState(false);
  const [isOpenLeft, setIsOpenLeft] = React.useState(false);

  return (
    <div className="flex relative overflow-hidden">
      <LeftDrawer isOpen={isOpenLeft} setIsOpen={setIsOpenLeft}>
        bbbbb
      </LeftDrawer>
      <Drawer isOpen={isOpenRight} setIsOpen={setIsOpenRight}>
        b
      </Drawer>
      {/* left sidebar desktop */}
      <div className="hidden lg:block w-96 h-screen">
        <div className="-z-10 w-full min-h-screen h-screen  bg-slate-50 text-base-content flex flex-row overflow-y-hidden">
          <Sidebar containerRef={containterRef} />
          <ContentFields containerRef={containterRef} />
        </div>
      </div>
      {/* left sidebar ends desktop */}
      {/* right sidebar desktop */}
      <div
        className={`w-full lg:flex-1
          duration-200  h-screen `}
      >
        <div className="flex flex-col mx-3 min-h-screen h-screen">
          <div className="flex flex-row justify-center">
            <button
              className="h-6 border  bg-black text-white "
              onClick={() => {
                setIsOpenLeft(true);
              }}
            >
              left
            </button>
            <button
              className="h-6 border  bg-black text-white "
              onClick={() => setIsOpenRight(true)}
            >
              right{" "}
            </button>
          </div>
          <div className="flex border shadow-lg   w-full h-full ">
            <div className="flex flex-col items-center w-full ">
              <TransformWrapper
                maxScale={1.5}
                minScale={0.4}
                initialPositionX={80}
                initialPositionY={-180}
                initialScale={0.8}
                limitToBounds={false}
              >
                <TransformComponent
                  wrapperClass="w-full h-full"
                  contentClass="relative grid items-start justify-center space-x-12 pointer-events-none scale-75"
                  contentStyle={{
                    width: "18cm",
                    gridTemplateColumns: `repeat(1, 1fr)`,
                  }}
                >
                  <div
                    className="relative bg-white shadow-2xl scale-75"
                    style={{ width: "21cm", minHeight: "1120px" }}
                  >
                    <Everest />
                    {/* <div
                      className=" p-8 bg-orange-300 shadow-md "
                      style={{ width: "21cm", minHeight: "1120px" }}
                    >
                      <h1 className="text-4xl font-bold mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores, adipisci facere nemo maxime sunt tempora totam
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores, adipisci facere nemo maxime sunt tempora totam
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                    </div> */}
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </div>
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
