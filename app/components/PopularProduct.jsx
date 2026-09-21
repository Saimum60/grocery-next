"use client";

import React, { useContext, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { ApiData } from "../contex/ApiContex";
import ProductSlider from './ProductSlider'

const PopularProduct = () => {

  // Categories
  const categories = [
    "All",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
  ];

  // Active tab
  const [value, setValue] = useState(0);

  const [activeTab, setActiveTab] = useState("All");

  // Get API data from Context
  const products = useContext(ApiData);

  // Tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);

    setActiveTab(categories[newValue]);
  };

  // Filter products
  const filteredItems =
    activeTab === "All"
      ? products
      : products.filter(
          (item) => item.category === activeTab
        );

  return (
    <section className="bg-white py-6">

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center">

          {/* Left */}
          <div className="w-[30%]">

            <h2 className="text-[24px] text-gray-800 font-bold">
              Popular Product
            </h2>

            <p className="text-[16px] text-gray-500 font-semibold">
              Do not miss the current offers
            </p>

          </div>

          {/* Right */}
          <div className="w-[70%] text-2xl flex items-center justify-end">

            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="product categories"
            >

              {categories.map((category) => (

                <Tab
                  key={category}
                  label={category}
                />

              ))}

            </Tabs>

          </div>

        </div>

        {/* Products */}
       <ProductSlider  products={filteredItems} />

      </div>

    </section>
  );
};

export default PopularProduct;