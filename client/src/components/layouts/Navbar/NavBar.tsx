import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    useDisclosure,
} from "@chakra-ui/react";
import logo from "@public/logo.png";
import useTrans from "hooks/useTrans";
import { throttle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShop, AiOutlineWifi } from "react-icons/ai";
import { CgMenuLeft, CgSearch, CgShoppingBag } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { MdOutlineHelpOutline, MdOutlineLocalOffer } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";

import styles from "./styles.module.css";
import LanguageSwitcher from "./LanguageSwitcher";

interface IMobileNavbarProps {
    menu: Array<IMenuItem>;
    setHideSearch: (value: React.SetStateAction<boolean>) => void;
}

const MobileNavBar = ({ menu, setHideSearch }: IMobileNavbarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <div className="p-4 fixed bottom-0 w-full bg-white flex sm:hidden justify-between items-center border-t border-gray-100 z-10 shadow-mui-3">
                <CgMenuLeft
                    className="text-2xl cursor-pointer"
                    onClick={onOpen}
                />
                <CgSearch
                    className="text-2xl cursor-pointer"
                    onClick={() => setHideSearch((prev) => !prev)}
                />
                <RiHome2Line className="text-2xl cursor-pointer" />
                <CgShoppingBag className="text-2xl cursor-pointer" />
                <FiUser className="text-2xl cursor-pointer" />
            </div>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef.current}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Box className="flex flex-col">
                            {menu.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <a
                                        className="flex items-center p-4 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer"
                                        onClick={onClose}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                </Link>
                            ))}

                            <div className="p-4 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer">
                                <LanguageSwitcher />
                            </div>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

interface IMenuItem {
    name: string;
    href: string;
    icon: any;
}

const NavBar: React.FC = () => {
    const router = useRouter();
    const trans = useTrans();

    const [isHide, setHide] = React.useState(false);
    const [isHideSearch, setHideSearch] = React.useState<boolean>(true);

    const menu: Array<IMenuItem> = [
        {
            name: trans.navbar.shops,
            href: "/",
            icon: <AiOutlineShop className="text-xl mr-3" />,
        },
        {
            name: trans.navbar.offers,
            href: "/",
            icon: <MdOutlineLocalOffer className="text-xl mr-3" />,
        },
        {
            name: "FAQ",
            href: "/help",
            icon: <MdOutlineHelpOutline className="text-xl mr-3" />,
        },
        {
            name: trans.navbar.contact,
            href: "/contact",
            icon: <AiOutlineWifi className="text-xl mr-3" />,
        },
    ];

    const handleHideNavbar = throttle(() => {
        setHide(!isHide);
    }, 200);

    return (
        <>
            <header
                className={`py-4 w-full sticky top-0 border-b shadow flex justify-center sm:justify-between items-center px-4 z-10 h-[var(--navbar-height)] ease-linear duration-200 ${
                    styles.navbar_bg
                } ${isHide ? styles.hide : ""}`}
            >
                {isHideSearch ? (
                    <Link href="/">
                        <a>
                            <Image
                                src={logo}
                                height="24px"
                                width="150px"
                                alt="logo"
                            />
                        </a>
                    </Link>
                ) : (
                    <Input />
                )}
                <div className="hidden sm:flex items-center gap-8">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <a className="text-lg opacity-70">{item.name}</a>
                        </Link>
                    ))}

                    {/* <Languages /> */}
                    <LanguageSwitcher />

                    <Link href="/login">
                        <a>
                            <Button
                                colorScheme="teal"
                                onClick={() => router.push("/login")}
                            >
                                {trans.navbar.loginBtn}
                            </Button>
                        </a>
                    </Link>
                </div>

                {/* <div
                    className={`absolute top-[100%] shadow z-11 left-0 p-3 cursor-pointer rounded-br-md select-none ${styles.navbar_bg}`}
                    onClick={handleHideNavbar}
                >
                    <FiMenu className="text-xl" />
                </div> */}
            </header>

            <MobileNavBar menu={menu} setHideSearch={setHideSearch} />
        </>
    );
};

export default NavBar;
