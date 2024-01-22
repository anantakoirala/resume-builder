import React from "react";

type Props = {
  title: string;
  itemId: number;
};

const Menu = ({ title, itemId }: Props) => {
  return (
    <div className="border-[1px] border-r-4 p-[18px] mx-5 box-border">
      {title}
    </div>
  );
};

export default Menu;
