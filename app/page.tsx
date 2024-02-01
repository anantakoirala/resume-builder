"use client";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TextInput from "./components/TextInput";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const CKEditor = dynamic(() => import("../app/components/CKEditor"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

type Props = {};

const Page = (props: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [content, setContent] = useState("");
  const aspectRatioWidth = 800; // Set the desired width
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth; // Calculate the corresponding height
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="p-2">
        {isClient && (
          <CKEditor
            name="description"
            value={content}
            onChange={(data) => {
              setContent(data);
            }}
            editorLoaded={true}
          />
        )}
      </div>
    </>
  );
};

export default Page;
