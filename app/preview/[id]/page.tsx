"use client";
import Everest from "@/app/templates/Everest";
import { getTemplate } from "@/app/utils/getTemplate";
import { useGetResumeQuery } from "@/redux/resume/resumeApi";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

type Props = {};

const Page = (props: Props) => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetResumeQuery(id);
  console.log("data", data);
  const { resume } = useSelector((state: RootState) => state.resume);
  console.log("resume", resume);
  const Template = useMemo(
    () => getTemplate(resume.data.metadata.template),
    [resume.data.metadata.template]
  );
  console.log("resume", resume);
  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <Template />
        </>
      )}
    </>
  );
};

export default Page;
