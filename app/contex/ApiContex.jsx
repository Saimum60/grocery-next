"use client";

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiData = createContext([]);

const ApiContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  const api = axios.create({
    baseURL: "https://dummyjson.com",
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <ApiData.Provider value={products}>
      {children}
    </ApiData.Provider>
  );
};

export default ApiContext;