"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Picture from "../components/template/components/Picture";
import { cn } from "@/utils/style";

type Props = {};

const First = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);
  const { basics } = resume.data;
  return (
    <div
      className="grid h-full grid-cols-3"
      style={{ lineHeight: `2.5`, fontSize: `48px` }}
    >
      <div className="main p-custom group col-span-2 space-y-4">
        <div className="flex items-center space-x-4">
          <Picture />

          <div className="space-y-2">
            <div>
              <div className="text-2xl font-bold">{basics.name}</div>
              <div className="text-base">{basics.headline}</div>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
              {basics.location && (
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-map-pin text-primary" />
                  <div>{basics.location}</div>
                </div>
              )}
              {basics.phone && (
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-phone text-primary" />
                  <a
                    href={`tel:${basics.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {basics.phone}
                  </a>
                </div>
              )}
              {basics.email && (
                <div className="flex items-center gap-x-1.5">
                  <i className="ph ph-bold ph-at text-primary" />
                  <a
                    href={`mailto:${basics.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {basics.email}
                  </a>
                </div>
              )}

              {basics.customFields.map((item) => (
                <div key={item.id} className="flex items-center gap-x-1.5">
                  <i
                    className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")}
                  />
                  <span>
                    {[item.name, item.value].filter(Boolean).join(": ")}
                  </span>
                </div>
              ))}
            </div>

            {/* ... other content ... */}
          </div>
        </div>
      </div>

      <div className="sidebar p-custom group h-full space-y-4 bg-primary text-background">
        {/* ... sidebar content ... */}
      </div>
    </div>
  );
};

export default First;
