"use client";
import ReusableInput from "@/app/components/KeyWordInput";
import KeyWordInput from "@/app/components/KeyWordInput";
import Modal from "@/app/components/Modal";
import Slider from "@/app/components/Slider";
import TextInput from "@/app/components/TextInput";
import { closeModal } from "@/redux/modal/modalSlice";
import { setBasicSection } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";
import { Sections } from "@/schema/sections";

import {
  Project,
  defaultProject,
  projectSchema,
} from "@/schema/sections/project";

import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  id: keyof Sections;
};

const ProjectModal = ({ id }: Props) => {
  const dispatch = useDispatch();
  const {
    name,
    mode,
    id: itemId,
  } = useSelector((state: RootState) => state.modal);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: defaultProject,
  });

  const { resume } = useSelector((state: RootState) => state.resume);

  const submitForm = async (data: Project) => {
    const path = `sections.${id}.items`;
    let modifiedItems = [
      ...resume.data.sections[`${id}`].items,
      { ...data, id: createId() },
    ];

    if (mode === "update") {
      const updatedItems = resume.data.sections[`${id}`].items.map((item) => {
        if (item.id === itemId) {
          // If the item matches the specified ID, update its properties
          return { ...item, ...data }; // Update 'data' property with 'newData'
        }
        return item; // Return the unchanged item for items that don't match the condition
      });

      //console.log("updatedItems", updatedItems);
      modifiedItems = updatedItems;
    }

    // Dispatch the updated items before resetting the form
    dispatch(setBasicSection({ path, value: modifiedItems }));

    // Reset the form after the state has been updated

    reset(defaultProject);

    dispatch(closeModal());
  };

  useEffect(() => {
    if (mode === "update") {
      console.log("itemId", itemId);
      const previousData = resume.data.sections[`${id}`].items.find(
        (item) => item.id === itemId
      );

      reset({ ...defaultProject, ...previousData });
    } else {
      reset(defaultProject);
    }
  }, [mode, reset, id, itemId, resume]);
  if (name != id) return null;
  return (
    <>
      <Modal>
        <div className="flex flex-col space-y-3 text-left">
          <div className="flex flex-row items-center">
            <PiPlus />
            <p className="text-sm font-bold ml-2">Create a new item</p>
          </div>
        </div>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Name
              </label>
              <input
                type="text"
                className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
                placeholder=""
                {...register("name")}
              />
              <div className="text-xs text-gray-500 mb-1">
                {errors.name?.message && <p>{errors.name?.message}</p>}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Description
              </label>
              <input
                type="text"
                className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
                placeholder=""
                {...register("description")}
              />
              <div className="text-xs text-gray-500 mb-1">
                {errors.description?.message && (
                  <p>{errors.description?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Date or Date Range
              </label>
              <input
                type="text"
                className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
                placeholder=""
                {...register("date")}
              />
              <div className="text-xs text-gray-500 mb-1">
                {errors.description?.message && <p>{errors.date?.message}</p>}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Website
              </label>
              <input
                type="text"
                className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
                placeholder=""
                {...register("url.href")}
              />
              <div className="text-xs text-gray-500 mb-1">
                {errors.url?.href?.message && (
                  <p>{errors.url?.href?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Summary
              </label>
              <TextInput
                onChange={(value: string) => setValue("summary", value)}
                contentValue={getValues("summary")}
              />

              <div className="text-xs text-gray-500 mb-1">
                {errors?.url?.href?.message && (
                  <p>{errors?.url?.href.message}</p>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="font-medium">
                Keyword
              </label>
              <ReusableInput
                control={control}
                name="keywords"
                label="keywords"
              />
              <div className="text-xs text-gray-500 mb-1">
                {errors.keywords?.message && <p>{errors.keywords?.message}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-2 mt-4 justify-end ">
              <button
                className="bg-black text-white rounded-md w-1/2 p-2"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ProjectModal;
