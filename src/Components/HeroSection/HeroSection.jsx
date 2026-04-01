import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-linear-to-r from-[#2b1e14] via-[#3a2a1f] to-[#2b1e14] text-center py-30">
          <p className="md:text-lg tracking-[0.3em] text-[#c9a86a] mb-4 uppercase">
            Curated Living Essentials
          </p>

          <h1 className="text-4xl md:text-7xl font-cormorant text-white mb-4">
            Transform Your <span className="text-[#c9a86a] italic">Space</span>
          </h1>

          <p className="md:text-lg font-jost text-gray-300 mb-8">
            Handpicked furniture, lighting & decor for the modern home
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="w-65 md:w-[320px] px-5 py-3 rounded-full bg-transparent border border-[#c9a86a]/40 text-white placeholder-gray-400 focus:outline-none"
            />

            <select className="w-65 md:w-[320px] px-5 py-3 rounded-full bg-transparent border border-[#c9a86a]/40 text-white focus:outline-none">
              <option className="text-black">Sort by Default</option>
              <option className="text-black">Price Low to High</option>
              <option className="text-black">Price High to Low</option>
            </select>
          </div>
        </div>

        <div className="bg-[#c9a86a] text-[#2b1e14] py-4 px-4 flex flex-col md:flex-row justify-center items-center gap-6 font-jost ">
          <span>
            <span className="font-cormorant font-bold md:text-4xl">16+ </span>
            Curated Pieces
          </span>
          <span>
            <span className="font-bold md:text-3xl font-cormorant">Free </span>
            Shipping Over $500
          </span>
          <span>
            <span className="font-bold md:text-3xl font-cormorant">30-Day </span>
            Returns
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
