"use client";
import { useLoginMutation } from "@/redux/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();

  const submitLogin = async (e: any) => {
    console.log("data");
    const data = {
      identifier,
      password,
    };
    const response = await login(data);

    if ("error" in response) {
      if ("status" in response?.error) {
        console.log("responseerrorstatus", response?.error?.status);
      }
      console.log("responseerror", response?.error);
    }
    console.log("response", response);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/resumes");
    }
  }, [isSuccess, router]);

  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
        </h2>
        <h6>
          <span className="opacity-75">Don t have an account?</span>
          <Link href={"/auth/sign-up"} className="text-black ml-1">
            Create one now
          </Link>
        </h6>
        <div className="mt-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
            placeholder="Email or Username"
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <p className="text-xs text-gray-500 mb-1">
            You can also enter your username
          </p>
        </div>

        <div className="mt-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="rounded w-full p-2 placeholder-slate-600 border border-gray-400"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs text-gray-500 mb-1">Password</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="w-full rounded-md">
            <button
              className="bg-black text-white rounded-md w-full p-2"
              onClick={submitLogin}
            >
              Sign in{" "}
            </button>
          </div>
          {/* <div className="w-full rounded-md">
            <button className="bg-black text-white rounded-md w-full p-4">
              Sign up{" "}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
