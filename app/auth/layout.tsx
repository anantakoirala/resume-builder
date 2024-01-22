"use client";
import { cn } from "@/utils/style";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="flex justify-center items-center  h-screen w-screen">
            {/* 30% width div */}
            <div className="flex justify-center items-center xl:justify-normal xl:items-start xl:w-1/3 h-screen">
              <div className="flex w-full flex-col justify-center gap-y-8 px-12 py-12">
                <img
                  src="/logo.svg"
                  alt=""
                  className="pt-4"
                  width={100}
                  height={100}
                />
                {children}
              </div>
            </div>

            {/* Remaining width div */}
            <div className="relative hidden xl:block xl:flex-1">
              <img
                alt="Open books on a table"
                className="h-screen w-full object-cover object-center"
                src="/backgrounds/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
              />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
