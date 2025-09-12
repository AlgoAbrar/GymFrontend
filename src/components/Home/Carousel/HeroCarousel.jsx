import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import caraousel1 from "../../../assets/images/caraousel1.png";
import caraousel2 from "../../../assets/images/caraousel2.png";
import caraousel3 from "../../../assets/images/caraousel3.png";

export default function HeroCarousel() {
  return (
    <Swiper loop={true} autoplay={{ delay: 1000 }}>
      {[caraousel1, caraousel2, caraousel3].map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-4">
                Transform Your Fitness
              </h2>
              <p className="max-w-xl text-gray-300">
                Join AlgoFit today and access world-class trainers, classes, and
                membership plans tailored for you.
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
