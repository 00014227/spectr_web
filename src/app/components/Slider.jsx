"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const CaseSlider = () => {
  const slides = [
    { title: "SESE Botanics", type: "[CLIENT WORK]", image: "/logo/lacoste.webp" },
    { title: "Third", type: "[CLIENT WORK]", image: "/logo/uskudar.webp" },
    { title: "Custo", type: "[CLIENT WORK]", image: "/logo/lascala.webp" },
    { title: "OWATER", type: "[CLIENT WORK]", image: "/logo/decor.webp" },
    { title: "Anker", type: "[PERSONAL]", image: "/logo/levis.webp" },
    { title: "SESE Botanics", type: "[CLIENT WORK]", image: "/logo/hill.webp" },
    { title: "Third", type: "[CLIENT WORK]", image: "/logo/fcn.webp" },
    { title: "Custo", type: "[CLIENT WORK]", image: "/logo/pyramids.webp" },
    { title: "OWATER", type: "[CLIENT WORK]", image: "/logo/jeans.webp" },
    { title: "Anker", type: "[PERSONAL]", image: "/logo/jeans.webp" },
    { title: "OWATER", type: "[CLIENT WORK]", image: "/logo/decor.webp" },
    { title: "Anker", type: "[PERSONAL]", image: "/logo/levis.webp" },
    { title: "SESE Botanics", type: "[CLIENT WORK]", image: "/logo/hill.webp" },
  ];

  return (
    <div className="relative w-full h-[60vh] bg-black">
      <Swiper
        modules={[Navigation, Mousewheel]}
        centeredSlides={true}
        spaceBetween={0}
        mousewheel={true}
        loop={true}
        className="h-full"
        breakpoints={{
          320: {
            slidesPerView: 1, // For very small screens
          },
          640: {
            slidesPerView: 2, // For small screens
          },
          768: {
            slidesPerView: 3, // For medium screens
          },
          1024: {
            slidesPerView: 8.5, // For large screens
          },
          1440: {
            slidesPerView: 11, // For extra-large screens
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center transition-transform duration-1000"
          >
            <div className=" w-fit">
              <h2 className="text-sm  font-bold text-red-600">{slide.title}</h2>
              <p className="text-sm text-gray-300">{slide.type}</p>
            </div>
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg relative swiper-slide-content">
              <Image
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
                width={300}
                height={400}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide-content {
          transition: transform 0.8s ease, top 0.8s ease;
        }
        .swiper-slide-active .swiper-slide-content {
          transform: scale(0.7);
          top: -20px;
          z-index: 10;
        }
        .swiper-slide:not(.swiper-slide-active) .swiper-slide-content {
          transform: scale(0.5);
          top: -60px;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default CaseSlider;
