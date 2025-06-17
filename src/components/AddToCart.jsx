import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        addToCart(product);
        alert(`${product.title} has been added to the cart.`);
      }}
      className="w-full cursor-pointer p-5 text-center bg-black text-white font-semibold hover:bg-blue-800 transition-colors duration-200"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
