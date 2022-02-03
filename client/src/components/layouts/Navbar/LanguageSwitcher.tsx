import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { HiCheck } from "react-icons/hi";
import { IoLanguageSharp } from "react-icons/io5";
import styles from "./styles.module.css";

const listLanguages = [
    { name: "English", lang: "en" },
    { name: "Tiếng Việt", lang: "vi" },
];

const LanguageSwitcher: React.FC = () => {
    const router = useRouter();

    const [selected, setSelected] = React.useState(() => {
        const lang = router.locale;
        const name = listLanguages.find((item) => item.lang === lang)?.name;
        return name || "en";
    });

    const changeLang = (lang: { name: string; lang: string }) => {
        setSelected(lang.name);
        router.push(router.pathname, router.pathname, { locale: lang.lang });
    };

    return (
        <>
            <Head>
                <title>Pickbazar</title>
            </Head>
            <Menu
                as="div"
                className="relative inline-block md:hover:text-teal-600 md:text-gray-600 w-full md:w-auto"
            >
                <Menu.Button className="flex items-center select-none cursor-pointer relative p-4 md:p-0 w-full">
                    <IoLanguageSharp className="text-xl mr-3 mt-1" />
                    <p className="md:text-lg">{selected}</p>
                </Menu.Button>

                <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-1 ">
                            {listLanguages.map((item, index) => {
                                const isCheck = selected === item.name;

                                return (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => changeLang(item)}
                                                className={`${
                                                    active
                                                        ? "bg-teal-500 text-white"
                                                        : "text-gray-900"
                                                } group flex justify-between rounded items-center w-full px-2 py-2 text-sm`}
                                            >
                                                {item.name}
                                                {isCheck && (
                                                    <HiCheck
                                                        className={`${
                                                            active
                                                                ? "text-white"
                                                                : "text-teal-500"
                                                        } text-xl`}
                                                    />
                                                )}
                                            </button>
                                        )}
                                    </Menu.Item>
                                );
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default LanguageSwitcher;
