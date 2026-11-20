import {Link , NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import logo from "../assets-home/logo-premium.png"
import { Menu, MoveLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Header() {
  const location = useLocation();
  const isHomeActive = location.pathname === "/" && location.hash === "";
  const [scrolledHeader , setScrolledHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolledHeader(window.scrollY > 50)
    }
    window.addEventListener("scroll" , handleScroll)
    handleScroll()
    return  () => {
      window.removeEventListener("scroll", handleScroll);
    };
  } , [])

  const [isOpen , setIsOpen] = useState(true);


  return (
    <div className={`fixed top-0 left-0 z-100 transition-all duration-700  mt-4 
     ${scrolledHeader ? "bg-[rgba(255,255,255,0.88)] rounded-full shadow-2xl w-10/12 [@media(min-width:850px)]:w-4/5 left-1/2 -translate-x-1/2 px-5" :"w-screen px-18 [@media(min-width:850px)]:px-36 "}
     `}> 

        <div className=" flex justify-between items-center xl:px-8 px-0 ">


          <Link to="/"><img src={logo} className={`[@media(min-width:850px)]:w-30 w-25 cursor-pointer ${scrolledHeader? "[@media(min-width:850px)]:w-25 w-20" :""}`} alt="" /></Link>

          <ul className={`[@media(min-width:1100px)]:flex gap-16 ${scrolledHeader ? "gap-5" : ""} font-medium hidden`}>

            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/" className={`text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isHomeActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الرئيسية</NavLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/about" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>من أنا</NavLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/services" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الخدمات</NavLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/free-guide" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>كتيب مجاني</NavLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Testemonials" className={`text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Testemonials" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>آراء الناس</HashLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Q&A" className={`text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Q&A" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الأسئلة</HashLink>
            </li>

          </ul>

          <Link to="/services">
              <button className=" hidden group hover:-translate-y-0.5 transition-all duration-400 [@media(min-width:1323px)]:flex gap-2 text-amber-50 cursor-pointer rounded-4xl py-3.5 px-8 bg-(--gold) font-bold text-sm">إحجز جلسة 
                <MoveLeft className="-translate-y-0.5 group-hover:-translate-x-1 transition-all duration-400" />
              </button>
          </Link>

          <div className="[@media(min-width:1100px)]:hidden block">
            <Menu className=" text-(--gold)" />
          </div>

        <div className={`absolute ${ isOpen ? "inset-0  top-[50%]" : "translate-400"}`}>

            <ul className="bg-[#f3ede4] flex flex-col items-center">
              <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isHomeActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الرئيسية</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/about" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>من أنا</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/services" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الخدمات</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/free-guide" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>كتيب مجاني</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Testemonials" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Testemonials" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>آراء الناس</HashLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Q&A" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Q&A" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الأسئلة</HashLink>
            </li>
            </ul>

          </div>


        </div>


    </div>
  )
}
