"use client";
import React, { useState } from "react";

type Props = {
  register: any;
  error?: string;
};

const Slider = ({ register, error }: Props) => {
  const [value, setValue] = useState<number>(1);
  return (
    <>
      <input
        type="range"
        min="0"
        max="5"
        id="myRange"
        value={value}
        step={1}
        className="range"
        {...register}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      {error}
    </>
  );
};

export default Slider;
