import { GRAPHQL_URL } from "constant";
import request, { gql } from "graphql-request";
import Discounts from "./Discounts";
import Landing from "./Landing";
import Products from "./Products";
import { GetProductsDocument } from "generated/graphql";

const Home = () => {
  return (
    <>
      <Landing />
      <Discounts />
      <Products products={[]} />
    </>
  );
};

export default Home;
