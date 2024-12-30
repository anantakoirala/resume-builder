import React, { useState } from "react";
import TemplateSections from "./sections/TemplateSections";
import { useLazyPrintResumeQuery } from "@/redux/resume/resumeApi";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PreviewPdf from "./sections/previewPdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import axiosClient from "@/app/utils/axios";
import FontSections from "./sections/FontSections";

type Props = {};

const RightContentField = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);
  const [loading, setLoading] = useState(false);
  const [trigger, { data }, fetch] = useLazyPrintResumeQuery();
  const printResume = async (id: string) => {
    setLoading(true);
    axiosClient
      .get(`/resume/print/${id}`, {
        responseType: "blob",
      })
      .then((res) => {
        let filename = res.headers["x-suggested-filename"]; // Default filename if not found in header

        console.log("filename", filename);

        // Create a blob URL for the file data
        const blob = new Blob([res.data], {
          type: "application/pdf",
        });

        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename; // Specify the desired file name
        document.body.appendChild(a);

        // Trigger the download and remove the temporary anchor element
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching resume:", error);
      });
    // console.log("data", response);
  };

  return (
    <div className="flex flex-col flex-1 py-6 px-2 h-screen  no-scrollbar overflow-y-auto">
      <TemplateSections />
      <FontSections />
      <div className="mt-2">
        <button
          className="bg-black text-white w-full border-[2px] p-2 rounded-md "
          onClick={() => printResume(resume.id)}
          disabled={loading}
        >
          <span
            className={`${
              loading ? "loading loading-spinner" : ""
            } bg-lime-500 `}
          ></span>

          {loading ? "loading" : "download"}
        </button>
      </div>
    </div>
  );
};

export default RightContentField;
