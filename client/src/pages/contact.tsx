import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoMdMail,
} from "react-icons/io";
import { toast } from "react-toastify";
import image from "../../public/contact.png";

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <div className="w-full bg-gray-100 min-h-screen">
                <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14">
                    <div className="p-8 bg-white rounded-md shadow-md">
                        <Image src={image} alt="logo" className="mb-5" />

                        <div className="flex flex-col mb-6">
                            <span className="font-semibold text-heading mb-2">
                                Address
                            </span>
                            <span className="text-sm text-body">
                                Nha Be, Ho Chi Minh City
                            </span>
                        </div>
                        <div className="flex flex-col mb-6">
                            <span className="font-semibold text-heading mb-2">
                                Phone
                            </span>
                            <span className="text-sm text-body">
                                +84 333 571 180
                            </span>
                        </div>
                        <div></div>
                        <div className="flex flex-col mb-6">
                            <span className="font-semibold text-heading mb-2">
                                Email
                            </span>
                            <span className="text-sm text-body">
                                Tanpro01635147801@gmail.com
                            </span>
                        </div>

                        <div className="flex flex-col mb-3">
                            <span className="font-semibold text-heading mb-2">
                                Follow Us
                            </span>
                            <div className="w-2/3 flex justify-between py-1">
                                <Link
                                    href="https://www.facebook.com/nguyentan2808/"
                                    passHref
                                >
                                    <a target="_blank">
                                        <IoLogoFacebook className="text-xl opacity-30" />
                                    </a>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/nguy%E1%BB%85n-t%C3%A2n-65052b228/"
                                    passHref
                                >
                                    <a target="_blank">
                                        <IoLogoLinkedin className="text-xl opacity-30" />
                                    </a>
                                </Link>
                                <Link
                                    href="https://www.facebook.com/nguyentan2808/"
                                    passHref
                                >
                                    <a target="_blank">
                                        <IoLogoTwitter className="text-xl opacity-30" />
                                    </a>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/nguyentan.tan_/"
                                    passHref
                                >
                                    <a target="_blank">
                                        <IoLogoInstagram className="text-xl opacity-30" />
                                    </a>
                                </Link>
                                <Link
                                    href="mailto:tanpro01635147801@gmail.com"
                                    passHref
                                >
                                    <a target="_blank">
                                        <IoMdMail className="text-xl opacity-30" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-8 bg-white rounded-md md:ml-16 mt-6 md:mt-0 shadow-md">
                        <h3 className="mb-7 text-xl md:text-2xl font-body font-bold text-heading">
                            Questions, Comments, Or Concerns?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <FormControl>
                                <FormLabel htmlFor="email">Name</FormLabel>
                                <Input id="name" type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" />
                            </FormControl>
                        </div>
                        <div className="grid grid-cols-1 mb-6">
                            <FormControl>
                                <FormLabel htmlFor="email">Subject</FormLabel>
                                <Input id="name" type="text" />
                            </FormControl>
                        </div>
                        <div className="grid grid-cols-1 mb-6">
                            <FormControl>
                                <FormLabel htmlFor="email">
                                    Description
                                </FormLabel>
                                <Textarea size="md" resize="vertical" />
                            </FormControl>
                        </div>
                        <div className="grid grid-cols-1 mb-6">
                            <Checkbox
                                defaultIsChecked
                                colorScheme="teal"
                                focusBorderColor="teal"
                            >
                                I accept receive email promotion from Pickbazar.
                            </Checkbox>
                        </div>
                        <Button
                            className="bg-red-500"
                            onClick={() => toast("oke")}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
