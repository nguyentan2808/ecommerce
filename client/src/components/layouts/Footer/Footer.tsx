import {
    Box,
    chakra,
    Container,
    IconButton,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-50 shadow-2xl border-t border-t-gray-200">
            <footer className="flex flex-1 pt-8 pb-4 justify-center items-center">
                <div
                    className="flex justify-center items-center flex-grow"
                    // target="_blank"
                    // rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className="h-4 ml-2">
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </div>
            </footer>
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={"flex-start"}>
                        <ListHeader>Company</ListHeader>
                        <div className="flex">
                            <Link href={"#"}>About Us</Link>
                            <Tag
                                size="sm"
                                variant="solid"
                                colorScheme="teal"
                                className="ml-1 h-0"
                            >
                                New
                            </Tag>
                        </div>
                        <Link href={"#"}>Blog</Link>
                        <Link href={"#"}>Careers</Link>
                        <Link href={"#"}>Contact Us</Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>Support</ListHeader>
                        <Link href={"#"}>Help Center</Link>
                        <Link href={"#"}>Safety Center</Link>
                        <Link href={"#"}>Community Guidelines</Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={"#"}>Cookies Policy</Link>
                        <Link href={"#"}>Privacy Policy</Link>
                        <Link href={"#"}>Terms of Service</Link>
                        <Link href={"#"}>Law Enforcement</Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={"row"}>
                            <Input
                                placeholder={"Your email address"}
                                bg={useColorModeValue(
                                    "blackAlpha.100",
                                    "whiteAlpha.100"
                                )}
                            />
                            <IconButton
                                aria-label="Subscribe"
                                icon={<IoMdMail />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
            >
                <Container
                    maxW="6xl"
                    className="mb-12 sm:mb-0 py-4 flex justify-between items-center"
                >
                    <div>
                        © 2022{" "}
                        <Link href="https://www.facebook.com/nguyentan2808/">
                            <a className="font-semibold">Nguyen Tan</a>
                        </Link>
                        . All rights reserved.
                    </div>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton label={"Twitter"} href={"#"}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={"YouTube"} href={"#"}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={"Instagram"} href={"#"}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;
