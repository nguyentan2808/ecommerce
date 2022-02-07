import {
    Box,
    Button,
    Heading,
    Select,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import logo from "@public/logo.png";
import InputField from "components/common/InputField";
import InputFieldPassword from "components/common/InputFieldPassword";
import { Form, Formik } from "formik";
import useLocation from "hooks/useLocation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

interface IValues {
    name: string;
    username: string;
    password: string;
    phone: number | undefined;
    email: string;
}

const SignUp: React.FC = () => {
    const {
        listProvince,
        listDistrict,
        listWard,
        currentLocation,
        setCurrentLocation,
    } = useLocation();

    const signUpFormSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        username: Yup.string()
            .min(8, "Username should be 8 chars minium")
            .required("Username is required"),
        password: Yup.string()
            .min(8, "Password should be 8 chars minimum.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Password should includes One Uppercase, One Lowercase and One Number!"
            )
            .required("Password is required."),
        phone: Yup.number()
            .min(10, "Invalid phone number")
            .required("Phone number is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
    });

    const handleSubmit = (values: IValues) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div className="flex justify-center">
            <div className="my-8 flex flex-col gap-4">
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    minW={"md"}
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    className="shadow-mui-3"
                    p={8}
                >
                    <div className="flex justify-center pb-8">
                        <Image
                            src={logo}
                            height="30px"
                            width="186px"
                            alt="logo"
                        />
                    </div>
                    <Formik
                        initialValues={{
                            name: "",
                            username: "",
                            password: "",
                            phone: undefined,
                            email: "",
                        }}
                        validationSchema={signUpFormSchema}
                        onSubmit={handleSubmit}
                        // validateOnMount={false}
                        // validateOnBlur={false}
                        // validateOnChange={false}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="flex flex-col gap-4 ">
                                    <InputField
                                        isRequired={true}
                                        label="Name"
                                        name="name"
                                        placeholder="John"
                                        type="text"
                                    />
                                    <InputField
                                        isRequired={true}
                                        label="Username"
                                        name="username"
                                        placeholder="john123"
                                        type="text"
                                    />

                                    <InputFieldPassword />

                                    <InputField
                                        isRequired={true}
                                        label="Phone"
                                        name="phone"
                                        placeholder="Phone"
                                        type="number"
                                    />

                                    <InputField
                                        isRequired={false}
                                        label="Email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                    />

                                    <Select
                                        placeholder="Select Province"
                                        onChange={(event) => {
                                            setCurrentLocation({
                                                ...currentLocation,
                                                idProvince: event.target.value,
                                            });
                                        }}
                                    >
                                        {listProvince.map((province) => (
                                            <option
                                                key={province.idProvince}
                                                value={province.idProvince}
                                            >
                                                {province.name}
                                            </option>
                                        ))}
                                    </Select>

                                    <Select
                                        placeholder="Select District"
                                        onChange={(event) => {
                                            setCurrentLocation({
                                                ...currentLocation,
                                                idDistrict: event.target.value,
                                            });
                                        }}
                                    >
                                        {listDistrict.map((district) => (
                                            <option
                                                key={district.idDistrict}
                                                value={district.idDistrict}
                                            >
                                                {district.name}
                                            </option>
                                        ))}
                                    </Select>

                                    <Select
                                        placeholder="Select Ward"
                                        onChange={(event) => {
                                            console.log(event.target.value);
                                        }}
                                    >
                                        {listWard.map((ward) => (
                                            <option
                                                key={ward.idCommune}
                                                value={ward.idCommune}
                                            >
                                                {ward.name}
                                            </option>
                                        ))}
                                    </Select>

                                    <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        loadingText="Submitting"
                                    >
                                        Sign up
                                    </Button>

                                    <div className="text-center">
                                        <span>Already have account? </span>
                                        <Link href="/login">
                                            <a className="text-blue-600 hover:underline">
                                                Login
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
        </div>
    );
};

export default SignUp;

// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     FormErrorMessage,
// } from "@chakra-ui/react";
// import { Controller, useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup
//     .object({
//         email: yup.string().min(8, "Oke 123").required(),
//         name: yup.string().required(),
//         phone: yup.string().required(),
//     })
//     .required();

// export default function SimpleCard() {
//     const {
//         handleSubmit,
//         control,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//         defaultValues: {
//             name: "",
//             email: "",
//             phone: "",
//         },
//     });

