import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    type: string;
}

const InputField = ({ ...props }: InputFieldProps) => {
    const [field, { error, touched }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input {...field} id={field.name} {...props} />
            {error && touched ? (
                <FormErrorMessage>{error}</FormErrorMessage>
            ) : (
                ""
            )}
        </FormControl>
    );
};

export default React.memo(InputField);
