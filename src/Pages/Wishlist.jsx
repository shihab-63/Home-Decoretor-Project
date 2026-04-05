import React from "react";
import { getWishList } from "../Utils/LocalStorage";

const Wishlist = () => {
  const wishlist = getWishList();
  console.log(wishlist);
  return;
};

export default Wishlist;
