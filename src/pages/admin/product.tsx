import AdminLayout from "components/layouts/Admin";
import Product from "components/modules/Admin/product";
import Head from "next/head";
import React from "react";

const _Product: React.FC & { layout: typeof AdminLayout } = () => {
  return (
    <>
      <Head>
        <title>Admin - Categories</title>
      </Head>

      <Product />
    </>
  );
};

_Product.layout = AdminLayout;

export default _Product;
