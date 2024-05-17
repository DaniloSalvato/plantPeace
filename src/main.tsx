import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Routes/Home.tsx";
import Register from "./Routes/Register.tsx";
import Products from "./Routes/Products.tsx";
import AboutUs from "./Routes/AboutUs.tsx";
import Product from "./Routes/ProductDetailPage.tsx";
import Login from "./Routes/Login.tsx";

import RootLayout from "./Routes/layouts/RootLayout.tsx";
import DashboardLayout from "./Routes/layouts/DashboardLayout.tsx";

import ErrorPage from "./components/ErrorPage.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Login /> },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/product/:id",
            element: <Product />,
          },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
