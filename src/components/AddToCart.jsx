import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const showToast = (product) => {
    if (product?.title) {
      toast.success(`${product.title} has been added to your cart!`);
    } else {
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <button
      onClick={() => {
        addToCart(product);
        showToast(product);
      }}
      className="w-full cursor-pointer p-5 text-center bg-black text-white font-semibold hover:bg-blue-800 transition-colors duration-200"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
