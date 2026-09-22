"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductSlider = ({ products }) => {


  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6">
          Latest Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">

                {/* Product Title */}
                <h3 className="text-lg font-bold line-clamp-1">
                  {product.title}
                </h3>

                {/* Rating */}
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

                {/* Price */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold">
                    ${product.price}
                  </span>
                </div>

                {/* Button */}
                <Link
                  href={`/productitem/${product.id}`}
                  rel="noopener noreferrer"
                  className="block text-center w-full text-primary border-primary border-2 py-2 rounded-md hover:bg-primary hover:text-white font-bold"
                >
                  Add to Cart
                </Link>

              </div>
            </div>
          ))}

        </div>
        <div className="flex items-center justify-center pt-10">
          <Link href={'/'} className=" border-2 border-primary text-primary text-2xl rounded-2xl px-8 py-2 hover:bg-primary hover:text-white">More</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;