import CustomerLayout from "components/layouts/Customer";
import Help from "components/modules/Customer/Help";
import Head from "next/head";
import React from "react";

const _Help: React.FC & { layout: typeof CustomerLayout } = () => {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>

      <Help />
    </>
  );
};

_Help.layout = CustomerLayout;

export default _Help;
