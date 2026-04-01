import { Menu, PaintRoller, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeColor = ({ isActive }) =>
    isActive ? "border-b-2 border-[#AB905E]" : "border-b-2 border-transparent";

  const navLinks = links.map((link, index) => (
    <li key={index}>
      <NavLink className={activeColor} to={link.path}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="bg-[#2C2416] text-slate-50">
      <div className="flex justify-between items-center container mx-auto px-3 md:px-0 py-3">
        <h1 className="font-cormorant text-3xl font-bold inline-flex tracking-wide items-baseline gap-2">
          <PaintRoller className="text-[#AB905E]" /> MAISON
          <span className="font-jost font-normal text-sm text-[#AB905E]">
            DÉCOR
          </span>
        </h1>

        <ul className="hidden md:flex items-center gap-6 text-lg">
          {navLinks}
        </ul>

        <div className="flex items-center gap-2 group cursor-pointer">
          <ShoppingCart className="transition-transform duration-300 group-hover:-translate-y-1" />
          <span className="text-lg text-[#AB905E]">Cart</span>
          {/* Hermbarger Menu */}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      {/* Show Side Menu */}
      <div>
        {toggle && (
          <div
            onClick={() => setToggle(false)}
            className="fixed inset-0 bg-black/50 transition-opacity z-20"
          ></div>
        )}
      </div>

      <div className="md:hidden">
        <div
          onClick={() => setToggle(false)}
          className={`${toggle ? "translate-x-0" : "-translate-x-full"} fixed top-0 bg-slate-100 w-72 h-screen transform transition-transform duration-300 ease-in-out z-50 left-0 `}
        >
          <div className="flex justify-between items-center pr-5">
            <h1 className="font-cormorant text-amber-500 text-2xl p-3 font-bold inline-flex tracking-wide items-baseline gap-2">
              <PaintRoller className="text-[#AB905E]" /> MAISON
              <span className="font-jost font-normal text-sm text-[#AB905E]">
                DÉCOR
              </span>
            </h1>

            <X
              onClick={() => setToggle(false)}
              size={32}
              className="text-amber-500 "
            />
          </div>

          <div className="flex flex-col gap-6 w-full pl-5 pt-8">
            <ul className="text-amber-500 flex flex-col gap-6">{navLinks}</ul>
          </div>

          <div className="px-3 pt-6 ">
            <button className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
