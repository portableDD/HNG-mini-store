/* eslint-disable react/prop-types */
import { NavLink, Link} from "react-router-dom";
import logo from '../assets/img/GLAMOUR Logo (2) 3.png'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



const Navbar = ({isHome = false}) => {
    const bg = isHome ? "bg-bgColor" : "bg-transparent ";
    const linkClass = ({isActive}) => isActive ? " hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : " hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  return (
    <>
        <header className={` ${bg} flex flex-row items-center justify-evenly text-black  px-6 mx-auto space-y-0 md:space-y-0`}> 
            <div className="site-header flex ">
                <div className = "site-logo">
                    <Link to= "/" >
                        <img src={logo} alt="logo" className="h-24 lg:h-20" />
                    </Link>
                </div>
            </div>
                <nav className="site-menu hidden md:flex">
                    <ul className="flex gap-3">
                        <li><NavLink to="/"  className={linkClass}>Home</NavLink></li>
                        <li><NavLink to="#about"  className={linkClass}>About Us</NavLink></li>                       
                        <li><NavLink to="/shop"  className={linkClass}>Shop</NavLink></li>
                    </ul>
                </nav>
            <div className="hidden md:flex gap-3 text-black">
                <FaSearch />
                <Link to={'/Cart'}>
                    <FaCartShopping />
                </Link>
                <FaUser/>
            </div>
            <div className = "toggle-menu lg:hidden  md:hidden">
                <FaBars />
            </div>
        </header>
        {/* <div className = "hide-toggle-menu side-menu" id="side-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/shoes">Shoes</NavLink></li>
                <li><NavLink to="/sandal">Sandals</NavLink></li>
                <li><NavLink to="/slipper">Slippers</NavLink></li>
                <li><NavLink to="/contact">Contact Us </NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li>
                    <NavLink to="/sign-in">
                        Sign in as seller
                    </NavLink>
                </li>
            </ul>
        </div> */}
    </>
  )
}

export default Navbar