import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  isRequired?: boolean;
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
        <FormControl isInvalid={errors[props.name]} isRequired={isRequired}>
          <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
          <Input {...field} id={field.name} type={props.type} />

          <FormErrorMessage>{errors[props.name]?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default React.memo(InputField);
