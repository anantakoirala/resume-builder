"use client";

import GetSectionIcon from "@/app/utils/getSectionIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TextInput from "@/app/components/TextInput";
import { setSummarySection } from "@/redux/resume/resumeSlice";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const CKEditor = dynamic(() => import("../../../../components/CKEditor"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const Summary = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const { resume } = useSelector((state: RootState) => state.resume);

  const getSummaryValue = (value: string) => {
    dispatch(setSummarySection({ path: "summary.content", value: value }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex flex-col " id="summary">
        <div className="w-full  flex flex-col justify-between gap-y-5">
          <div className="flex flex-row items-center gap-x-4 ">
            <GetSectionIcon id={"summary"} />
            <h2 className="line-clamp-1 text-3xl font-bold">Summary</h2>
          </div>
          <div className="mb-4">
            {/* <TextInput
              onChange={(value) => getSummaryValue(value)}
              contentValue={resume.data.summary.content}
            /> */}

            {isClient && (
              <CKEditor
                name="description"
                value={resume.data.summary.content}
                onChange={(data) => {
                  getSummaryValue(data);
                }}
                editorLoaded={true}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
