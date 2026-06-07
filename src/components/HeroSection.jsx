import React from 'react';
import image from "../assets/blog-bg-inage.png";

export const HeroSection = () => {
  return (
    <div className="hero-section relative">
      <img
        src={image}
        alt="Blog Background"
        className="w-full h-[400px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="blog-heading text-4xl md:text-6xl font-bold text-white">
          Blog Archive
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Explore our collection of articles, insights, and stories crafted to inspire and inform.
        </p>
      </div>
    </div>
  );
};