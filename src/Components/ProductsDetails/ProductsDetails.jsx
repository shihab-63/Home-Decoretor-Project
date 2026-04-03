import React from "react";
import useProducts from "../../Hooks/useProducts";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Heart,
  ShieldCheck,
  ShoppingCart,
  Truck,
  XCircle,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProductsDetails = () => {
  const { products, loading } = useProducts();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (loading)
    return (
      <div className="flex justify-center mt-24 items-center h-96">
        <DotLottieReact className="h-full" src="/loading.lottie" loop autoplay />
      </div>
    );
  return (
    <div className="bg-[#f6f1eb] min-h-screen py-12 px-3 md:px-0 font-jost">
      <div className="container mx-auto ">
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#c9a86a] transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Collections
        </Link>

        <div className="bg-white rounded-4xl p-6 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-[#f8f6f3] rounded-3xl overflow-hidden h-80 md:h-170 relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {!product.stock && (
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Sold Out
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[#c9a86a] tracking-[0.2em] font-jost text-sm uppercase font-bold mb-3">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-cormorant font-bold text-[#2b1e14] mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-7xl font-cormorant font-bold text-[#2b1e14] mb-6">
              ${product.price}
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="space-y-4 mb-8 bg-[#f9f8f6] p-6 rounded-2xl">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500 font-medium">Material</span>
                <span className="text-[#2b1e14] font-semibold text-right">
                  {product.material}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-gray-500 font-medium">Dimensions</span>
                <span className="text-[#2b1e14] font-semibold text-right">
                  {product.dimensions}
                </span>
              </div>
            </div>

            <div className="mb-8">
              {product.stock ? (
                <p className="flex items-center gap-2 text-green-600 font-medium bg-green-50 w-fit px-4 py-2 rounded-full">
                  <CheckCircle2 size={18} /> In Stock & Ready to Ship
                </p>
              ) : (
                <p className="flex items-center gap-2 text-red-500 font-medium bg-red-50 w-fit px-4 py-2 rounded-full">
                  <XCircle size={18} /> Out of Stock
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <button
                disabled={!product.stock}
                className="w-full bg-[#7a5335] cursor-pointer text-white py-4 rounded-full flex items-center justify-center gap-3 font-bold tracking-[0.15em] uppercase hover:bg-[#c9a86a] transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <ShoppingCart size={22} />
                {product.stock ? "Add to Cart" : "Currently Unavailable"}
              </button>
              <button
                disabled={!product.stock}
                className="w-full bg-emerald-800 cursor-pointer text-white py-4 rounded-full flex items-center justify-center gap-3 font-bold tracking-[0.15em] uppercase hover:bg-[#c9a86a] transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Heart size={22} />
                {product.stock ? "Save to Wishlist" : "Saved to Wishlist"}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} /> 1 Year Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Truck size={16} /> Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
