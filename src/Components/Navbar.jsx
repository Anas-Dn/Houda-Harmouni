import {Link , NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import logo from "../assets-home/logo-premium.png"
import { MoveLeft } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed w-screen px-24 mt-4 z-100">
        <div className=" flex justify-between items-center px-8  ">
          <Link to="/"><img src={logo} className="w-30 cursor-pointer" alt="" /></Link>
          <ul className="flex gap-16 font-medium">

            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الرئيسية</NavLink>
            </li>
            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/about" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>من أنا</NavLink>
            </li>
            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/services" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الخدمات</NavLink>
            </li>
            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink to="/fre-guide" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>كتيب مجاني</NavLink>
            </li>
            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Testemonials" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>آراء الناس</HashLink>
            </li>
            <li className="hover:text-black text-(--text-muted) relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink smooth to="/#Q/A" className={({ isActive }) => `text-(--text-muted) hover:text-black after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الأسئلة</HashLink>
            </li>

          </ul>
          <Link to="/services">
              <button className="group hover:-translate-y-0.5 transition-all duration-400 flex gap-2 text-amber-50 cursor-pointer rounded-4xl py-3.5 px-8 bg-(--gold) font-bold text-sm">إحجز جلسة <MoveLeft className="-translate-y-1 group-hover:-translate-x-1 transition-all duration-400" /></button>
          </Link>
        </div>
    </div>
  )
}
