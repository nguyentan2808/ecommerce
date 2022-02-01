import { Button, Checkbox, Divider, Image } from "@chakra-ui/react";
import InputField from "components/common/InputField";
import { Form, Formik } from "formik";
import useTrans from "hooks/useTrans";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

const Login: React.FC = () => {
    const trans = useTrans();

    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    });

    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-8 flex flex-1 justify-center items-center min-h-[calc(100vh-var(--navbar-height))]">
                <div className="w-full max-w-md flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">
                        {trans.login.login_header}
                    </h1>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={loginFormSchema}
                        onSubmit={(values) => console.log(values)}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col gap-4">
                                <InputField
                                    name="email"
                                    placeholder="Email"
                                    label={trans.login.form_email}
                                    type="text"
                                />

                                <InputField
                                    name="password"
                                    placeholder="Password"
                                    label={trans.login.form_password}
                                    type="password"
                                />

                                <div className="flex flex-row justify-between">
                                    <Checkbox>
                                        {trans.login.form_remember_me}
                                    </Checkbox>
                                    <Link href="/forgot-password">
                                        <a className="text-blue-600">
                                            {trans.login.form_forgot_password}
                                        </a>
                                    </Link>
                                </div>

                                <Button type="submit" isLoading={isSubmitting}>
                                    {trans.login.form_submit_btn}
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <Divider />

                    {/* Facebook */}
                    <Button colorScheme={"facebook"} leftIcon={<FaFacebook />}>
                        {trans.login.form_facebook}
                    </Button>

                    {/* Google */}
                    <Button variant={"outline"} leftIcon={<FcGoogle />}>
                        {trans.login.form_google}
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
    );
};

export default Login;
