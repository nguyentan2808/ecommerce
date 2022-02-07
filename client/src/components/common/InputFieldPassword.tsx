import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = () => {
    const [field, { error, touched }] = useField("password");
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <FormControl isInvalid={!!error && !!touched} isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    {...field}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="123456"
                />
                <InputRightElement h={"full"}>
                    <IconButton
                        aria-label="show-password"
                        colorScheme={"ghost"}
                        color="black"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <AiOutlineEye className="text-2xl opacity-50" />
                        ) : (
                            <AiOutlineEyeInvisible className="text-2xl opacity-50" />
                        )}
                    </IconButton>
                </InputRightElement>
            </InputGroup>
            {error && touched ? (
                <FormErrorMessage>{error}</FormErrorMessage>
            ) : (
                ""
            )}
        </FormControl>
    );
};

export default React.memo(InputField);
