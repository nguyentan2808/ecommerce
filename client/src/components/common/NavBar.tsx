import { Button, IconButton, Input } from "@chakra-ui/react";
import { throttle } from "lodash";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
    BiCart,
    BiHomeSmile,
    BiMenuAltLeft,
    BiSearchAlt,
} from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { toast } from "react-toastify";
import logo from "../../../public/logo.png";
import styles from "./styles.module.css";

const MobileNavBar = () => {
    return (
        <div className="p-3 fixed bottom-0 w-full flex bg-white justify-between border-t border-gray-400 shadow-md z-10">
            <BiMenuAltLeft className="text-3xl" />
            <BiSearchAlt className="text-3xl" />
            <BiHomeSmile className="text-3xl" />
            <BiCart className="text-3xl" />
            <MdOutlineAccountCircle className="text-3xl" />
        </div>
    );
};
const NavBar: React.FC = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [isHide, setHide] = React.useState(false);

    const handleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toast.success("This feature is in development", {
            icon: "🚀",
        });
    };

    const handleHideNavbar = throttle(() => {
        setHide(!isHide);
    }, 200);

    React.useEffect(() => {});

    return (
        <>
            <header
                className={`py-4 w-full sticky top-0 border-b shadow flex justify-center sm:justify-between items-center px-4 z-10 h-[var(--navbar-height)] ease-linear duration-200 ${
                    styles._navbar
                } ${isHide ? styles._hide : ""}`}
            >
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
                <div className="hidden sm:flex gap-8 items-center ">
                    <Input
                        variant="outline"
                        placeholder="Search"
                        // className="shadow"
                        bg={"white"}
                    />

                    <IconButton
                        onClick={handleDarkMode}
                        colorScheme={"black"}
                        variant={"ghost"}
                        aria-label="toggle-dark-mode"
                        icon={<BsFillMoonStarsFill />}
                    />

                    <Link href="/contact">
                        <a className="text-lg opacity-70">Shops</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-lg opacity-70">Offers</a>
                    </Link>
                    <Link href="/help">
                        <a className="text-lg opacity-70">FAQ</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-lg opacity-70">Contact</a>
                    </Link>
                    {/* <Menu>
                        <MenuButton>
                            <Avatar
                                size="sm"
                                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Link 1</MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu> */}
                    <Link href="/login">
                        <a>
                            <Button
                                colorScheme="teal"
                                onClick={() => router.push("/login")}
                            >
                                Join
                            </Button>
                        </a>
                    </Link>
                </div>

                <div
                    className={`absolute top-[100%] shadow z-11 left-0 p-3 rounded cursor-pointer rounded-t-none select-none ${styles._navbar}`}
                    onClick={handleHideNavbar}
                >
                    <FiMenu className="text-xl" />
                </div>
            </header>

            <div className="block sm:hidden">
                <MobileNavBar />
            </div>
        </>
    );
};
export default NavBar;