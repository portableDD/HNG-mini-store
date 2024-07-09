import AboutImage from '../assets/img/Rectangle 67.png';
import Services from './services';

const about = () => {
  return (
    <section id="About" className=" text-black pt-5">
        <div className=" flex flex-col-reverse lg:flex-row md:flex-row-reverse items-center justify-evenly bg-bgColor text-black px-6 mx-auto space-y-0 md:space-y-0">
          <div className=' py-10 '> 
            <img src={AboutImage} alt="comsetics pic" className='lg:w-96 md:w-64'/>
          </div>
          <div className='lg:w-1/3 md:w-96 '>
            <h1 className='text-[46px] font-semibold uppercase leading-normal'>Discover the magic of beauty</h1>
            <p className='font-medium text-xl capitalize '>
              Step into the world of beauty with our collection of cosmetics. we collaborate with the most prestigious beauty brands from around the globe to offer you the finest and trendiest products available
            </p>
          </div>
        </div>
        <Services />
    </section>

  )
}

export default about