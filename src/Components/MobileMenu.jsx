import { MoveLeft, X } from "lucide-react";
import { NavLink , Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

export default function MobileMenu({isOpen , isHomeActive , setIsOpen}) {
  return (
    <div className={`absolute transition-all duration-100 right-[50%] translate-[50%] ${ isOpen ? "translate-y-70 opacity-100" : "-translate-y-110 opacity-0"}`}>

        <ul className="bg-[#f3ede4] flex flex-col gap-4 items-center relative py-12 w-80 rounded-3xl shadow-2xl shadow-[rgba(0,0,0,0.9)] z-2000">
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink onClick={() => setIsOpen(false)} to="/" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isHomeActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الرئيسية</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink onClick={() => setIsOpen(false)} to="/about" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>من أنا</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink onClick={() => setIsOpen(false)} to="/services" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الخدمات</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <NavLink onClick={() => setIsOpen(false)} to="/free-guide" className={({ isActive }) => `text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>كتيب مجاني</NavLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink onClick={() => setIsOpen(false)} smooth to="/#Testemonials" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Testemonials" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>آراء الناس</HashLink>
            </li>
            <li className=" font-semibold text-black relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-(--gold) hover:after:w-full after:transition-all after:duration-400">
                <HashLink onClick={() => setIsOpen(false)} smooth to="/#Q&A" className={`text-black  after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-(--gold) after:transition-all after:duration-300 ${location.hash === "#Q&A" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>الأسئلة</HashLink>
            </li>
            <Link onClick={() => setIsOpen(false)} to="/services">
                <button className="mt-2 group hover:-translate-y-0.5 transition-all duration-400 flex gap-2 text-amber-50 cursor-pointer rounded-4xl py-2 px-6 bg-(--gold) font-bold text-sm">إحجز جلسة 
                    <MoveLeft className="-translate-y-0.5 group-hover:-translate-x-1 transition-all duration-400" />
                </button>
            </Link>
            <X className="absolute right-4 top-4 cursor-pointer" onClick={() => setIsOpen(false)}/>
        </ul>

    </div>
  )
}
