"use client";
import React, { useEffect, useState } from "react";
import { PiReadCvLogo } from "react-icons/pi";
import { PiFadersHorizontal } from "react-icons/pi";
import { BaseCard } from "./components/basecard";
import { cn } from "@/utils/style";
import { PiPlus } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi2";

import SideBar from "./components/SideBar";
import Modal from "@/app/components/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";
import { useGetResumesQuery } from "@/redux/resume/resumeApi";
import { Resumes } from "@/schema/resumes";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  console.log("hello");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOpen = async (name: string, mode: string) => {
    dispatch(openModal([name, mode]));
  };

  const getResumeData = (id: string) => {
    router.push(`/dashboard/resume/${id}`);
  };
  const {
    data,
    error: getResumesError,
    isLoading: getResumesIsLoading,
    refetch: refetchGetResumes,
  } = useGetResumesQuery({});

  return (
    <div className="flex flex-row justify-evenly h-screen">
      <SideBar />
      <div className="w-full lg:flex-1 h-full flex-row  pb-3 overflow-y-hidden">
        <div className="flex items-center mb-2 h-[70px] sticky">
          <h1 className="text-4xl font-bold tracking-tight">Resumes</h1>
        </div>
        <div className="h-[calc(100vh-95px)] overflow-y-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 h-full gap-4 ">
            <div className="" onClick={() => handleOpen("resume", "create")}>
              <div className="flex bg-gradient-to-b from-gray-100 to-gray-50 flex-col aspect-[1/1.4142] space-y-3 rounded border p-6 relative items-center justify-center">
                <HiOutlinePlus
                  size={60}
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="absolute bottom-1 left-6 z-10 flex flex-col justify-start ">
                  <p className="line-clamp-2 font-medium">
                    Create a new resume
                  </p>
                  <p className="line-clamp-1 text-xs opacity-75">
                    Start building from scratch
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex bg-gradient-to-b from-gray-100 to-gray-50 flex-col aspect-[1/1.4142] space-y-3 rounded border p-6 relative items-center justify-center">
                <HiOutlinePlus size={60} />
                <div className="absolute bottom-1 left-6 z-10 flex flex-col justify-start ">
                  <p className="line-clamp-2 font-medium">
                    Create a new resume
                  </p>
                  <p className="line-clamp-1 text-xs opacity-75">
                    Start building from scratch
                  </p>
                </div>
              </div>
            </div>
            {data &&
              data.map((d: Resumes, index: number) => (
                <Link href={`/dashboard/resume/${d.id}`} key={index}>
                  <div className="">
                    <div className="flex flex-col aspect-[1/1.4142] space-y-3 rounded border p-6 relative items-center justify-center">
                      <HiOutlinePlus size={60} />
                      <div className="absolute bottom-1 left-6 z-10 flex flex-col justify-start ">
                        <p className="line-clamp-2 font-medium">{d.title}</p>
                        <p className="line-clamp-1 text-xs opacity-75">
                          {d.updatedAt.toString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
