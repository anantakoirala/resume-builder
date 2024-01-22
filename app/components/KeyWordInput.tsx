// ReusableInput.tsx
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { PiX } from "react-icons/pi";

type ReusableInputProps = {
  control: any; // Replace 'any' with your specific type for control
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  rules?: Object;
  defaultValue?: string[];
};

const ReusableInput: React.FC<ReusableInputProps> = ({
  control,
  name,
  label,
  type = "text",
  placeholder = "",
  rules = {},
  defaultValue,
}) => {
  const [inputvalue, setInputValue] = useState("");
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  // Custom function to handle comma-separated values

  const processInput = useCallback(() => {
    const valuesArray = inputvalue.split(",").map((item) => item.trim());
    const newArray = valuesArray
      .filter(Boolean)
      .filter((str) => !value.includes(str));

    value.push(newArray[0]);
    // Check if the last character is a comma to handle backspace

    onChange(value);

    setInputValue("");
  }, [onChange, inputvalue, value]);

  const removevalue = (keyword: string) => {
    const newValue = value.filter((v: string) => v !== keyword);

    // Use the onChange function to update the value
    onChange(newValue);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      processInput();
    }
  };

  useEffect(() => {
    if (inputvalue.includes(",")) {
      processInput();
    }
  }, [inputvalue, processInput]);

  return (
    <div>
      <input
        id={name}
        className="rounded w-full p-2 border border-gray-400 placeholder-slate-600 text-sm"
        type={type}
        value={inputvalue}
        onChange={(event) => setInputValue(event.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />

      <div className="flex flex-row gap-2 w-full mt-2">
        {value &&
          value.map((v: string, index: number) => (
            <div
              key={index}
              className="flex rounded-2xl bg-black text-white p-1 px-2 text-sm cursor-pointer flex-row items-center justify-center "
              onClick={() => removevalue(v)}
            >
              {v}
              <PiX size={12} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReusableInput;
