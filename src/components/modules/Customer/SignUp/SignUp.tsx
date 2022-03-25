import {
  Alert,
  AlertIcon,
  Button,
  Checkbox,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "@public/logo.png";
import axios from "axios";
import InputField from "components/common/InputField";
import InputFieldPassword from "components/common/InputFieldPassword";
import SelectField from "components/common/SelectField";
import useLocation from "hooks/useLocation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

interface ISignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = Yup.object({
  name: Yup.string()
    .required("Please enter your name 🚀")
    .min(8, "Username should be 8 chars minium"),
  username: Yup.string()
    .required("Please enter your username")
    .min(8, "Username should be 8 chars minium"),
  password: Yup.string()
    .required("Please enter your password 🚀")
    .min(8, "Password should be 8 chars minimum.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password should includes 1 Uppercase, 1 Lowercase and 1 Number!"
    ),
  phone: Yup.number()
    .required("Please enter your phone number 🚀")
    .min(10, "Invalid phone number")
    .typeError("Phone must be a number"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email 🚀"),
  province: Yup.string().required("Please select your province 🚀"),
  district: Yup.string().required("Please select your district 🚀"),
  ward: Yup.string().required("Please select your ward 🚀"),
}).required();

const SignUp: React.FC<ISignUpProps> = ({ isOpen, onClose }) => {
  const {
    listProvince,
    listDistrict,
    listWard,
    handleSelectProvince,
    handleSelectDistrict,
  } = useLocation();

  const [error, setError] = React.useState<string>("");

  const methods = useForm({
    defaultValues: {
      email: "",
      name: "",
      username: "",
      phone: 1,
      password: "",
      province: "",
      district: "",
      ward: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    const { ward, district, province, ...rest } = values;
    const body = { ...rest, address: [ward, district, province].join(", ") };
    try {
      await axios.post("http://localhost:5000/users", {
        ...body,
      });

      toast.success("Sign up successfully!");
    } catch (error: any) {
      const message = error?.response?.data?.message;
      setError(message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="flex justify-center m-2 mt-4">
          <Image src={logo} height="28px" width="174px" alt="logo" />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="px-1 w-full mx-auto mb-8">
                <div className="flex justify-center mb-8">
                  <div className="text-md">
                    By signing up, you agree to{" "}
                    <Link href="#">
                      <a className="text-teal-600 underline">our terms</a>
                    </Link>{" "}
                    &{" "}
                    <Link href="#">
                      <a className="text-teal-600 underline">policy</a>
                    </Link>{" "}
                    🙈
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />

                  <InputField
                    label="Username"
                    name="username"
                    placeholder="Username"
                    type="text"
                  />

                  <InputFieldPassword />

                  <InputField
                    label="Phone"
                    name="phone"
                    placeholder="Phone"
                    type="number"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />

                  <SelectField
                    name="province"
                    label="Province"
                    placeholder="Select Province"
                    list={listProvince}
                    handleSelect={handleSelectProvince}
                  >
                    {(province) => (
                      <option
                        key={province.idProvince}
                        data-id={province.idProvince}
                        value={province.name}
                      >
                        {province.name}
                      </option>
                    )}
                  </SelectField>

                  <SelectField
                    name="district"
                    label="District"
                    placeholder="Select District"
                    list={listDistrict}
                    handleSelect={handleSelectDistrict}
                  >
                    {(district) => (
                      <option
                        key={district.idDistrict}
                        data-id={district.idDistrict}
                        value={district.name}
                      >
                        {district.name}
                      </option>
                    )}
                  </SelectField>

                  <SelectField
                    name="ward"
                    label="Ward"
                    placeholder="Select Ward"
                    list={listWard}
                    handleSelect={() => {}}
                  >
                    {(ward) => (
                      <option key={ward.idCommune} value={ward.name}>
                        {ward.name}
                      </option>
                    )}
                  </SelectField>

                  <Divider />

                  {error && (
                    <Alert status="error" variant="left-accent">
                      <AlertIcon />
                      {error}
                    </Alert>
                  )}

                  <div className="flex justify-between my-2">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Link href="/forgot-password">
                      <a> Forgot password?</a>
                    </Link>
                  </div>

                  <Button type="submit">Sign in</Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUp;
