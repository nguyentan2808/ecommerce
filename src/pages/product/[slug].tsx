import { GetStaticPropsContext } from "next";

function Product({ params }: { params: any }) {
  return (
    <div>
      Product <h3>{params?.name}</h3>
    </div>
  );
}

export async function getStaticPaths() {
  console.log("call");
  return {
    paths: [
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const products = await fetch("https://be-final-mobile.up.railway.app/product")
    .then((res) => res.json())
    .then((res) => res.products);
  const product = products[Number(params?.slug) - 1];
  return {
    props: {
      params: product,
    },
    revalidate: 60,
  };
}

export default Product;
