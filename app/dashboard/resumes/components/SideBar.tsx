import { useLogOutMutation } from "@/redux/auth/authApi";
import React from "react";
import { PiFadersHorizontal, PiReadCvLogo } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

type Props = {};

const SideBar = (props: Props) => {
  const [logout, { isLoading, isError, isSuccess, error }] =
    useLogOutMutation();

  const logoutUser = async () => {
    const result = logout({});
    console.log("result", result);
  };
  return (
    <div className="flex-col justify-center md:w-1/4 overflow-y-hidden">
      <div className="flex justify-center items-center mb-2 px-3 md:p-0">
        <img src="/logo.svg" alt="" className="pt-4" width={70} height={70} />
      </div>
      <hr className="mb-2 mt-2 items-center" />
      <div className="h-[calc(100vh-80px)] overflow-y-auto">
        <div className="flex flex-col justify-center  p-3 m-1 mx-2 rounded-md bg-gray-200 h-[50px]">
          <div className="flex flex-row justify-center md:justify-normal items-center gap-2">
            <PiReadCvLogo />
            <p className="hidden md:block text-sm">Resumes</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-3 m-1 mx-2 rounded-md bg-gray-200 h-[50px]">
          <div className="flex flex-row justify-center md:justify-normal items-center  md:gap-2">
            <PiFadersHorizontal />
            <p className="hidden md:block text-sm">Settings</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-3 m-1 mx-2 rounded-md bg-gray-200 h-[50px]">
          <div className="flex flex-row justify-center md:justify-normal items-center  md:gap-2">
            <PiSignOut />
            <p className="hidden md:block text-sm">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
