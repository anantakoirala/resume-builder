"use client";
import React, { useEffect } from "react";
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

type Props = {
  onChange: (value: string) => void;
  contentValue?: string;
  register?: any;
};

const TextInput = ({ onChange, contentValue }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-zinc max-h-[200px] max-w-none list-disc overflow-y-scroll dark:prose-invert focus:outline-none [&_*]:my-2",
      },
    },
    content: contentValue,
    parseOptions: {
      preserveWhitespace: true,
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    onBlur: ({ editor }) => onChange?.(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && contentValue !== undefined) {
      editor.commands.setContent(contentValue);
    }
  }, [editor, contentValue]);

  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="flex flex-row flex-wrap  border p-1">
        <div className="tooltip hover:bg-gray-300 rounded " data-tip="Bold">
          <div
            className="w-4 h-4 m-2"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <PiTextB />
          </div>
        </div>

        <div className="tooltip hover:bg-gray-300 rounded " data-tip="Italic">
          <div
            className="w-4 h-4 m-2"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <PiTextItalic />
          </div>
        </div>

        <div
          className="tooltip hover:bg-gray-300 rounded "
          data-tip="Bullet List"
        >
          <div
            className="w-4 h-4 m-2 "
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
          >
            <PiListBullets />
          </div>
        </div>
        <div
          className="tooltip hover:bg-gray-300 rounded"
          data-tip="Numbered List"
        >
          <div
            className="w-4 h-4 m-2"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <PiListNumbers />
          </div>
        </div>
        <div className="tooltip hover:bg-gray-300 rounded" data-tip="H1">
          <div
            className="w-4 h-4 m-2"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <PiTextHOne />
          </div>
        </div>
        <div className="tooltip hover:bg-gray-300 rounded" data-tip="H2">
          <div
            className="w-4 h-4 m-2"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <PiTextHTwo />
          </div>
        </div>
        <div className="tooltip hover:bg-gray-300 rounded" data-tip="H3">
          <div
            className="w-4 h-4 m-2"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <PiTextHThree />
          </div>
        </div>
      </div>

      <EditorContent
        editor={editor}
        className="grid min-h-[160px] w-full rounded-sm border bg-transparent px-3 py-2 text-sm placeholder:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 "
      />
    </>
  );
};

export default TextInput;
