"use client";
import Modal from "@/app/components/Modal";
import { RootState } from "@/redux/store";
import { Sections } from "@/schema/sections";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { setBasicSection, setSectionData } from "@/redux/resume/resumeSlice";
import { PiPlus } from "react-icons/pi";
import { closeModal } from "@/redux/modal/modalSlice";
import { createId } from "@paralleldrive/cuid2";
import {
  Volunteer,
  defaultVolunteer,
  volunteerSchema,
} from "@/schema/sections/volunteer";

type Props = {
  id: keyof Sections;
};

const VolunteerModal = ({ id }: Props) => {
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
  } = useForm<Volunteer>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: defaultVolunteer,
  });

  const { resume } = useSelector((state: RootState) => state.resume);

  const submitForm = async (data: Volunteer) => {
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

    reset(defaultVolunteer);

    dispatch(closeModal());
  };

  useEffect(() => {
    if (mode === "update") {
      console.log("itemId", itemId);
      const previousData = resume.data.sections[`${id}`].items.find(
        (item) => item.id === itemId
      );
      console.log("previousdata", previousData);
      reset({ ...defaultVolunteer, ...previousData });
    } else {
      reset(defaultVolunteer);
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
              Organization
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("organization")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.organization?.message && (
                <p>{errors.organization?.message}</p>
              )}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Position
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("position")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.position?.message && <p>{errors.position?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Date or Date Range
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder="March 2023"
              {...register("date")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors?.date?.message && <p>{errors?.date?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Location
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("location")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors?.location?.message && <p>{errors?.location?.message}</p>}
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
              {errors?.url?.href?.message && (
                <p>{errors?.url?.href?.message}</p>
              )}
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

export default VolunteerModal;
