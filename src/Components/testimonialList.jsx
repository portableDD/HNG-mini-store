import { FaStar } from "react-icons/fa6";

const testimonialList = ({testCard}) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative text-black">
        <div className="p-4">
            <div className="mb-0">
                <div className="font-medium text-xl my-2">
                    {testCard.desc}  
                </div>
            </div>

            <div className="flex justify-center items-center pt-5">
                <img src={testCard.image} alt="image" className="w-[80.64px] h-[80.64px]" />
            </div>

            <div className="mt-5 mb-5 font-medium text-2xl text-center">
                <h3 className="text-2xl font-semibold ">{testCard.title} </h3>
                <div className="flex flex-row justify-center mb-4 text-yellow-500 text-center text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default testimonialList