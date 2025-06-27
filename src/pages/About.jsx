// src/pages/About.jsx
import SideImage from "../assets/SideImage.png";
import AboutCard from "../components/AboutCard";
import AboutImage from "../components/AboutImage";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import Services4 from "../assets/Services4.png";
import Aboutimg1 from "../assets/Aboutimg1.png";
import Aboutimg2 from "../assets/Aboutimg2.png";
import Aboutimg3 from "../assets/Aboutimg3.png";
import Breadcrumb from "../components/Breadcrumb";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {
   useEffect(() => {
        AOS.init();
      }, []);
  const cards = [
    {
      title: "10.5K",
      text: "Sellers Active On Our Site.",
      image: Services1,
    },
    {
      title: "33K",
      text: "Monthly Product Sale",
      image: Services2,
    },
    {
      title: "45.5K",
      text: "Customers Active On Our Site",
      image: Services3,
    },
    {
      title: "25K",
      text: "Annual Gross Sale On Our Site",
      image: Services4,
    },
  ];

  const cards2 = [
    {
      title: "Tom Cruise",
      text: "Founder & Chairman",
      image: Aboutimg1,
    },
    {
      title: "Emma Watson",
      text: "Managing Director",
      image: Aboutimg2,
    },
    {
      title: "Will Smith",
      text: "Product Designer",
      image: Aboutimg3,
    },
  ];

  return (
    <div className="px-4 md:px-10 py-8 pb-30 pt-20 mt-30" data-aos="fade-up " >
      {/* Breadcrumb Section */}
      <Breadcrumb />
      {/* Our Story Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10" data-aos="fade-up">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-gray-800">
          <h1 className="font-extrabold text-3xl md:text-5xl">Our Story</h1>
          <p className="mt-6 text-base md:text-lg">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Exclusive has more than 1 million products to offer, growing very
            fast in the commercial world. Exclusive offers a diverse assortment in categories ranging
            from consumer electronics to fashion and household items.We are the best at what we do.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img src={SideImage} alt="About" className="w-full max-w-md rounded-lg" />
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 " data-aos="fade-up">
        {cards.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}

          />
        ))}
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12" data-aos="fade-right">
        {cards2.map((card1, index) => (
          <AboutImage
            key={index}
            title={card1.title}
            text={card1.text}
            image={card1.image}
          />
        ))}
      </div>
    </div>
  );
}
