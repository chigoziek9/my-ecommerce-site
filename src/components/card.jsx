
import AddToCart from "./AddToCart";
import AddToFavourites from "./AddToFavourites";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



  
const Card = ({ products}) => {
  const navigate = useNavigate();
     useEffect(() => {
        AOS.init();
      }, []);


  return (
    <div className="flex justify-center p-4 sm:p-6 " data-aos="fade-left">
      <div>
        <div
          key={products.id}
          onClick={() => navigate(`/product/${products.id}`)}
          className="w-[200px] sm:w-[200px] md:w-[200px] h-[300px] sm:h-[300px] p-4 bg-[#F5F5F5] cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
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
       
      </div>
    </div>
  );
};

export default Card;
