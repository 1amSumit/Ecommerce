import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products, { loader as productLoader } from "./pages/Products";
import Root from "./pages/Root";
import ProductDetails, { loader as loadProduct } from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Root />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: productLoader,
          },
          {
            path: ":id",
            element: <ProductDetails />,
            id: "product-load",
            loader: loadProduct,
          },
          { path: "cart", element: <Cart /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
