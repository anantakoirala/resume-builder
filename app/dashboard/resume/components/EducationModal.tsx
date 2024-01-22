"use client";
import Modal from "@/app/components/Modal";
import { closeModal } from "@/redux/modal/modalSlice";
import { setBasicSection } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";
import { Sections } from "@/schema/sections";
import {
  Education,
  defaultEducation,
  educationSchema,
} from "@/schema/sections/education";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  id: keyof Sections;
};

const EducationModal = ({ id }: Props) => {
  const dispatch = useDispatch();
  const {
    name,
    mode,
    id: itemId,
  } = useSelector((state: RootState) => state.modal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Education>({
    resolver: zodResolver(educationSchema),
    defaultValues: defaultEducation,
  });

  const { resume } = useSelector((state: RootState) => state.resume);

  const submitForm = async (data: Education) => {
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

    reset(defaultEducation);

    dispatch(closeModal());
  };

  useEffect(() => {
    if (mode === "update") {
      console.log("itemId", itemId);
      const previousData = resume.data.sections[`${id}`].items.find(
        (item) => item.id === itemId
      );
      console.log("previousdata", previousData);
      reset({ ...defaultEducation, ...previousData });
    } else {
      reset(defaultEducation);
    }
  }, [mode, reset, id, itemId, resume]);
  if (name != id) return null;
  return (
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
              {...register("institution")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.institution?.message && (
                <p>{errors.institution?.message}</p>
              )}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Type of Study
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("studyType")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.studyType?.message && <p>{errors.studyType?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Area of Study
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("area")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.area?.message && <p>{errors.area?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Score
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("score")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.score?.message && <p>{errors.score?.message}</p>}
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Date or Date Range
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder="March 2023 - present"
              {...register("date")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors?.date?.message && <p>{errors?.date.message}</p>}
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
              {errors?.url?.href?.message && <p>{errors?.url?.href.message}</p>}
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
  );
};

export default EducationModal;
