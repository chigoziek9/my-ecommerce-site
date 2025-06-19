import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-10 max-w-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been confirmed.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
