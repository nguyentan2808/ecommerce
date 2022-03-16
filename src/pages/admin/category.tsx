import React from "react";
import Category from "components/modules/Admin/category";
import AdminLayout from "components/layouts/Admin";
import { LayoutProps } from "components/layouts/PageWithLayouts";

const _Category: React.FC & { layout: LayoutProps } = () => {
  return <Category />;
};

_Category.layout = AdminLayout;

export default _Category;
