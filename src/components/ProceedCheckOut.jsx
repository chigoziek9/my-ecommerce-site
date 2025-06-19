import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Required import

export default function CheckOutBtn() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full sm:w-auto bg-green-600 text-white font-semibold px-6 mt-3 py-3 rounded hover:bg-green-700 transition-colors duration-200"
    >
      Proceed to Checkout
    </button>
  );
}
