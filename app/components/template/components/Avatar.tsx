"use client";
import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

function Avatar({ src }: Props) {
  return (
    <div className="avatar">
      <div className="w-8 rounded">
        <img
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="Tailwind-CSS-Avatar-component"
        />
      </div>
    </div>
  );
}

export default Avatar;
