import React from "react";
import AddToCart from "./AddToCart";
import AddToFavourites from "./AddToFavourites";
import { useNavigate } from "react-router-dom";

const Card = ({ products, onAddToCart}) => {
  const navigate = useNavigate();

 

  return (
    <div className="flex gap-6 p-6">
      <div>
        <div
          key={products.id}
          onClick={() => navigate(`/product/${products.id}`)}
          className="w-[350px] h-[420px] p-5 bg-[#F5F5F5] cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
        >
          <div className="absolute top-2 right-2">
            <AddToFavourites />
          </div>

          <img
            src={products.thumbnail}
            alt={products.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h1 className="font-semibold">{products.title}</h1>
            <h2 className="text-red-400 mb-2">${products.price}</h2>
            <h3 className="line-through text-gray-400">
              ${products.discountPercentage}
            </h3>
            <p>Ratings: {products.rating}</p>
          </div>
        </div>
         <AddToCart product={products} onAdd={onAddToCart} />
      </div>
    </div>
  );
};

export default Card;
