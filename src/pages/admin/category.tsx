import AdminLayout from "components/layouts/Admin";
import Category from "components/modules/Admin/category";
import React from "react";

const _Category: React.FC & { layout: typeof AdminLayout } = () => {
  return <Category />;
};

_Category.layout = AdminLayout;

export default _Category;
