/* eslint-disable @next/next/no-page-custom-font */
import CustomerLayout from "components/layouts/Customer";
import { LayoutProps } from "components/layouts/PageWithLayouts";
import Discounts from "components/modules/Customer/Home/Discounts";
import Landing from "components/modules/Customer/Home/Landing";
import Products from "components/modules/Customer/Home/Products";
import { GRAPHQL_URL } from "constant";
import { GetProductsDocument, GetProductsResponse } from "generated/graphql";
import request, { gql } from "graphql-request";
import Head from "next/head";
import React from "react";

export interface IProductsResponse {
  products: GetProductsResponse;
}

const Index: React.FC<IProductsResponse> & { layout: LayoutProps } = ({
  products,
}) => {
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
      <Discounts />
      <Products products={products} />
    </>
  );
};

Index.layout = CustomerLayout;

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

export default Index;
