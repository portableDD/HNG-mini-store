import Navbar from "../Components/Navbar";
import Checkout from "../Components/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar isHome={true} />
      <Checkout />
    </div>
  )
}

export default CheckoutPage