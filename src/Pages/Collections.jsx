import React from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/AllProducts/ProductCard";

const Collections = () => {
  const { products } = useProducts();

  return (
    <div className="py-8 container mx-auto px-3 md:px-0">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-jost">
          All <span className="text-[#d39728]">Products</span>
        </h1>
        <p className="mt-2 font-cormorant text-2xl ">
          Products: ({products.length})
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6  my-12">
        {products.map((furniture) => (
          <ProductCard key={furniture.id} furniture={furniture} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
