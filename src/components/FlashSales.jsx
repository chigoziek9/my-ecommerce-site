import React, { useEffect, useState } from "react";
import Card from "./card";

export default function FlashSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("exploreProducts");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      fetch("https://dummyjson.com/products?skip=8&limit=8")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          localStorage.setItem("exploreProducts", JSON.stringify(data.products));
        });
    }
  }, []);

  if (products.length === 0) {
    return (
      <p className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold h-40">
        Loading...
      </p>
    );
  }

  return (
    <div className="flex justify-center flex-wrap gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 pb-8">
      {products.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
  );
}
