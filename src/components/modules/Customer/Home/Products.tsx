/* eslint-disable @next/next/no-img-element */

import { fullSizeUrl } from "components/common/ImageUpload";
import { useRouter } from "next/router";
import { IProductsResponse } from "pages";
import React from "react";

const Products: React.FC<IProductsResponse> = ({ products }) => {
  const router = useRouter();

  return (
    <>
      {/* {isLoading && <Loading isLoading={isLoading} />} */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.list.map((product) => (
              <div key={product.id} className="group relative cursor-pointer ">
                <div className=" w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-80 lg:aspect-none">
                  <img
                    src={fullSizeUrl(product.images[0]?.url)}
                    alt={product.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full scale-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </div>
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 flex">
                      {product?.categories.map((category, index) => (
                        <div className="py-1" key={index}>
                          {category.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text font-medium text-gray-900">
                    {router.locale === "vi"
                      ? product.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })
                      : (product.price / 23000).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
