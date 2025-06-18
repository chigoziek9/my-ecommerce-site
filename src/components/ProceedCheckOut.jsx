import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOutBtn({ productId }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the checkout page
   navigate(`/checkout/${productId}`);

  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full sm:w-auto bg-green-600 text-white font-semibold px-22 mt-3 py-3 rounded hover:bg-green-700 transition-colors duration-200"
    >
      Proceed to Checkout
    </button>
  );
}
