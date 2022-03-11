import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string | React.ReactNode;
  placeholder: string;
  isRequired?: boolean;
  list: any[];
  children: (province: any) => React.ReactNode;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputField = ({ isRequired = false, ...props }: InputFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormControl isInvalid={errors[props.name]}>
          <FormLabel htmlFor={field.name}>{props.label}</FormLabel>

          <Select
            placeholder={props.placeholder}
            {...field}
            onChange={(event: any) => {
              field.onChange(event);
              props.handleSelect(event);
            }}
          >
            {props.list.map((item) => props.children(item))}
          </Select>
          <FormErrorMessage>{errors[props.name]?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default React.memo(InputField);
