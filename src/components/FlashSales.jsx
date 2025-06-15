import React, { useEffect, useState } from "react";
import Card from "./card";

export default function FlashSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=6&limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  if (products.length === 0) {
    return (
      <p className="flex justify-center items-center text-xl md:text-4xl font-bold py-10">
        Loading...
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0 pb-8 border">
      {products.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
  );
}
