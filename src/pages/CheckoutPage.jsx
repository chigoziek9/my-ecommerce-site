import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CheckoutPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error loading product:", err));
  }, [productId]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-2">Checkout for: {product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
      {/* You can add payment options, user info, etc. here */}
    </div>
  );
}
