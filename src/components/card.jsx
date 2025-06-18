import React from "react";
import AddToCart from "./AddToCart";
import AddToFavourites from "./AddToFavourites";
import { useNavigate } from "react-router-dom";

const Card = ({ products, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-4 sm:p-6">
      <div>
        <div
          key={products.id}
          onClick={() => navigate(`/product/${products.id}`)}
          className="w-[280px] sm:w-[300px] md:w-[350px] h-[400px] sm:h-[420px] p-4 bg-[#F5F5F5] cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
        >
          {/* Favorite Icon */}
          <div className="absolute top-2 right-2 z-10">
            <AddToFavourites />
          </div>

          {/* Product Image */}
          <img
            src={products.thumbnail}
            alt={products.title}
            className="w-full h-40 sm:h-48 object-cover rounded"
          />

          {/* Product Info */}
          <div className="p-2 sm:p-4 text-sm sm:text-base">
            <h1 className="font-semibold line-clamp-1">{products.title}</h1>
            <h2 className="text-red-400 mb-1">${products.price}</h2>
            <h3 className="line-through text-gray-400 text-sm">
              ${products.discountPercentage}
            </h3>
            <p className="text-gray-700 text-sm">Ratings: {products.rating}</p>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-2 flex justify-center">
          <AddToCart product={products} onAdd={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Card;
