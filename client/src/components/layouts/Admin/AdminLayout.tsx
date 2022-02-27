// TODO: Split this component

import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import React from "react";
import type { LayoutProps } from "../PageWithLayouts";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const SidebarWithHeader: LayoutProps = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="min-h-screen bg-gray-100">
      <AdminSidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <AdminNavbar onOpen={onOpen} />

      <div className="ml-0 md:ml-64 px-8 py-10">{children}</div>
    </Box>
  );
};

export default SidebarWithHeader;
