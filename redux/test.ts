import { useSelector } from "react-redux";
import { useLoginMutation } from "./auth/authApi";
import { useUpdateResumeMutation } from "./resume/resumeApi";
import { RootState } from "@/redux/store";
import { Resume } from "@/schema/resume";
import axiosClient from "@/app/utils/axios";

export const TestFunction = async (resume: any) => {
  try {
    const response = await axiosClient.patch(`/resume/${resume.id}`, resume);
  } catch (error: any) {
    console.log("client error", error.response.data);
  }

  // const [updateResume, { isLoading, isError, isSuccess }] =
  //   useUpdateResumeMutation();
  // console.log("hello ananta ");
  // const result = await updateResume({ id: 1, title: "ananta titler" });
  // console.log("result", result);
};
