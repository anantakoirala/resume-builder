import React from "react";

type Props = {
  setIsOpen: any;
};

const Header = ({ setIsOpen }: Props) => {
  return (
    <header className="flex justify-between p-4">
      <h1 className="font-medium">Example of a drawer</h1>
      <button
        className="bg-green-600 text-white rounded px-4 py-1"
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
    </header>
  );
};

export default Header;
