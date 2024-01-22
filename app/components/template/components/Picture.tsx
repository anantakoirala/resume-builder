import React from "react";

type Props = {};

const Picture = (props: Props) => {
  return (
    <>
      <img
        src=""
        alt="profile"
        className="relative z-20 object-cover bg-gray-100"
        style={{ maxWidth: `64px`, borderRadius: `8px`, aspectRatio: "1" }}
      />
    </>
  );
};

export default Picture;
