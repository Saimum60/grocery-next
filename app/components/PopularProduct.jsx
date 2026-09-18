"use client";

import { Tab, Tabs } from "@mui/material";
import React from "react";
import ProductSlider from './ProductSlider'

const PopularProduct = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-4">
      <div className="container">
        <div className="flex items-center justify-center">

          <div className="col1 w-[30%]">
            <h2 className="text-[20px] text-gray-800 font-[600]">
              Popular Product
            </h2>

            <p className="text-[16px] text-gray-500 font-[600]">
              Do not miss the current offers
            </p>
          </div>

          <div className="col2 w-[70%] flex items-center justify-end">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="product categories"
            >
              <Tab label="Breads & Bakery" />
              <Tab label="Breakfast & Dairy" />
              <Tab label="Meats & Seafood" />
              <Tab label="Fruits & Vegetables" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
              <Tab label="Breads & Bakery" />
              <Tab label="Breakfast & Dairy" />
             
            </Tabs>
          </div>

        </div>

        <ProductSlider/>
      </div>
    </section>
  );
};

export default PopularProduct;