import React from "react";

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <button className="w-full max-w-[200px] h-auto sm:h-[200px] border border-gray-600 rounded-xl shadow-md hover:cursor-pointer hover:bg-red-400 hover:text-amber-50 hover:shadow-lg transition duration-300 p-4 text-left">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[80px] object-cover rounded"
      />
      <div className="pt-4 px-2">
        <h1 className="text-sm font-semibold">{title}</h1>
      </div>
    </button>
  );
};

export default CategoryCard;
