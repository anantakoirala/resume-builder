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
  Publication,
  defaultPublication,
  publicationSchema,
} from "@/schema/sections/publication";

type Props = {
  id: keyof Sections;
};

const PublicationModal = ({ id }: Props) => {
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
  } = useForm<Publication>({
    resolver: zodResolver(publicationSchema),
    defaultValues: defaultPublication,
  });

  const { resume } = useSelector((state: RootState) => state.resume);

  const submitForm = async (data: Publication) => {
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

    reset(defaultPublication);

    dispatch(closeModal());
  };

  useEffect(() => {
    if (mode === "update") {
      console.log("itemId", itemId);
      const previousData = resume.data.sections[`${id}`].items.find(
        (item) => item.id === itemId
      );
      console.log("previousdata", previousData);
      reset({ ...defaultPublication, ...previousData });
    } else {
      reset(defaultPublication);
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
              {...register("name")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.name?.message && <p>{errors.name?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Publisher
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("publisher")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.publisher?.message && <p>{errors.publisher?.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-medium">
              Date
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

export default PublicationModal;
