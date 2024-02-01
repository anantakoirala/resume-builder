"use client";
import Modal from "@/app/components/Modal";
import TextInput from "@/app/components/TextInput";
import { closeModal } from "@/redux/modal/modalSlice";
import { setBasicSection } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";
import { Sections } from "@/schema/sections";
import {
  Certification,
  certificationSchema,
  defaultCertification,
} from "@/schema/sections/certification";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  id: keyof Sections;
};

const CertificationModal = ({ id }: Props) => {
  const dispatch = useDispatch();
  const {
    name,
    mode,
    id: itemId,
  } = useSelector((state: RootState) => state.modal);
  const { resume } = useSelector((state: RootState) => state.resume);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm<Certification>({
    resolver: zodResolver(certificationSchema),
    defaultValues: defaultCertification,
  });

  useEffect(() => {
    if (mode === "update") {
      console.log("itemId", itemId);
      const previousData = resume.data.sections[`${id}`].items.find(
        (item) => item.id === itemId
      );

      reset({ ...defaultCertification, ...previousData });
    } else {
      reset(defaultCertification);
    }
  }, [mode, reset, id, itemId, resume]);

  const submitForm = async (data: Certification) => {
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

      modifiedItems = updatedItems;
    }

    // Dispatch the updated items before resetting the form
    dispatch(setBasicSection({ path, value: modifiedItems }));

    // Reset the form after the state has been updated
    setTimeout(() => {
      reset(defaultCertification);
    }, 0);

    dispatch(closeModal());
  };

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
              Issuer
            </label>
            <input
              type="text"
              className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
              placeholder=""
              {...register("issuer")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors.issuer?.message && <p>{errors.issuer?.message}</p>}
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
              placeholder="https://udemy.com"
              {...register("url.href")}
            />
            <div className="text-xs text-gray-500 mb-1">
              {errors?.url?.href?.message && <p>{errors?.url?.href.message}</p>}
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

export default CertificationModal;
