import React from "react";
import TemplateSections from "./sections/TemplateSections";

type Props = {};

const RightContentField = (props: Props) => {
  return (
    <div className="flex flex-col flex-1 py-6 px-2 h-screen  no-scrollbar overflow-y-auto">
      <TemplateSections />
    </div>
  );
};

export default RightContentField;
