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
import useTrans from "hooks/useTrans";
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
    const trans = useTrans();

    return (
        <div className="bg-gray-50 border-t border-t-gray-200">
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
                        <ListHeader>{trans.footer.company}</ListHeader>
                        <div className="flex">
                            <Link href={"#"}>{trans.footer.about_us}</Link>
                            <Tag
                                size="sm"
                                variant="solid"
                                colorScheme="teal"
                                className="ml-1 h-0"
                            >
                                New
                            </Tag>
                        </div>
                        <Link href={"#"}>{trans.footer.blog}</Link>
                        <Link href={"#"}>{trans.footer.careers}</Link>
                        <Link href={"#"}>{trans.footer.contact_us}</Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>{trans.footer.support}</ListHeader>
                        <Link href={"#"}>{trans.footer.help_center}</Link>
                        <Link href={"#"}>{trans.footer.safety_center}</Link>
                        <Link href={"#"}>
                            {trans.footer.community_guidelines}
                        </Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>{trans.footer.legal}</ListHeader>
                        <Link href={"#"}>{trans.footer.cookies_policy}</Link>
                        <Link href={"#"}>{trans.footer.privacy_policy}</Link>
                        <Link href={"#"}>{trans.footer.terms_of_service}</Link>
                        <Link href={"#"}>{trans.footer.law_enforcement}</Link>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>{trans.footer.stay_email}</ListHeader>
                        <Stack direction={"row"}>
                            <Input
                                placeholder={
                                    trans.footer.stay_email_placeholder
                                }
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
                    className="mb-10 sm:mb-0 py-4 flex justify-between items-center"
                >
                    <div className="mr-2">
                        {trans.footer.copyright_year}{" "}
                        <Link href="https://www.facebook.com/nguyentan2808/">
                            <a className="font-semibold">Nguyen Tan</a>
                        </Link>
                        . {trans.footer.copyright_all_rights}
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
