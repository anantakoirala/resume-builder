"use client";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
const MenuContext = () => {
  const data = [
    {
      id: 1,
      title: "Message 1",
    },
    {
      id: 2,
      title: "Message 2",
    },
    {
      id: 3,
      title: "Message 3",
    },
    {
      id: 4,
      title: "Message 4",
    },
  ];
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          onContextMenu={(e) => {
            e.preventDefault();
            setClicked(true);
            setPoints({
              x: e.pageX,
              y: e.pageY,
            });
          }}
        >
          {/* Render your menu content here */}
          <Menu itemId={item.id} title={item.title} />
        </div>
      ))}

      {clicked && (
        <div
          className="absolute bg-gray-200 p-2 rounded shadow"
          style={{ top: `${points.y}px`, left: `${points.x}px` }}
        >
          {/* Your menu content goes here */}
          ananta
        </div>
      )}
    </div>
  );
};
export default MenuContext;
