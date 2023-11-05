"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { useFormContext, Controller } from "react-hook-form";

interface IInputType {
  name: string;
  type?: string;
  size?: "md" | "lg";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const TextInput = ({
  name,
  type,
  size = "lg",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInputType) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          crossOrigin={undefined}
          type={type}
          color="blue"
          size={size}
          placeholder={placeholder}
          label={label}
          {...field}
          value={value ? value : field.value}
          required={required}
        />
      )}
    />
  );
};

export default TextInput;
