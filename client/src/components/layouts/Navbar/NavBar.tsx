import { Button, Input } from "@chakra-ui/react";
import logo from "@public/logo.png";
import useTrans from "hooks/useTrans";
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
import { FiMenu } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { toast } from "react-toastify";
import Languages from "./LanguageSwitcher";
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
    const trans = useTrans();

    const menu = [
        { name: trans.navbar.shops, href: "/" },
        { name: trans.navbar.offers, href: "/" },
        { name: "FAQ", href: "/help" },
        { name: trans.navbar.contact, href: "/contact" },
    ];

    const handleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toast.success("This feature is in development", {
            icon: "🚀",
        });
    };

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
                <div className="hidden sm:flex items-center gap-8">
                    <Input
                        variant="outline"
                        placeholder={trans.navbar.search}
                        bg={"white"}
                        w={48}
                    />

                    {/* <IconButton
                        onClick={handleDarkMode}
                        colorScheme={"black"}
                        variant={"ghost"}
                        aria-label="toggle-dark-mode"
                        icon={<BsFillMoonStarsFill />}
                    /> */}

                    {menu.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <a className="text-lg opacity-70">{item.name}</a>
                        </Link>
                    ))}

                    <Languages />

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
                                {trans.navbar.loginBtn}
                            </Button>
                        </a>
                    </Link>
                </div>

                <div
                    className={`absolute top-[100%] shadow z-11 left-0 p-3 cursor-pointer rounded-br-md select-none ${styles.navbar_bg}`}
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
