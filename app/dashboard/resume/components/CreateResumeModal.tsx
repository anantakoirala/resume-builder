"use client";
import Modal from "@/app/components/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createResume, createResumeSchema } from "@/schema/createResumeSchema";
import { PiPlus } from "react-icons/pi";
import { kebabCase } from "@/utils/string";
import {
  useCreateResumeMutation,
  useGetResumesQuery,
} from "@/redux/resume/resumeApi";
import { closeModal } from "@/redux/modal/modalSlice";

function CreateResumeModal() {
  const dispatch = useDispatch();
  const { name, mode } = useSelector((state: RootState) => state.modal);
  const [createResume, { isError, isLoading, isSuccess, error }] =
    useCreateResumeMutation();
  const {
    data,
    error: getResumesError,
    isLoading: getResumesIsLoading,
    refetch: refetchGetResumes,
  } = useGetResumesQuery({ skip: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<createResume>({
    resolver: zodResolver(createResumeSchema),
    defaultValues: { title: "", slug: "" },
  });

  const submitForm = async (data: createResume) => {
    console.log(data);
    const response = await createResume(data);
    console.log("response", response);
  };

  useEffect(() => {
    const slug = kebabCase(watch("title"));

    setValue("slug", slug);
  }, [watch("title"), setValue]);

  useEffect(() => {
    if (isSuccess) {
      console.log("ananta");
      refetchGetResumes();
      dispatch(closeModal());
    }
  }, [isSuccess, dispatch, refetchGetResumes]);

  if (name != "resume") return null;
  return (
    <Modal>
      <div className="flex flex-col space-y-3 text-left">
        <div className="flex flex-row items-center">
          <PiPlus />
          <p className="text-sm font-bold ml-2">Create a new resume</p>
        </div>
        <p className="text-sm leading-relaxed text-primary-accent">
          Start building your resume from scratch
        </p>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mt-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
              placeholder="Email or Username"
              {...register("title")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.title?.message && <p>{errors.title?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="">Slug</label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600"
              placeholder="Email or Username"
              {...register("slug")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.title?.message && <p>{errors.title?.message}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-2 mt-4 justify-end ">
            <button
              className="bg-black text-white rounded-md w-1/2 p-2"
              type="submit"
            >
              Create
            </button>

            {/* <div className="w-full rounded-md">
            <button className="bg-black text-white rounded-md w-full p-4">
              Sign up{" "}
            </button>
          </div> */}
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CreateResumeModal;
