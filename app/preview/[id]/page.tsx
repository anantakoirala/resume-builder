"use client";
import { useGetResumeQuery } from "@/redux/resume/resumeApi";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Page = (props: Props) => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetResumeQuery(id);
  const { resume } = useSelector((state: RootState) => state.resume);
  console.log("resume", resume);
  return <div>Preview</div>;
};

export default Page;
