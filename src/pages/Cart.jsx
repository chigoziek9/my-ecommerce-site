import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import QuantityStepper from "../components/QuantityStepper";
import CheckOutBtn from "../components/ProceedCheckOut";
import Breadcrumb from "../components/Breadcrumb";



export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <>
       <Breadcrumb />

      <div className="flex justify-center items-center h-64">
        <p className="text-center text-2xl text-gray-500">Your cart is empty</p>
      </div>
      </>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Breadcrumb/>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Home / Cart</h1>

      {/* Header Row */}
      <div className="hidden md:grid grid-cols-6 font-semibold text-gray-600 text-sm border-b border-gray-300 pb-3 mb-4 uppercase tracking-wide">
        <h2 className="col-span-2">Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
        <h2 className="text-center">Action</h2>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-6 grid-cols-1 gap-4 border rounded p-4 mb-4 bg-white items-center shadow-sm"
        >
          {/* Product Info */}
          <div className="flex items-center gap-4 col-span-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <span className="font-medium text-gray-800">{item.title}</span>
          </div>

          {/* Price */}
          <div className="text-red-500 font-semibold text-base">
            ${item.price}
          </div>

          {/* Quantity */}
          <div>
            <QuantityStepper product={item} />
          </div>

          {/* Subtotal */}
          <div className="font-bold text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Delete Button */}
          <div className="text-center">
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Total Section */}
      <div className="mt-8 flex justify-end">
        <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Cart Summary</h2>
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total:</span>
            <span className="text-green-600">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
         <CheckOutBtn />
        </div>
      </div>
    </div>
  );
}
