import React from "react";
import { Heart, Star } from "lucide-react";
import { Link, ScrollRestoration } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProductCard = ({ furniture, loading }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <DotLottieReact
          className="h-full"
          src="/loading.lottie"
          loop
          autoplay
        />
      </div>
    );
  return (
    <Link
      to={`/products-details/${furniture.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 font-jost"
    >
      <ScrollRestoration />
      <div className="relative w-full h-72 bg-[#f8f6f3]">
        <img
          src={furniture.image}
          alt={furniture.name}
          className="w-full h-full object-cover"
        />

        <button className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a86a] uppercase">
            {furniture.category}
          </span>

          <div className="flex text-[#c9a86a] gap-0.5">
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <Star size={12} strokeWidth={2} />
          </div>
        </div>

        <h3 className="font-cormorant text-2xl font-bold text-[#2b1e14] mb-2 line-clamp-1">
          {furniture.name}
        </h3>

        <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">
          {furniture.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="font-cormorant text-3xl font-bold text-[#2b1e14]">
            ${furniture.price}
          </span>

          <button className="bg-[#c9a86a] btn text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#b09055] transition-colors shadow-sm cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
