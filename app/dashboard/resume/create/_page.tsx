"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import ContentFields from "../components/ContentFields";

type Props = {};

const Page = (props: Props) => {
  const [pages, setPages] = useState([{ id: 1 }]);
  const [activePage, setActivePage] = useState(1);

  const addPage = () => {
    const newPageId = pages.length + 1;
    setPages([...pages, { id: newPageId }]);
    setActivePage(newPageId);
  };
  return (
    <div className="flex flex-row h-screen ">
      <div className="w-[25%] bg-green-300 p-4">
        <button
          onClick={addPage}
          className="shadow-sm rounded-lg bg-gray-600 p-2 text-green-300"
        >
          Add Page
        </button>
      </div>
      <div className="w-full lg:flex-1 h-screen flex-row  pb-3 overflow-y-hidden">
        <div className="flex flex-col items-center justify-center bg-blue-400">
          {/* scrolling items */}
          <div className="flex items-center mb-2 h-[70px] sticky">
            <h1 className="text-4xl font-bold tracking-tight">Resumes</h1>
          </div>
          <div className="h-[calc(100vh-95px)] overflow-y-auto px-2">
            {pages.map((page, index) => (
              <div
                className="m-2 w-[200px] h-[200px] bg-purple-500 flex flex-row justify-center items-center"
                key={index}
              >
                <div className="w-[30%] bg-slate-500 h-full">
                  page sidebar of {page.id}
                </div>
                <div className="flex-1">page content</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Sidebar with a width of 45% and a red background */}
    </div>
  );
};

export default Page;
