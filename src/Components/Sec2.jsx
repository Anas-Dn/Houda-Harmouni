import { Link } from "react-router-dom"
import pic from "../assets-home/رحلة تذكر.png"
import { MoveLeft } from "lucide-react"

export default function Sec2() {
  return (
    <div className="flex items-center justify-center mx-10 min-[1000px]:mx-20 py-30 bg-(--bg-light) min-[1000px]:gap-20 gap-0">
     <div className="min-[1000px]:w-200 w-full flex flex-col items-center min-[1000px]:items-start justify-center">
        <h2 className="mb-10 border-r-4 border-(--gold) text-lg font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm relative right-14 after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">رحلة روحانية • لمدة شهرين</h2>
        <h1 className="text-6xl font-bold mb-2 text-(--purple-royal)">رحلة</h1>
        <h1 className="text-6xl font-bold mb-5 text-(--gold)">تذكر</h1>
        <div className=" bg-white my-8">
            <img loading="lazy" src={pic} alt="" className="w-90 h-115 m-3 hover:scale-105 transition-transform duration-400 min-[1000px]:hidden block" />
        </div>
        <p className="text-center min-[1000px]:text-start text-(--purple-accent) min-[1000px]:mb-5 mb-10 w-full min-[1000px]:w-2/3 leading-8 text-md">تذكري نورك... وحقيقتك الأزلية. رحلة عميقة لتذكري نورك وحقيقتك الأزلية التي نسيتيها دون وعي منك. رحلة لكل روح اختارت أن تستيقظ من سباتها، وتبدأ رحلة العودة إلى نورها وحقيقتها الأزلية...</p>
        <hr className="border-0.5 border-gray-200 mb-4 w-full"/>
        <div className="flex min-[1000px]:justify-between justify-center gap-10 items-center w-2/3">
          <div className="flex flex-col items-center min-[1000px]:items-start">
            <h2 className="text-(--gold) font-bold text-lg mb-1.5">البداية</h2>
            <p className="font-medium mb-1">18 سبتمبر</p>
            <p className="text-sm">شهرين 6 لقاءات مباشرة</p>
          </div>
          <div className="flex flex-col items-center min-[1000px]:items-start relative after:absolute after:w-px after:h-12.5 after:bg-gray-300 min-[1000px]:after:-right-20 after:-right-5 after:top-4">
            <h2 className="text-(--gold) font-bold text-lg mb-1.5">المكان</h2>
            <p className="font-medium mb-1">عن بعد (Zoom)</p>
            <p className="text-sm">متابعة في مجموعة تليجرام</p>
          </div>
        </div>
        <hr className="border-0.5 border-gray-200 mt-4 w-full"/>
        <Link to="/services">
              <button className="mt-10 group hover:-translate-y-0.5 transition-all duration-400 flex gap-2 text-amber-50 cursor-pointer rounded-[40px] py-6 px-12 bg-(--purple-royal) font-bold text-sm"> اكتشفي المزيد <MoveLeft className="-translate-y-1 group-hover:-translate-x-1 transition-all duration-400 text-(--gold)" /></button>
          </Link>
     </div>

     <div className="flex justify-center">
        <div className=" bg-white">
            <img loading="lazy" src={pic} alt="" className="w-90 h-115 m-3 hover:scale-105 transition-transform duration-400 min-[1000px]:block hidden" />
        </div>
     </div>

    </div>
  )
}
