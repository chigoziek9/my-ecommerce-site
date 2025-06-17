// src/pages/Home.jsx

import heroImg from "../assets/hero-img.png";
import Card from "../components/card";
import ViewProducts from "../components/ViewProducts";
import CategoryCard from "../components/CategoryCards";
import furniture from "../assets/furniture.jpg";
import laptop from "../assets/laptop.jpg";
import tablet from "../assets/tablet.jpg";
import vehicle from "../assets/vehicle.jpg";
import womenswatch from "../assets/womenswatch.png";
import menswatch from "../assets/menswatch.png";
import AdsImage from "../components/AdsImageComponent";
import Footer from "../components/Footer";
import React from "react";
import FlashSales from "../components/FlashSales";
import BestSelling from "../components/BestSelling";
import ExploreProducts from "../components/ExploreProducts";

export default function Home() {
  return (
    <>
      {/* This is my first image hero image */}
      <div className="p-10 ">
        <div className="flex justify-center items-center mt-7 px-2 md:px-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[1500px] h-auto"
          />
        </div>

        <div className="mt-10 px-2 md:px-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-6 md:w-5 md:h-10 bg-red-400 rounded-xl"></div>
            <h1 className="text-red-500 p-2 md:p-3 text-base md:text-lg">
              Today's
            </h1>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mb-8">
            Flash Sales
          </h1>
        </div>

        {/* This is my group of cards */}
        <div className="flex  justify-center gap-4 pb-8 px-2  sm:p-3">
          <FlashSales />
        </div>

        {/* This is my view products button */}
        <ViewProducts />

        <div className="h-1 w-full bg-[#F5F5F5] my-4 mt-4"></div>

        {/* Category section */}
        <div className="mt-10 px-2 md:px-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-6 md:w-5 md:h-10 bg-red-400 rounded-xl"></div>
            <h1 className="text-red-500 p-2 md:p-3 text-base md:text-lg">
              Categories
            </h1>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mb-8">
            Browse By Category
          </h1>
        </div>
        <div className="flex flex-col border  p-5 lg:flex-row  items-center justify-center gap-4 md:gap-6 lg:gap-8 pb-8 px-2 md:px-4">
          <CategoryCard title="Tablets" imageUrl={tablet} />
          <CategoryCard title="Laptops" imageUrl={laptop} />
          <CategoryCard title="Men's Watches" imageUrl={menswatch} />
          <CategoryCard title="Vehicle" imageUrl={vehicle} />
          <CategoryCard title="Furniture" imageUrl={furniture} />
          <CategoryCard title="Womens Watches" imageUrl={womenswatch} />
        </div>

        <div className="h-1 w-full bg-[#F5F5F5] my-4 mt-8"></div>

        {/* BEST SELLING PRODUCTS */}
        <div className="mt-10">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-10 bg-red-400 rounded-xl"></div>
            <h1 className="text-red-500 p-3">This Month</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Best Selling Products</h1>
            <ViewProducts />
          </div>
        </div>

        <div className="flex  justify-center gap-4 pb-8 px-2S sm:p-3">
          <BestSelling />
        </div>

        {/* ADS IMAGE */}
        <div className="h-1 w-full bg-[#F5F5F5] my-4 mt-8"></div>
        <AdsImage />
        <div className="h-1 w-full bg-[#F5F5F5] my-4 mt-16"></div>

        {/* EXPLORE OUR PRODUCTS */}
        <div className="mt-10">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-10 bg-red-400 rounded-xl"></div>
            <h1 className="text-red-500 p-3">Our Products</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Explore Our Products</h1>
            <ViewProducts />
          </div>
        </div>

        <div className="flex justify-center gap-4 pb-8 mt-8 sm:p-5">
          <ExploreProducts />
        </div>

        <ViewProducts />
        <div className="h-1 w-full bg-[#F5F5F5] my-4 mt-16"></div>

        <div className="mt-10">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-10 bg-red-400 rounded-xl"></div>
            <h1 className="text-red-500 p-3">Featured</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">New Arrival</h1>
          </div>
        </div>
      </div>
    </>
  );
}
