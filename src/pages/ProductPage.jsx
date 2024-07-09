/* eslint-disable react/prop-types */

import Navbar from "../Components/Navbar";
import List from "../data";
import ProductDetails from "../Components/productDetails";
import { useSearchParams} from "react-router-dom";

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('name')
    const params = Number(q)
    const Card = List
  return (
    <div className="bg-bgColor text-black ">
        <Navbar isHome={true}/>
        {Card.filter(item =>item.id === params).map((job) => (
            <ProductDetails key={job.id} prodDetail={job}/>
        ))}
    </div>
  )
}

export default ProductPage