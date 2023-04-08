import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetails";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <Home />,
  },
];

export {routes};