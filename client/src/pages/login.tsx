import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Divider,
    Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-8 flex flex-1 justify-center items-center min-h-[calc(100vh-var(--navbar-height))]">
                <Stack spacing={6} className="w-full max-w-md">
                    <Heading fontSize={"2xl"}>Sign in to your account</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}
                        >
                            <Checkbox>Remember me</Checkbox>
                            <Link href="/forgot-password">
                                <a className="text-blue-600">
                                    Forgot password?
                                </a>
                            </Link>
                        </Stack>
                        <Button>Sign in</Button>
                        <Divider />

                        {/* Facebook */}
                        <Button
                            w={"full"}
                            colorScheme={"facebook"}
                            leftIcon={<FaFacebook />}
                        >
                            <Text>Continue with Facebook</Text>
                        </Button>

                        {/* Google */}
                        <Button
                            w={"full"}
                            variant={"outline"}
                            leftIcon={<FcGoogle />}
                        >
                            <Text>Sign in with Google</Text>
                        </Button>
                    </Stack>
                </Stack>
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
