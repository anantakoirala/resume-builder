import React from "react";
import First from "../templates/first";

type Props = {};

export const getTemplate = (name: string) => {
  switch (name) {
    case "first":
      return First;
    default:
      return First;
  }
};
