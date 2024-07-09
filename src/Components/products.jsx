// import product from "../product.json"
import List from "../data"
import ProductListing from "./product"

const products = () => {
    const ListDisplay = List.slice(0,4);
     
    // console.log(List)
  return (
    <section>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl  text-center bg-buttonBg py-5 my-5">
                new arrivals
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ListDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default products