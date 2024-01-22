import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
};

const RightDrawer = ({ children, isOpen, setIsOpen }: Props) => {
  return <div>RightDrawer</div>;
};

export default RightDrawer;
