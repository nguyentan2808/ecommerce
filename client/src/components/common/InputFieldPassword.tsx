import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputFieldPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="password"
      render={({ field }) => (
        <FormControl isInvalid={errors.password} isRequired={true}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              {...field}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="admin123"
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
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default React.memo(InputFieldPassword);
