"use client";

import {
  Editor,
  EditorContent,
  EditorContentProps,
  useEditor,
} from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import {
  PiArticle,
  PiListBullets,
  PiListBulletsThin,
  PiListNumbers,
  PiTextB,
  PiTextHOne,
  PiTextHThree,
  PiTextHTwo,
  PiTextItalic,
} from "react-icons/pi";
import GetSectionIcon from "@/app/utils/getSectionIcon";
import Input from "@/app/components/Input";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Summary = () => {
  const { resume } = useSelector((state: RootState) => state.resume);
  console.log("resume", resume.data.summary);
  const getSummaryValue = (value: string) => {
    console.log("summart", value);
  };
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-zinc max-h-[200px] max-w-none list-disc overflow-y-scroll dark:prose-invert focus:outline-none [&_*]:my-2",
      },
    },
    content: "",
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col " id="summary">
        <div className="w-full  flex flex-col justify-between gap-y-5">
          <div className="flex flex-row items-center gap-x-4 ">
            <GetSectionIcon id={"summary"} />
            <h2 className="line-clamp-1 text-3xl font-bold">Summary</h2>
          </div>
          <div className="mb-4">
            <Input onChange={(value) => getSummaryValue(value)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
