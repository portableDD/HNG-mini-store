import CartImage from "../assets/img/SAD CART.png";
import {  Link} from "react-router-dom";

const Cart = () => {
  return (
    <section className="text-center mb-3">
        <h1 className="text-4xl font-semibold">
            My Cart
        </h1>
        <div className="flex justify-center items-center mt-[130.9px] mb-3">
            <img src={CartImage} alt="cart" className="h-[130.5px]"/>
        </div>
        <div className="mt-16">
            <h3 className="font-semibold text-3xl mb-3">
                Your Cart is Empty
            </h3>
            <p className="">
                You have no items in your shopping cart.<br/>
                Let’s go buy something
            </p>
        </div>
        <button className='bg-buttonBg text-white uppercase rounded-xl py-5 px-24 mt-12 content-end'>
            <Link to={'/shop'}>
                Continue Shopping
            </Link>
        </button>
    </section>
  )
}

export default Cart