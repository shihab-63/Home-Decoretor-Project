import React, { useState } from "react";
import { getWishList, removeFromWishlist } from "../Utils/LocalStorage";
import { Trash2 } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => getWishList());
  const [sortPrice, setSortPrice] = useState("none");

  const getSortedWishlist = () => {
    const sortedData = [...wishlist];

    if (sortPrice === "sort-asc") {
      return sortedData.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "sort-desc") {
      return sortedData.sort((a, b) => b.price - a.price);
    } else {
      return sortedData;
    }
  };

  const sortWishlist = getSortedWishlist();

  const handleRemoved = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id);
        setWishlist((prev) => prev.filter((p) => p.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container mx-auto px-3 py-8 md:px-0 ">
      <div className="flex justify-between items-center">
        <div>
          <h1>({sortWishlist.length}) Product found</h1>
        </div>
        <label className="">
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="border select w-38 border-gray-300 px-5 py-2 cursor-pointer focus:border-blue-600 outline-0 transition-colors duration-300 rounded-lg bg-transparent appearance-none"
          >
            <option value="none">Sort by Price</option>
            <option value="sort-asc">Low To High</option>
            <option value="sort-desc">High to Low</option>
          </select>
        </label>
      </div>

      <div>
        {sortWishlist.length === 0 ? (
          <div className="container mx-auto px-3 md:px-0">
            <DotLottieReact
              className="md:w-96 mx-auto"
              src="/Empty.lottie"
              loop
              autoplay
            />
            <div className="text-center mt-0">
              <p className="text-lg font-semibold">Nothing saved yet!</p>
              <p>Looks like you haven't found your favorites yet.⚡</p>
            </div>
          </div>
        ) : (
          sortWishlist.map((p) => (
            <div
              key={p.id}
              className="mt-5 bg-linear-to-r from-[#afb19841] to-[#27ff0a33] rounded-2xl"
            >
              <div className="flex items-center gap-1 md:gap-5">
                <figure className="">
                  <img
                    className="rounded-l-2xl md:w-44 h-28 object-cover"
                    src={p.image}
                    alt={p.name}
                  />
                </figure>
                <div className="flex justify-between gap-5 items-center w-full pr-8">
                  <div>
                    <p className="md:text-lg font-semibold">{p.name}</p>
                    <p>{p.category}</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <p className="md:text-xl font-semibold">${p.price}</p>
                    <Trash2
                      onClick={() => handleRemoved(p.id)}
                      className="text-red-600 cursor-pointer active:scale-95"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
