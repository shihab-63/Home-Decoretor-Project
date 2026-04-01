import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-3 md:px-0 min-h-[calc(100vh-288px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
