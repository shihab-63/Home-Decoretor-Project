import Swal from "sweetalert2";

// Get Item
export const getWishList = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Saved Item
export const addToWishlist = (product) => {
  const wishlist = getWishList();

  try {
    // Duplicate chack
    const isDuplicate = wishlist.some((p) => p.id === product.id);
    if (isDuplicate)
      return Swal.fire({
        icon: "error",
        title: "Already Saved!",
        text: "This product is already in your wishlist.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#c9a86a",
      });

    return Swal.fire({
      title: "Do you want to save Wishlist?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = [...wishlist, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied)
        Swal.fire("Cancelled", "Changes are not saved", "info");
    });
  } catch (error) {
    console.error(error);
    return alert("Something went wrong!");
  }
};

// Removed
export const removeFromWishlist = (id) => {
  const getData = getWishList();

  try {
    const removed = getData.filter((data) => data.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(removed));
  } catch (error) {
    console.error(error);
  }
};
