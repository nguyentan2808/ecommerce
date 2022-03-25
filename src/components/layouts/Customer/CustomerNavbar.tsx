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
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "@public/logo.png";
import useI18n from "hooks/useI18n";
import { throttle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShop, AiOutlineWifi } from "react-icons/ai";
import { CgMenuLeft, CgSearch, CgShoppingBag } from "react-icons/cg";
import { FiMenu, FiUser } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { MdOutlineHelpOutline, MdOutlineLocalOffer } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./styles.module.css";

interface IMenuItem {
  name: string;
  href: string;
  icon: IconType;
}
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
        <CgMenuLeft className="text-2xl cursor-pointer" onClick={onOpen} />
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
                    <Icon className="text-xl mr-3" as={item.icon} />
                    {item.name}
                  </a>
                </Link>
              ))}

              <div className="rounded-md hover:bg-teal-500 hover:text-white cursor-pointer">
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

const NavBar: React.FC = () => {
  const router = useRouter();
  const i18n = useI18n();

  const [isHide, setHide] = React.useState(false);
  const [isHideSearch, setHideSearch] = React.useState<boolean>(true);

  const menu: Array<IMenuItem> = [
    {
      name: i18n.navbar.shops,
      href: "/shops",
      icon: AiOutlineShop,
    },
    {
      name: i18n.navbar.offers,
      href: "/",
      icon: MdOutlineLocalOffer,
    },
    {
      name: "FAQ",
      href: "/help",
      icon: MdOutlineHelpOutline,
    },
    {
      name: i18n.navbar.contact,
      href: "/contact",
      icon: AiOutlineWifi,
    },
    {
      name: i18n.navbar.contact,
      href: "/admin/category",
      icon: AiOutlineWifi,
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
              <Image src={logo} height="24px" width="150px" alt="logo" />
            </a>
          </Link>
        ) : (
          <Input />
        )}
        <div className="hidden sm:flex items-center gap-8">
          <Input placeholder={i18n.navbar.search} bg={"white"} w={48} />
          {menu.map((item, index) => (
            <Link key={index} href={item.href}>
              <a className="text-md text-gray-600 hover:text-teal-600">
                {item.name}
              </a>
            </Link>
          ))}
          {/* <LanguageSwitcher /> */}
          <Link href="/login">
            <a>
              <Button colorScheme="teal" onClick={() => router.push("/login")}>
                {i18n.navbar.loginBtn}
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

      <MobileNavBar menu={menu} setHideSearch={setHideSearch} />
    </>
  );
};

export default NavBar;
