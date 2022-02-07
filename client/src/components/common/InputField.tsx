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
    isRequired: boolean;
}

const InputField = (props: InputFieldProps) => {
    const [field, { error, touched }] = useField(props);
    return (
        <FormControl
            isInvalid={!!error && !!touched}
            isRequired={props.isRequired}
        >
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
