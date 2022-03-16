/* eslint-disable @next/next/no-page-custom-font */
import CustomerLayout from "components/layouts/Customer";
import { LayoutProps } from "components/layouts/PageWithLayouts";
import Landing from "components/modules/Customer/Landing";
import Head from "next/head";
import React from "react";

const Index: React.FC & { layout: LayoutProps } = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Pickbazar - Modern e-commerce</title>
      </Head>
      <Landing />
    </>
  );
};

Index.layout = CustomerLayout;

export default Index;
