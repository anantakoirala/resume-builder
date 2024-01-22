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

const Summary = () => {
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
      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive("bulletList") ? "" : ""}
      >
        <p className="border">bullet list</p>
      </button>

      <EditorContent editor={editor} className="bg-green-800 w-full " />
    </>
  );
};

export default Summary;
