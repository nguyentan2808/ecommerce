/* eslint-disable @next/next/no-page-custom-font */
import CustomerLayout from "components/layouts/Customer";
import { LayoutProps } from "components/layouts/PageWithLayouts";
import Home from "components/modules/Customer/Home";
import { GRAPHQL_URL } from "constant";
import { GetProductsDocument } from "generated/graphql";
import request, { gql } from "graphql-request";
import Head from "next/head";
import React from "react";

const _Index: React.FC & { layout: LayoutProps } = ({ products }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Pickbazar - Modern e-commerce</title>
      </Head>

      <Home />
    </>
  );
};

_Index.layout = CustomerLayout;

export async function getStaticProps() {
  const query = gql`
    ${GetProductsDocument}
  `;
  const { products } = await request(GRAPHQL_URL, query, {
    page: 1,
    limit: 10,
  });

  return { props: { products } };
}

export default _Index;
