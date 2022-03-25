import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaFieldProps {
  name: string;
  label: string | React.ReactNode;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
}

const TextAreaField = ({
  isRequired = false,
  ...props
}: TextAreaFieldProps) => {
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
          <Textarea
            {...field}
            id={field.name}
            type={props.type}
            placeholder={props.placeholder}
          />

          <FormErrorMessage>{errors[props.name]?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default React.memo(TextAreaField);
