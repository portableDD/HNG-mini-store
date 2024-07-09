

const services = () => {
  return (
    <div className="container-xl lg:container mx-auto w-ful  py-8">
        <h1 className="font-semibold capitalize text-4xl text-center py-5 my-5">
            Embrace the magic of glamour store
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="rounded-3xl rounded-br-[150px] bg-white pt-16 pb-12  capitalize w-[310px] h-[260.42px] px-4">
                  <h4 className=" font-semibold text-xl">
                    quality products
                  </h4>
                  <p className="pt-5 font-medium text-base">
                    our dedicated customer support team is always available to assist you with any queries, concerns.
                  </p>
            </div>
            <div className="rounded-3xl rounded-br-[150px] bg-white pt-16 pb-12  px-4 capitalize w-[310px] h-[260.42px]">
                  <h4 className=" font-semibold text-xl">
                    affordable prices
                  </h4>
                  <p className="pt-5 font-medium text-base">
                    we understand that navigating the beauty world can be overwhelming at times.
                  </p>
            </div>
            <div className="rounded-3xl rounded-br-[150px] bg-white pt-16 pb-12  px-4 capitalize w-[310px] h-[260.42px]">
                  <h4 className=" font-semibold text-xl">
                    fast delivery
                  </h4>
                  <p className="pt-5 font-medium text-base">
                    products are delivered fast and safe. we got you covered.
                  </p>
            </div>
            
        </div>
    </div>
  )
}

export default services