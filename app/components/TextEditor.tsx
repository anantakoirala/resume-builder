import React from "react";

type Props = {};

function TextEditor({}: Props) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-40 bg-red-300">Heading</div>
      <div>content</div>
    </div>
  );
}

export default TextEditor;
