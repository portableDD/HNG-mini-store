import Testimonial from '../testimony'
import TestimonialList from './testimonialList'

const testimonial = () => {
  return (
    <section>
        <div className="container-xl lg:container mx-auto w-full py-8">
            <h1 className="font-semibold uppercase text-4xl  text-center  py-5 my-5">
                WHAT PEOPLE SAY ABOUT OUR PRODUCT
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
                {Testimonial.map((job) => (
                    <TestimonialList key={job.id} testCard={job} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default testimonial