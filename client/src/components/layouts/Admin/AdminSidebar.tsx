import {
  Box,
  BoxProps,
  CloseButton,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";
import { BiCategoryAlt } from "react-icons/bi";
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface NavItemProps {
  icon: IconType;
  children: string;
  selected: string;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Category", icon: BiCategoryAlt },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
  { name: "Home1", icon: FiHome },
  { name: "Trending1", icon: FiTrendingUp },
  { name: "Product", icon: FiCompass },
  { name: "Favourites1", icon: FiStar },
  { name: "Settings1", icon: FiSettings },
];
const AdminSidebar = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    const path = router.pathname;
    const selected = path.split("/")[2];
    setSelected(selected);
  }, [router.pathname]);

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 64 }}
        className="h-full fixed top-0 md:top-[var(--navbar-height)]"
        {...rest}
      >
        <div className="h-20 flex md:hidden items-center justify-between mx-8">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Menu
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </div>
        <div className="py-2 max-h-[calc(100vh-var(--navbar-height))] overflow-auto">
          {LinkItems.map((link) => (
            <NavItem
              href={link.name.toLowerCase()}
              key={link.name}
              icon={link.icon}
              selected={selected}
            >
              {link.name}
            </NavItem>
          ))}
        </div>
      </Box>
    </>
  );
};

const NavItem = ({ icon, children, selected, href }: NavItemProps) => {
  return (
    <Link href={{ pathname: `/admin/${href}` }}>
      <a
        className={`transition-all duration-200 flex items-center text-sm p-3 mx-2 rounded-md cursor-pointer text-gray-600 hover:bg-teal-500 hover:text-white ${
          selected === href ? "bg-teal-500 text-white" : ""
        }`}
      >
        {icon && <Icon as={icon} className="mr-4 text-md hover:text" />}
        {children}
      </a>
    </Link>
  );
};

export default AdminSidebar;
