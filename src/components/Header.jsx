import React from "react";
import Logo from "../assets/blog-logo-img.png";

export const Header = ({search, setSearch}) => {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Blogs Logo"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Smart Blogs
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-700 transition"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};