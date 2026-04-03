import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MoveRight } from "lucide-react";

const AllProducts = ({ products, loading }) => {
  const sixProducts = products.slice(0, 8);

  return (
    <div className="bg-[#f7ece1]">
      <div className="pt-10 py-8 container mx-auto px-3 md:px-0">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-jost">
            Our <span className="text-[#d39728]">Products</span>
          </h1>
        </div>

        <div className="text-right flex justify-between items-center my-6">
          <p className="mt-2 font-cormorant text-2xl ">
            Products: ({sixProducts.length})
          </p>
          <Link
            to={"/collections"}
            // group ক্লাসটা দিয়েছি হোভার অ্যানিমেশন করার জন্য, আর items-center আইকনটাকে মাঝামাঝি রাখবে
            className="group flex items-center gap-2 text-[#2b1e14] hover:text-[#c9a86a] transition-colors duration-300 cursor-pointer"
          >
            <span className="font-cormorant text-xl tracking-wide">
              View All Products...
            </span>

            {/* আইকন: group-hover দিয়েছি যাতে মাউস নিলে এটা একটু ডান দিকে সরে যায়! */}
            <MoveRight
              size={22}
              className="transform transition-transform duration-300 group-hover:translate-x-1.5 mt-0.5"
              // mt-[2px] দিয়েছি কারণ Cormorant ফন্টের সাথে আইকনগুলো অনেক সময় হালকা ওপরে মনে হয়।
            />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <DotLottieReact
              className="h-64 md:h-96"
              src="/loading.lottie"
              loop
              autoplay
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6  mb-12 mt-4">
            {sixProducts.map((furniture) => (
              <ProductCard
                loading={loading}
                key={furniture.id}
                furniture={furniture}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