//     const onSubmit = (data: any) => console.log(data);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Flex
//                 minH={"100vh"}
//                 align={"center"}
//                 justify={"center"}
//                 bg={useColorModeValue("gray.50", "gray.800")}
//             >
//                 <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//                     <Stack align={"center"}>
//                         <Heading fontSize={"4xl"}>
//                             Sign in to your account
//                         </Heading>
//                         <Text fontSize={"lg"} color={"gray.600"}>
//                             to enjoy all of our cool{" "}
//                             <Link color={"blue.400"}>features</Link> ✌️
//                         </Text>
//                     </Stack>
//                     <Box
//                         rounded={"lg"}
//                         bg={useColorModeValue("white", "gray.700")}
//                         boxShadow={"lg"}
//                         p={8}
//                     >
//                         <Stack spacing={4}>
//                             <Controller
//                                 control={control}
//                                 name="email"
//                                 render={({ field }) => (
//                                     <FormControl
//                                         isInvalid={Boolean(errors.email)}
//                                         id="email"
//                                     >
//                                         <FormLabel>Email address</FormLabel>
//                                         <Input {...field} type="text" />
//                                         <FormErrorMessage>
//                                             {errors?.email?.message}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             />
//                             <Controller
//                                 control={control}
//                                 name="name"
//                                 render={({ field }) => (
//                                     <FormControl
//                                         isInvalid={Boolean(errors.name)}
//                                         id="name"
//                                     >
//                                         <FormLabel>Name</FormLabel>
//                                         <Input {...field} type="text" />
//                                         <FormErrorMessage>
//                                             {errors?.name?.message}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             />
//                             <Controller
//                                 control={control}
//                                 name="phone"
//                                 render={({ field }) => (
//                                     <FormControl
//                                         isInvalid={Boolean(errors.phone)}
//                                         id="phone"
//                                     >
//                                         <FormLabel>Phone</FormLabel>
//                                         <Input {...field} type="text" />
//                                         <FormErrorMessage>
//                                             {errors?.phone?.message}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             />

//                             <Stack spacing={10}>
//                                 <Stack
//                                     direction={{ base: "column", sm: "row" }}
//                                     align={"start"}
//                                     justify={"space-between"}
//                                 >
//                                     <Checkbox>Remember me</Checkbox>
//                                     <Link color={"blue.400"}>
//                                         Forgot password?
//                                     </Link>
//                                 </Stack>
//                                 <Button
//                                     type="submit"
//                                     bg={"blue.400"}
//                                     color={"white"}
//                                     _hover={{
//                                         bg: "blue.500",
//                                     }}
//                                 >
//                                     Sign in
//                                 </Button>
//                             </Stack>
//                         </Stack>
//                     </Box>
//                 </Stack>
//             </Flex>
//         </form>
//     );
// }

// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     FormErrorMessage,
// } from "@chakra-ui/react";
// import { Formik, Form, Field } from "formik";
// import * as yup from "yup";

// const schema = yup
//     .object({
//         email: yup.string().min(8, "Oke 123").required(),
//         name: yup.string().required(),
//         phone: yup.string().required(),
//     })
//     .required();

// export default function SimpleCard() {
//     console.log("re render");

//     return (
//         <Formik
//             initialValues={{ name: "Sasuke" }}
//             onSubmit={(values, actions) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     actions.setSubmitting(false);
//                 }, 1000);
//             }}
//             validationSchema={schema}
//         >
//             {(props) => (
//                 <Form className="w-[400px]">
//                     <Field name="name">
//                         {({ field, form }: { field: any; form: any }) => (
//                             <FormControl isInvalid={form.errors.name}>
//                                 <FormLabel htmlFor="name">First name</FormLabel>
//                                 <Input
//                                     {...field}
//                                     id="name"
//                                     placeholder="name"
//                                 />
//                                 <FormErrorMessage>
//                                     {form.errors.name}
//                                 </FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>
//                     <Field name="email">
//                         {({ field, form }: { field: any; form: any }) => (
//                             <FormControl isInvalid={form.errors.email}>
//                                 <FormLabel htmlFor="email">Email</FormLabel>
//                                 <Input
//                                     {...field}
//                                     id="email"
//                                     placeholder="email"
//                                 />
//                                 <FormErrorMessage>
//                                     {form.errors.email}
//                                 </FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>
//                     <Field name="phone">
//                         {({ field, form }: { field: any; form: any }) => (
//                             <FormControl isInvalid={form.errors.phone}>
//                                 <FormLabel htmlFor="phone">
//                                     First name
//                                 </FormLabel>
//                                 <Input
//                                     {...field}
//                                     id="phone"
//                                     placeholder="phone"
//                                 />
//                                 <FormErrorMessage>
//                                     {form.errors.phone}
//                                 </FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>
//                     <Button
//                         mt={4}
//                         colorScheme="teal"
//                         isLoading={props.isSubmitting}
//                         type="submit"
//                     >
//                         Submit
//                     </Button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }
