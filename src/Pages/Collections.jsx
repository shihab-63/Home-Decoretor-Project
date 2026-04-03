import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/AllProducts/ProductCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Collections = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const filteredProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term),
      )
    : products;

  return (
    <div className="pb-8">
      <div className="bg-[#f8ebdb]">
        <div className="bg-linear-to-r from-[#2b1e14] via-[#3a2a1f] to-[#2b1e14] text-center py-20 px-4">
          <p className="text-xs font-jost tracking-[0.3em] text-[#c9a86a] mb-4 uppercase">
            Curated Living Essentials
          </p>

          <h1 className="text-4xl font-cormorant md:text-7xl text-white mb-4">
            Transform Your <span className="text-[#c9a86a] italic">Space</span>
          </h1>

          <p className="text-sm font-jost text-gray-300 mb-8">
            Handpicked furniture, lighting & décor for the modern home
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-65 md:w-[320px] px-5 py-3 rounded-full bg-transparent border border-[#c9a86a]/40 text-white placeholder-gray-400 focus:outline-none"
            />

            <select className="w-65 md:w-[320px] px-5 py-3 font-jost rounded-full bg-transparent border border-[#c9a86a]/40 text-white focus:outline-none">
              <option className="text-black">Sort by Default</option>
              <option className="text-black">Price Low to High</option>
              <option className="text-black">Price High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <h1 className="text-3xl md:text-7xl font-cormorant">
          All <span className="text-[#d39728]">Products</span>
        </h1>
        <p className="mt-2 font-cormorant text-2xl ">
          Products: ({filteredProducts.length})
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center mt-24 items-center h-96">
          <DotLottieReact
            className="h-full"
            src="/loading.lottie"
            loop
            autoplay
          />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div>
          <DotLottieReact
            className="md:w-2xl mx-auto mb-12"
            src="/NoItemFound.lottie"
            loop
            autoplay
          />
          <p className="text-center text-slate-600 md:text-2xl hover:text-slate-700 transition">
            📦 No products found. Try a different name!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6  container mx-auto px-3 md:px-0  my-12">
          {filteredProducts.map((furniture) => (
            <ProductCard
              loading={loading}
              key={furniture.id}
              furniture={furniture}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
