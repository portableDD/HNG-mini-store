

const Checkout = () => {
  return (
    <section className=" px-3 lg:px-36">
        <h1 className="text-center font-semibold text-4xl text-[#000000]">
            Checkout
        </h1>
        {/* first form */}
        <div className="mt-14 ">
            <form action="">
                <h3 className="font-semibold text-3xl mb-2 text-center md:text-left">
                    Add payment
                </h3>
                <p className="text-[#00000080] font-bold mb-3">
                    Make your selection
                </p>
                <div className="flex gap-20 ">
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="card" id=""  className="accent-buttonBg" checked/>
                        <label htmlFor="DebitCard" className="font-medium text-sm  ">Debit Card</label>
                    </div>

                    <div className="flex gap-3 items-center">
                        <input type="radio" name="card" id="" className="accent-buttonBg" />
                        <label htmlFor="CreditCard" className="font-medium text-sm">Credit Card</label>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="CardHolder" className="font-normal text-lg">Card Holder Name</label> <br />
                    <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] md:w-[289.16px] w-full rounded-md px-4 font-semibold text-sm"/>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">Card Number</label> <br />
                        <input type="number" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">Expiry Date</label> <br />
                        <input type="number" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm" placeholder="MM/YYYY"/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">CVV</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm"/>
                    </div>
                </div>
            </form>
        </div>
            {/* second form */}
        <div className="mt-14 ">
            <form action="">
                <h3 className="font-semibold text-3xl mb-2 text-center md:text-left">
                    Delivery details
                </h3>
                <p className="text-[#00000080] font-bold mb-3">
                    Input your delivery details
                </p>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">House No.</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[85.08px] rounded-md px-4 font-semibold text-sm"/>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">Street Name</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[289.16px] rounded-md px-4 font-semibold text-sm"/>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">Area Name</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[289.16px] rounded-md px-4 font-semibold text-sm"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">City</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">State</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm"/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="CardHolder" className="font-normal text-lg">Country</label> <br />
                        <input type="text" name="CardHolder" className="border-[0.72px] border-[#00000099] mt-1 h-[52.94px] w-full md:w-[250px] lg:w-[289.16px] rounded-md px-4 font-semibold text-sm"/>
                    </div>
                </div>
            </form>
        </div>

        <div className="text-center">
            <button className='bg-buttonBg text-white uppercase rounded-xl py-5 px-24 mt-24 text-center'>
                Place order
            </button>
        </div>
    </section>
  )
}

export default Checkout