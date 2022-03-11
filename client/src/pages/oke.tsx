import axios from "axios";
import React from "react";

interface IProducts {
  products: [];
}

interface IProduct {
  name: string;
  _id: string;
}

const oke: React.FC<IProducts> = ({ products }) => {
  return (
    <div>
      {products.map((product: IProduct) => (
        <div key={product._id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://be-final-mobile.up.railway.app/product"
  );

  return {
    props: {
      products: data?.products,
    },
    revalidate: 10,
  };
}

export default oke;
