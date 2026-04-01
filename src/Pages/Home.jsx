import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AllProducts from "../Components/AllProducts/AllProducts";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const { products } = useProducts();
  
  return (
    <div>
      <HeroSection />
      <AllProducts products={products} />
    </div>
  );
};

export default Home;
