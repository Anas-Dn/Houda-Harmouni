import {Link , NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import logo from "../assets-home/logo-premium.png"
import { MoveLeft } from "lucide-react";
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
  return (
    <div className={`fixed top-0 left-0 z-100 transition-all duration-700  mt-4 
     ${scrolledHeader ? "bg-[rgba(255,255,255,0.88)] rounded-full shadow-2xl w-4/5 left-1/2 -translate-x-1/2 px-5" :"w-screen px-36"}`}> 

        <div className=" flex justify-between items-center px-8  ">
          <Link to="/"><img src={logo} className={`w-30 cursor-pointer ${scrolledHeader? "w-25" :""}`} alt="" /></Link>
          <ul className={`flex gap-16 ${scrolledHeader ? "gap-5" : ""} font-medium`}>

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
                <NavLink to="/fre-guide" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>كتيب مجاني</NavLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Testemonials" className={`text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Testemonials" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>آراء الناس</HashLink>
            </li>
            <li className="hover:text-black font-semibold text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Q&A" className={`text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Q&A" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الأسئلة</HashLink>
            </li>

          </ul>
          <Link to="/services">
              <button className="group hover:-translate-y-0.5 transition-all duration-400 flex gap-2 text-amber-50 cursor-pointer rounded-4xl py-3.5 px-8 bg-(--gold) font-bold text-sm">إحجز جلسة <MoveLeft className="-translate-y-1 group-hover:-translate-x-1 transition-all duration-400" /></button>
          </Link>
        </div>


    </div>
  )
}
