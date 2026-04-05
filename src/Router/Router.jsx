import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPages from "../Pages/ErrorPages";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import About from "../Pages/Wishlist";
import { Contact } from "lucide-react";
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/collections",
        Component: Collections,
      },
      {
        path: "/wishlist",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/products-details/:id",
        Component: ProductsDetails,
      },
    ],
  },
]);
