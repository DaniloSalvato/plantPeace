import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./Routes/Home.tsx"
import Register from "./Routes/Register.tsx"
import Products from "./Routes/Products.tsx"
import AboutUs from "./Routes/AboutUs.tsx"
import Product from "./Routes/ProductDetailPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
