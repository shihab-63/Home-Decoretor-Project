import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const AllProducts = ({ products }) => {
  const sixProducts = products.slice(0, 8);
  return (
    <div className="pt-10 py-8 container mx-auto px-3 md:px-0">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-jost">
          Our <span className="text-[#d39728]">Products</span>
        </h1>
        <p className="mt-2 font-cormorant text-2xl ">
          Products: ({products.length})
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6  my-12">
        {sixProducts.map((furniture) => (
          <ProductCard key={furniture.id} furniture={furniture} />
        ))}
      </div>

      <div className="text-right">
        <Link
          to={"/collections"}
          className="btn btn-outline btn-warning text-lg rounded-xl"
        >
          View All Products...
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
