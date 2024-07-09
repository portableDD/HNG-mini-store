import Navbar from "../Components/Navbar";
import { FaSearch } from "react-icons/fa";
import ShopImage from "../assets/img/ShopHeroPic.png"

const ShopHero = () => {
  return (
    <section className="bg-cover bg-center h-[493.95px] text-black" style={{backgroundImage: `url(${ShopImage})`}}>
        <Navbar />
        <div className="flex justify-center items-center mt-44 ">
            <div className="flex flex-row gap-2 items-center py-3 px-3 w-[415px] bg-white rounded-md">
                <FaSearch />
                <p>Search Products</p>
            </div>
        </div>
    </section>
  )
}

export default ShopHero