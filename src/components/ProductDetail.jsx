import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import CheckOutBtn from "./ProceedCheckOut";
import ExploreProducts from "./ExploreProducts";
import ViewProducts from "./ViewProducts";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p className="text-center mt-10 text-xl">Loading product...</p>;
  }

  return (
    <>
      <div className="m-4 md:m-10 bg-gray-200 shadow rounded flex flex-col lg:flex-row p-4 md:p-6 gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md h-64 object-cover rounded"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 px-2 md:px-6 pb-4 md:pb-6">
          <h1 className="text-2xl md:text-4xl font-bold mt-4">{product.title}</h1>
          <h2 className="text-lg md:text-xl mt-1">{product.category}</h2>
          <p className="text-red-500 text-xl md:text-2xl mt-2">${product.price}</p>
          <p className="text-gray-500 line-through text-sm md:text-base">
            ${product.discountPercentage}
          </p>

          <h3 className="text-xl md:text-2xl font-bold mt-4">Product Descriptions</h3>
          <p className="mt-1 text-sm md:text-base">{product.description}</p>

          <div className="mt-4 space-y-1 text-sm md:text-base">
            <p><span className="font-bold">Stock:</span> {product.stock}</p>
            <p><span className="font-bold">Rating:</span> {product.rating}</p>
            <p><span className="font-bold">Brand:</span> {product.brand}</p>
            <p><span className="font-bold">Weight:</span> {product.weight}kg</p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mt-4">Dimensions</h3>
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">Width:</span> {product.dimensions.width}</p>
            <p><span className="font-bold">Height:</span> {product.dimensions.height}</p>
            <p><span className="font-bold">Depth:</span> {product.dimensions.depth}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <AddToCart product={product} />

            <CheckOutBtn productId={product.id} />
          </div>
        </div>
      </div>
    </>
  );
}
