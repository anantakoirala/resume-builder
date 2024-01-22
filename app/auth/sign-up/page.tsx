"use client";
import { useRegisterMutation } from "@/redux/auth/authApi";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();

  const submitForm = async (e: any) => {
    e.preventDefault();
    console.log("data");
    const data = {
      name,
      email,
      password,
      username,
    };
    const response = await register(data);
    console.log("response", response);
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
        </h2>
        <h6>
          <span className="opacity-75">Already have an account?</span>
          <Link href={"/auth/login"} className="text-black ml-1">
            Sign in now
          </Link>
        </h6>
        <div className="mt-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
            placeholder="john.doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="w-full rounded-md">
            <button
              className="bg-black text-white rounded-md w-full p-2"
              onClick={submitForm}
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
