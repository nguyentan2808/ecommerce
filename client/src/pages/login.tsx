import { Button, Checkbox, Divider, Image } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/common/InputField";
import useI18n from "hooks/useI18n";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { useDisclosure } from "@chakra-ui/hooks";
import SignUpModal from "components/modules/SignUp";

interface IValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const i18n = useI18n();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password should includes One Uppercase, One Lowercase and One Number!"
      )
      .required("Password is required."),
  }).required();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IValues) => alert(JSON.stringify(data, null, 2));

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 flex flex-1 justify-center items-center min-h-[calc(100vh-var(--navbar-height))]">
          <div className="w-full max-w-md flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{i18n.login.login_header}</h1>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <InputField
                  isRequired={true}
                  name="email"
                  placeholder="Email"
                  label={i18n.login.form_email}
                  type="text"
                />

                <InputField
                  isRequired={true}
                  name="password"
                  placeholder="Password"
                  label={i18n.login.form_password}
                  type="password"
                />

                <div className="flex flex-row justify-between">
                  <Checkbox>{i18n.login.form_remember_me}</Checkbox>
                  <Link href="/forgot-password">
                    <a className="text-blue-600">
                      {i18n.login.form_forgot_password}
                    </a>
                  </Link>
                </div>

                <Button type="submit">{i18n.login.form_submit_btn}</Button>
              </form>
            </FormProvider>

            <Divider />

            <div className="text-center">
              Don&apos;t have account?{" "}
              <a
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={onOpen}
              >
                Sign-up
              </a>
            </div>

            {/* Facebook */}
            <Button colorScheme={"facebook"} leftIcon={<FaFacebook />}>
              {i18n.login.form_facebook}
            </Button>

            {/* Google */}
            <Button variant={"outline"} leftIcon={<FcGoogle />}>
              {i18n.login.form_google}
            </Button>
          </div>
        </div>
        <div className=" sm:flex flex-1">
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </div>
      </div>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Login;
