import React from "react";

import Everest from "../templates/Everest";
import Annapurna from "../templates/Annapurna";

type Props = {};

export const getTemplate = (name: string) => {
  switch (name) {
    case "everest":
      return Everest;
    case "annapurna":
      return Annapurna;
    default:
      return Everest;
  }
};
