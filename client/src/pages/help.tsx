import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Help: React.FC = () => {
    return (
        <>
            <Head>
                <title>Help</title>
            </Head>

            <div className="w-full mx-auto min-h-screen bg-gray-100 px-2 xl:px-60">
                <h1 className="w-full text-center pt-12 pb-4 font-bold text-3xl">
                    FAQ
                </h1>

                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem className="bg-white mt-3 rounded-md shadow">
                        <h2>
                            <AccordionButton>
                                <Box className="flex-1 text-left font-semibold py-2 ">
                                    How to contact with Customer Service?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Our Customer Experience Team is available 7 days a
                            week and we offer 2 ways to get in contact.Email and
                            Chat . We try to reply quickly, so you need not to
                            wait too long for a response!.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="bg-white mt-3 rounded-md shadow">
                        <h2>
                            <AccordionButton>
                                <Box className="flex-1 text-left font-semibold py-2">
                                    App installation failed, how to update
                                    system information?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Please read the documentation carefully . We also
                            have some online video tutorials regarding this
                            issue . If the problem remains, Please Open a ticket
                            in the support forum
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="bg-white mt-3 rounded-md shadow">
                        <h2>
                            <AccordionButton>
                                <Box className="flex-1 text-left font-semibold py-2">
                                    Website response taking time, how to
                                    improve?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            At first, Please check your internet connection . We
                            also have some online video tutorials regarding this
                            issue . If the problem remains, Please Open a ticket
                            in the support forum.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="bg-white mt-3 rounded-md shadow">
                        <h2>
                            <AccordionButton>
                                <Box className="flex-1 text-left font-semibold py-2">
                                    How do I create a account?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            If you want to open an account for personal use you
                            can do it over the phone or online. Opening an
                            account online should only take a few minutes.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};
export default Help;
