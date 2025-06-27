import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function AboutCard({ image, title, text }) {

  useEffect(() => {
          AOS.init();
        }, []);

  return (
    <div className="w-[90%] max-w-sm md:w-70 h-auto mt-6 bg-amber-50 border shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto " data-aos="fade-left">
      <img
        className="w-24 h-24 md:w-30 md:h-30 p-4 mx-auto"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center">{text}</p>
      </div>
    </div>
  );
}
