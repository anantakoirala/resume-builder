"use client";
import React from "react";
import First from "./first";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Props = {};

const Page = (props: Props) => {
  const aspectRatioWidth = 800; // Set the desired width
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth; // Calculate the corresponding height

  return (
    <>
      <TransformWrapper maxScale={2} minScale={0.4} initialScale={0.8}>
        <TransformComponent
          wrapperClass="!w-screen !h-screen"
          contentClass="grid items-start justify-center space-x-12 pointer-events-none border border-4"
        >
          <First />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
};

export default Page;
