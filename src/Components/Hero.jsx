import HeroImage from '../assets/img/Rectangle 65.png'
import {  Link} from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" flex flex-col-reverse lg:flex-row md:flex-row-reverse items-center justify-evenly  px-6 mx-auto space-y-0 md:space-y-0">
        <div className=' '>
            <h1 className='text-5xl md:text-6xl font-semibold uppercase leading-normal'>Your beauty <br />our passion</h1>
            <p className='font-medium text-xl capitalize'>empowering your beauty <br />innovation, transforming your <br />look, one product at a time</p>
            <button className='bg-buttonBg text-white uppercase rounded-xl py-5 px-24 mt-12 content-end'>
              <Link to={'/shop'}>
                Shop Now
              </Link>
            </button>
        </div>
        <div className=' py-10 '> 
          <img src={HeroImage} alt="comsetics pic" className='lg:w-96 md:w-64'/>
        </div>
      </div>
    </>
  )
}

export default Hero