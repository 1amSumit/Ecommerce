import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ProductDetails from "./pages/ProductDetails";
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
          },
          { path: ":id", element: <ProductDetails /> },
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
