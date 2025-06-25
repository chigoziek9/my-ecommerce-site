import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import bankcards from "../assets/bankcards.png";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


export default function PaymentPage() {
  const navigate = useNavigate();

  const handlePurchase = (event) => {
    event.preventDefault();
    navigate("/purchaseSuccess");
  };

  const { cartItems } = useContext(CartContext);
  console.log({ cartItems });

  if (cartItems.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No items in cart.</p>;
  }
  const total = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <>
     <Breadcrumb />
      <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
        <h1 className="text-4xl text-center font-bold mb-6">Payment Page</h1>
        {cartItems.map((product) => (
          <div
            key={product.id}
            className="grid md:grid-cols-6 grid-cols-1 gap-4  p-4  bg-white items-center shadow-sm"
          >
            {/* Image */}
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-20 h-20 "
              />
            </div>

            {/* Title - span across 4 columns on desktop */}
            <div className="md:col-span-4">
              <h2 className=" font-light mb-2">{product.title}</h2>
            </div>

            {/* Price aligned right */}
            <div className="text-right">
              <p className=" text-gray-700 mb-1">${product.price}</p>
            </div>
          </div>
        ))}
        {/* Sub Total */}
        {/* Total Amount */}
        <div className="mt-6 flex justify-between items-center ">
          <div>
            <h1 className="text-2xl font-medium">Subtotal :</h1>
          </div>
          <div>
            <h3 className="text-xl font-bold text-right ">
              ${total.toFixed(2)}
            </h3>
          </div>
        </div>
        <div className="mt-6 items-center border-b"></div>
        <div className="mt-6 flex justify-between items-center ">
          <div>
            <h1 className="text-2xl font-medium">Shipping :</h1>
          </div>
          <div>
            <h3 className="text-xl font-bold text-right ">Free</h3>
          </div>
        </div>
        {/* Bank and cash on delivery */}
        <div className="space-y-4">
          {/* Bank Option */}
          <label className="flex justify-between items-center cursor-pointer mt-9">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                className="w-5 h-5 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 rounded-full"
              />
              <span className="text-gray-700">Bank</span>
            </div>
            <img src={bankcards} alt="Bank Cards" className="w-80 h-auto" />
          </label>

          {/* Cash on Delivery Option */}
          <label className="flex items-center space-x-3 cursor-pointer mt-9">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              className="w-5 h-5 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 rounded-full"
            />
            <span className="text-gray-700">Cash on Delivery</span>
          </label>
        </div>
        

        <div className="mt-9 flex justify-center">
          <button
            type="submit"
            className="px-30 py-6 bg-red-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={handlePurchase}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
