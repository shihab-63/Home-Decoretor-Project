import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AllProducts from "../Components/AllProducts/AllProducts";
import useProducts from "../Hooks/useProducts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const { products, loading } = useProducts();
  
  return (
    <div>
      <HeroSection />
      <AllProducts loading={loading} products={products} />
    </div>
  );
};

export default Home;
