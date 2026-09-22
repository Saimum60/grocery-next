"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const ProductItem = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/${params.id}`
      );

      const data = await res.json();

      setProduct(data);
    };

    if (params.id) {
      getProduct();
    }
  }, [params.id]);

  if (!product) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-h-[500px] object-contain"
          />
        </div>

        {/* Details */}
        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

           <div className="flex text-yellow-500 mt-2">

                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < Math.round(product.rating) ? (
                        <FaStar />
                      ) : (
                        <CiStar />
                      )}
                    </span>
                  ))}

                </div>

          <div className="text-3xl font-bold mt-5">
            ${product.price}
          </div>

          <div className="flex gap-5 items-center ">
            
          <Link href='/' className="mt-6 bg-primary text-white px-8 py-3 rounded-md cursor-pointer">
            Add to Cart
          </Link>
          <Link href='/' className="mt-6 bg-primary text-white px-8 py-3 rounded-md cursor-pointer">
           Buy Now
          </Link>
          </div>


        </div>

      </div>

    </div>
  );
};

export default ProductItem;