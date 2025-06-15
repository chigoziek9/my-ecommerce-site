import React from "react";
import favourites from "../assets/favourites.png";

const AddToFavourites = () => {
  return (
    <button className="flex items-center gap-2 p-2 bg-white hover:bg-gray-100 rounded-md transition-colors duration-200">
      <img src={favourites} alt="Favourites" className="w-6 h-6" />
      <span className="text-sm font-medium text-gray-800"></span>
    </button>
  );
};

export default AddToFavourites;
