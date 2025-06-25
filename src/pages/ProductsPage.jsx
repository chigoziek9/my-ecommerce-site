import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Breadcrumb from "../components/Breadcrumb";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  

  
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
         
        });
    }
  ,[]);

  if (products.length === 0) {
    return (
      <p className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold h-40">
        Loading...
      </p>
    );
  }

  return (
    <>
     <Breadcrumb />
    <div className="flex justify-center flex-wrap gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 pb-8">
      {products.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
    </>
  );
}
