import React from "react";
import { useNavigate } from "react-router-dom"; 


  

export default function CheckoutForm() {
    const navigate = useNavigate();

    const handlePayment = (event) => {
        event.preventDefault(); 
    navigate("/payment");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing Details</h2>
      <form className="space-y-4" onSubmit={handlePayment}>
        {/* First & Last Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="First Name."
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Last Name"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Company Inc."
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="123 Main Street"
            required
          />
        </div>

        {/* Town/City */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Town / City</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Lagos"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="+234 801 234 5678"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* Submit Button */}
       
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition duration-200"
          >
            Continue to Payment
          </button>
   </form>
    </div>
  );
}
