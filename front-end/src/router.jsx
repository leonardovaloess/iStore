import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "carrinho",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
