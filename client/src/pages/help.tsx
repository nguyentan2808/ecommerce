import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import useTrans from "hooks/useTrans";
import Head from "next/head";
import React from "react";
import { get } from "lodash";

interface IHelps {
    question: string;
    answer: string;
}

const Help: React.FC = () => {
    const trans = useTrans();
    const [list, setList] = React.useState<IHelps[]>([]);

    React.useEffect(() => {
        const transList = Object.keys(trans.help); // object => array

        let result = [];

        for (let i = 0; i < transList.length; i = i + 2) {
            result.push({ question: transList[i], answer: transList[i + 1] });
        }

        setList(result);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(trans);

    return (
        <>
            <Head>
                <title>Help</title>
            </Head>

            <div className="w-full mx-auto min-h-screen bg-gray-100 px-2 xl:px-60 pb-12">
                <h1 className="w-full text-center pt-12 pb-4 font-bold text-3xl">
                    FAQ
                </h1>

                {list.map((item, index) => (
                    <Accordion key={index} allowMultiple>
                        <AccordionItem className="bg-white mt-3 rounded-md shadow">
                            <h2>
                                <AccordionButton>
                                    <Box className="flex-1 text-left font-semibold py-2 ">
                                        {get(trans.help, item.question)}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {get(trans.help, item.answer)}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </>
    );
};
export default Help;
