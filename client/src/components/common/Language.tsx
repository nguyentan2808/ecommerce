import useTrans from "hooks/useTrans";
import { useRouter } from "next/router";
import React from "react";
import { HiCheck } from "react-icons/hi";
import { IoLanguageSharp } from "react-icons/io5";
import styles from "./styles.module.css";

const listLanguages = [
    { name: "English", lang: "en" },
    { name: "Tiếng Việt", lang: "vi" },
];

const Language: React.FC = () => {
    const router = useRouter();
    const trans = useTrans();

    const [isHide, setHide] = React.useState(true);
    const [selected, setSelected] = React.useState(() => {
        const lang = router.locale;
        const name = listLanguages.find((item) => item.lang === lang)?.name;
        return name || "en";
    });

    const handleClick = () => {
        setHide(!isHide);
    };

    const changeLang = (lang: { name: string; lang: string }) => {
        setSelected(lang.name);
        router.push("/", "/", { locale: lang.lang });
    };

    return (
        <div
            className="flex items-center select-none cursor-pointer max-w-[74x]"
            onClick={handleClick}
        >
            <IoLanguageSharp className="text-xl mr-2 mt-1" />
            <p className={styles.text}>{selected}</p>

            {/* Popover */}
            {!isHide && (
                <div
                    className={`absolute top-[100%] flex flex-col bg-white border border-gray-300 rounded shadow ${styles.arrow}`}
                >
                    {listLanguages.map((item, index) => {
                        const isCheck = selected === item.name;
                        return (
                            <div
                                key={index}
                                className={`flex items-center hover:bg-gray-200 px-2 py-1 min-w-[10rem] ${
                                    isCheck ? "bg-gray-200" : ""
                                }`}
                                onClick={() => changeLang(item)}
                            >
                                <div className="w-6">
                                    {isCheck ? (
                                        <HiCheck className="text-xl text-teal-500" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {item.name} ({item.lang})
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Language;
