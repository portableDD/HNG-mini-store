import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Products from "../Components/products";
import About from "../Components/about";
import Testimonial from "../Components/testimonial";

const HomePage = () => {
  return (
    <>
        <Navbar isHome={true} />
        <Hero />  
        <Products />
        <About />
        <Testimonial />
    </>
  )
}

export default HomePage