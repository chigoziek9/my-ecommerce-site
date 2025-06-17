import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
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
      <div className="m-10 bg-gray-200 shadow rounded flex flex-row p-6 ">
        <div className="max-w-xl mx-auto mt-10 p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover rounded"
          />
        </div>

        <div className="max-w-xl mx-auto px-6 pb-6 bg-gray-200">
          <h1 className="text-4xl font-bold mt-4">{product.title}</h1>
          <h1 className="text-xl">{product.category}</h1>
          <p className="text-red-400 text-2xl mt-2">${product.price}</p>
          <p className="text-gray-500 line-through">
            ${product.discountPercentage}
          </p>
          <h1 className="text-2xl font-bold">Product Descriptions</h1>
          <p className="mt-1">{product.description}</p>
          <h1 className="mt-4 font-bold">
            Stock: <span className="font-normal">{product.stock}</span>
          </h1>
          <h1 className="font-bold">
            Rating:<span className="font-normal">{product.rating}</span>{" "}
          </h1>
          <h1 className="font-bold">
            Brand: <span className="font-normal">{product.brand}</span>{" "}
          </h1>
          <h1 className="font-bold">
            Weight: <span className="font-normal">{product.weight}</span>kg
          </h1>
          <h1 className="text-2xl font-bold mt-2">Dimensions</h1>
          <h1 className="font-bold">
            Width:{" "}
            <span className="font-normal">{product.dimensions.width}</span>
          </h1>
          <h1 className="font-bold">
            Height:
            <span className="font-normal">{product.dimensions.height}</span>
          </h1>
          <h1 className="font-bold">
            Depth:{" "}
            <span className="font-normal">{product.dimensions.depth}</span>
          </h1>
          <div className="mt-4 flex gap-4">
            <AddToCart productId={product.id} />
          </div>

          <div className="mt-4 flex gap-4">
            <CheckOutBtn productId={product.id} />
          </div>
        </div>
      </div>
    </>
  );
}
