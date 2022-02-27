// TODO: Split this component

import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import logo from "@public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";

interface MobileProps {
  onOpen: () => void;
}

const AdminNavbar = ({ onOpen }: MobileProps) => {
  return (
    <div className="sticky top-0 w-full flex justify-between items-center h-[var(--navbar-height)] px-4 bg-white border-b border-b-gray-200 ">
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        display={{ base: "flex", md: "none" }}
      />

      <Link href="/">
        <a>
          <Image src={logo} height="24px" width="150px" alt="logo" />
        </a>
      </Link>

      <div className="flex items-center gap-2">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <div className="items-center">
          <Menu>
            <MenuButton py={2}>
              <div className="flex items-center justify-center">
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <div className="hidden md:flex flex-col items-start mx-2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </div>

                <FiChevronDown className="hidden md:block" />
              </div>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
