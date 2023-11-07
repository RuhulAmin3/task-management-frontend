import { Option, Select } from "@material-tailwind/react";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "lg" | "md";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: any) => void;
  required: boolean;
};

const SelectInput = ({
  name,
  size = "md",
  value,
  placeholder = "select",
  options,
  label,
  required,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            label={label}
            onChange={onChange}
            size={size}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          >
            {options.map((option, idx) => (
              <Option key={idx} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )}
      />
    </>
  );
};

export default SelectInput;
