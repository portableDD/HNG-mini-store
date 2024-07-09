import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayouts from "./layout/mainLayout";
import HomePage from "./pages/homepages";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element = {<MainLayouts />}>
    <Route index element = {<HomePage />} />
    <Route path="/shop" element = {<ShopPage />} />
    <Route path="/shop/:id" element = {<ProductPage />} />
    <Route path="/Cart" element = {<CartPage />} /> 
    <Route path="/Checkout" element = {<Checkout />} /> 
  </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
};

export default App;

