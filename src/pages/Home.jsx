import React from "react";
import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Features from "../components/Home/Features";
import CategoryItems from "../components/Home/Categories/CategoryItems";
import DiscountSection from "../components/Home/Discount/DiscountSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <div className="container mx-auto px-4">
        <Features />
        <CategoryItems />
        <DiscountSection />
      </div>
    </div>
  );
}
