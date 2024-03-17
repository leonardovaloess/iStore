import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { CategoryPage } from "./pages/CategoryPage";
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
        path: "/category/:category",
        element: <CategoryPage/>
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "/search/:search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
