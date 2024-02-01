"use client";
import React, { useState } from "react";
import First from "./first";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TextInput from "../components/TextInput";

type Props = {};

const Page = (props: Props) => {
  const [content, setContent] = useState("");
  const aspectRatioWidth = 800; // Set the desired width
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth; // Calculate the corresponding height

  return (
    <>
      <TextInput
        onChange={(value: string) => setContent(value)}
        contentValue={content}
      />
    </>
  );
};

export default Page;
