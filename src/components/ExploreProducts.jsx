import React, { useEffect, useState } from "react";
import Card from "./card";

export default function ExploreProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=9&limit=9")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  if (products.length === 0) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold">
        Loading...
      </p>
    );
  }

  return (
    <div className="flex gap-4 pb-8 border justify-center flex-wrap">
      {products.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
  );
}
