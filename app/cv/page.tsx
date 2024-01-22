"use client";
import React, { useEffect } from "react";

type Props = {};

const Page = (props: Props) => {
  useEffect(() => {});
  return (
    <div
      className="mx-auto p-8 bg-orange-300 shadow-md h-screen"
      style={{ width: "21cm" }}
    >
      {/* <!-- Your A4-sized content goes here --> */}
      <h1 className="text-4xl font-bold mb-4">Your A4 Design</h1>

      {/* <!-- Add your other content --> */}
    </div>
  );
};

export default Page;
