import ProductListing from "./product";
import List from "../data"

const ShopProduct = () => {
    const FaceDisplay = List.slice(4,8);
    const EyesDisplay = List.slice(8,12);
    const lipDisplay = List.slice(12,16);
    const MakeupDisplay = List.slice(16,20);
    const MakeUpKitDisplay = List.slice(20,24)
  return (
    <section>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl py-5 my-5">
                Face
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FaceDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}
                
            </div>
        </div>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl py-5 my-5">
                Eyes
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EyesDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}
                
            </div>
        </div>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl py-5 my-5">
                Lip
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {lipDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}
                
            </div>
        </div>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl py-5 my-5">
                Makeup
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MakeupDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}  
            </div>
        </div>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold capitalize text-5xl py-5 my-5">
                Makeup Kit
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MakeUpKitDisplay.map((job) => (
                <ProductListing key={job.id} productCard={job}/>
                ))}  
            </div>
        </div>
    </section>
  )
}

export default ShopProduct