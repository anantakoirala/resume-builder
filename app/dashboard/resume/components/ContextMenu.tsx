"use client";
import { openModal } from "@/redux/modal/modalSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  x: number;
  y: number;
  itemId: string;
  name: string;
};

const ContextMenu = ({ x, y, itemId, name }: Props) => {
  const dispatch = useDispatch();

  const onUpdate = async (name: string, mode: string, id: string) => {
    dispatch(openModal([name, mode, id]));
  };
  const handleOpen = async (name: string, mode: string) => {
    dispatch(openModal([name, mode]));
  };
  return (
    // <div
    //   className="w-40 h-32 bg-green-300 absolute z-50 shadow-lg rounded-sm p-2 border-[4px]"

    // ></div>

    <ul
      className="menu menu-xs bg-base-200 w-56 border-2 border-red-500 shadow-md rounded-box absolute z-50"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <li onClick={() => onUpdate(name, "update", itemId)}>
        <a>Edit</a>
      </li>
      <li>
        <a>Remove</a>
      </li>
    </ul>
  );
};

export default ContextMenu;
