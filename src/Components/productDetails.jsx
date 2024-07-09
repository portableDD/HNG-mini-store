import { Link } from 'react-router-dom';
import { IoHeartCircleOutline } from "react-icons/io5";

const productDetails = ({prodDetail}) => {
  return (
    <div className="flex flex-col md:flex-row shadow-md justify-evenly relative text-black p-4">
        <div className="mb-0">
            <div className="my-2">
                <img src={prodDetail.image} alt="image" className='md:h-[320px] md:w-full lg:h-[288.8px] lg:w-[288.8px] '/>
            </div>  
        </div>
        <div>
            <div>
                <h3 className="text-2xl font-semibold uppercase mb-2">
                    {prodDetail.title} 
                </h3>
                <p className="mb-2 font-medium text-2xl ">
                    {prodDetail.price}
                </p>
                <p className='mb-5 w-96'>
                    {prodDetail.description}      
                </p>
            </div>
            <div className="flex flex-row lg:flex-row justify-between mb-4 w-56">
                <Link
                    to={`/Cart`}
                    className=" bg-buttonBg hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Add to Cart
                </Link>
                <Link
                    to={`/Checkout`}
                    className=" bg-buttonBg hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Buy
                </Link>
                <IoHeartCircleOutline className='text-buttonBg text-4xl' />
            </div> 
        </div>
    </div>
  )
}

export default productDetails