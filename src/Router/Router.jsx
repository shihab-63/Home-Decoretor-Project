import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPages from "../Pages/ErrorPages";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import About from "../Pages/About";
import { Contact } from "lucide-react";

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
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
