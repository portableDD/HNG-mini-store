import { Link } from 'react-router-dom';
import { IoHeartCircleOutline } from "react-icons/io5";


const product = ({productCard}) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative text-black">
        <div className="p-4">
            <div className="mb-0">
                <div className="my-2">
                    <Link to={`/shop/${productCard.id}?name=${productCard.id}`}>
                        <img src={productCard.image} alt="image" className='md:h-[320px] md:w-full lg:h-[288.8px] lg:w-[288.8px] '/>
                    </Link>
                </div>
                <Link to={`/shop/${productCard.id}?name=${productCard.id}`}>
                    <h3 className="text-2xl font-semibold uppercase ">{productCard.title} </h3>
                </Link>
            </div>

            <div className="mb-5 font-medium text-2xl ">
                {productCard.price}
            </div>
            {/* h-[36px] w-[250px] md:h-[34.19px] md:w-[189.1px] */}
            <div className="flex flex-row lg:flex-row justify-between mb-4">
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

export default product