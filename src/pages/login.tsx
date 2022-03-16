import CustomerLayout from "components/layouts/Customer";
import Login from "components/modules/Customer/Login";
import Head from "next/head";
import React from "react";

const _Login: React.FC & { layout: typeof CustomerLayout } = () => {
  return (
    <>
      <Head>
        <title>Login - Pickbazar</title>
      </Head>

      <Login />
    </>
  );
};

_Login.layout = CustomerLayout;

export default _Login;
