import React, { useEffect, useState } from "react";
import Card from "./card";

export default function ExploreProducts() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // Step 1: Try to get products from localStorage
    const storedProducts = localStorage.getItem("exploreProducts");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // Step 2: Fetch and store if not already saved
      fetch("https://dummyjson.com/products?skip=9&limit=9")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          localStorage.setItem("exploreProducts", JSON.stringify(data.products));
        });
    }
  }, []);

  if (products.length === 0) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold">
        Loading...
      </p>
    );
  }

  return (
    <div className="flex gap-4 pb-8 justify-center flex-wrap">
      {products.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
  );
}
