import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function QuantityStepper({ product }) {
  const { cartItems, updateQuantity } = useContext(CartContext);

  const currentQuantity = cartItems.find((item) => item.id === product.id)?.quantity || 1;

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(product.id, currentQuantity + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-md shadow-sm"
      >
        −
      </button>

      <input
        type="number"
        value={currentQuantity}
        readOnly
        className="w-12 text-center border border-gray-300 rounded-md text-base py-1"
      />

      <button
        onClick={handleIncrease}
        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-md shadow-sm"
      >
        +
      </button>
    </div>
  );
}
