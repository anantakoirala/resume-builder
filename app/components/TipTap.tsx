import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const content = ``;

type Props = {};

const TipTap = (props: Props) => {
  const editor = useEditor({
    extensions,
    content,
  });
  if (!editor) return null;
  return (
    <div>
      <div>
        <div className="ananta">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "is-active bg-red-50 border p-2"
                : "border p-2"
            }
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic") ? " bg-red-50 border p-2" : "p-2"
            }
          >
            italic
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 })
                ? "bg-red-50 border p-2"
                : "p-2"
            }
          >
            h6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList") ? "bg-red-50 border p-2" : "p-2"
            }
          >
            bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList") ? "bg-red-50 border p-2" : "p-2"
            }
          >
            ordered list
          </button>
        </div>
        <div>
          <EditorContent editor={editor} className="h-52 border" />
        </div>
      </div>
    </div>
  );
};

export default TipTap;
