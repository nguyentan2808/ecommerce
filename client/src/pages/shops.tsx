import CustomerLayout from "components/layouts/Customer";
import Shops from "components/modules/Customer/Shops";
import Head from "next/head";
import React from "react";

const _Shops: React.FC & { layout: typeof CustomerLayout } = () => {
  return (
    <>
      <Head>
        <title>Shops</title>
      </Head>

      <Shops />
    </>
  );
};

_Shops.layout = CustomerLayout;

export default _Shops;
