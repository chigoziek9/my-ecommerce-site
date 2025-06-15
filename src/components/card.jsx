// import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import AddToFavourites from "./AddToFavourites";

const Card =(product)=> {
  console.log({product})

  return (
    <div className="flex  gap-6 p-6">
      {/* {products.map((product) => ( */}
        <div
          key={product.products.id}
          className="w-[350px] h-[420px] p-5 bg-[#F5F5F5] cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
        >
          <div className="absolute top-2 right-2">
            <AddToFavourites />
          </div>

          <img
            src={product.products.thumbnail}
            alt={product.products.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h1 className="font-semibold">{product.products.title}</h1>
            <h2 className="text-red-400 mb-2">${product.products.price}</h2>
            <h3 className="line-through text-gray-400"> ${product.products.discountPercentage}</h3>
            <p>Ratings: {product.products.rating}</p>
            <AddToCart />
          </div>
        </div>
      {/* ))} */}
    </div>
  );
}

export default Card;
