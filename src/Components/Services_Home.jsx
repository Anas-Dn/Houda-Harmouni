import pic1 from "../assets-home/service-seances.png";
import pic2 from "../assets-home/service-cours.png";
import pic3 from "../assets-home/service-meditation.png";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function Services_Home() {
  return (
    <div className="mt-30 mb-30 mx-30">
      <div className="flex gap-4 justify-center">
        <h1 className="text-6xl font-bold text-(--purple-deep)">برامجي</h1>
        <h1 className="text-6xl font-bold text-(--gold)">وخدماتي</h1>
      </div>
      <p className="flex justify-center mt-6 text-lg  text-(--purple-accent)">أرافقك من خلال برامج عملية وجلسات موجهة لتحقيق التوازن وبناء الثقة في نفسك.</p>

      <div className="flex gap-10 h-160 mt-15 overflow-hidden">
        <Link to="/services" className="relative rounded-4xl basis-1/2 h-full cursor-pointer group overflow-hidden">
            <img src={pic1} loading="lazy" alt="" className="w-full h-full object-cover rounded-4xl group-hover:scale-105 overflow-hidden duration-400 ease-in-out" />
            <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent rounded-4xl"></div>
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div>
            <div className="absolute left-0 top-90 w-full overflow-hidden pr-12 pb-5">
              <h1 className="border-r-4 border-(--gold) text-xs mb-2 font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm">01 / مرافقة فردية</h1>
              <h2 className="text-(--purple-deep) font-extrabold text-3xl group-hover:text-(--gold) duration-400 ease-in-out  mt-4 group-hover:-translate-y-1">حصص  </h2>
              <h2 className="text-(--purple-deep) font-extrabold mb-3 text-3xl group-hover:text-(--gold) duration-400 ease-in group-hover:-translate-y-1">خاصة فردية</h2>
              <p className="text-(--purple-accent) mb-4 font-normal text-sm">انغماس حي. اتصلي من أي مكان لجلسة كوتشينج عالية الجودة تضمن لك الوضوح والنتيجة.</p>
              <button className="cursor-pointer flex gap-3 items-center text-white bg-(--gold-dark) px-7 py-2.5 rounded-4xl mt-6 group-hover:bg-(--purple-deep) duration-400 ease-in-out group-hover:-translate-y-1.5">
                <h1 className="text-xs font-medium tracking-[4px]">الاطلاع على كل الحصص</h1>
                <MoveLeft className="w-4"/>
              </button>
            </div>
        </Link>
        <div className="flex flex-col gap-10 basis-1/2 h-160">
            <Link to="/services" className="relative rounded-4xl h-75 cursor-pointer group overflow-hidden">
                <img src={pic2} loading="lazy" alt="" className=" object-cover rounded-4xl h-full w-full group-hover:scale-105 overflow-hidden duration-400 ease-in-out" />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div> 
                <div className="absolute left-0 top-25 w-full overflow-hidden pr-12 pb-5">
                  <h1 className="border-r-4 border-(--gold) text-xs mb-2 font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm">02 / دورات تعليمية</h1>
                  <h2 className="text-(--purple-deep) font-extrabold mb-3 text-3xl group-hover:text-(--gold) duration-400 ease-in-out  mt-4 group-hover:-translate-y-1">دورات ماستركلاس</h2>
                  <p className="text-(--purple-accent) mb-4 font-normal text-sm">تعلمي مهارات جديدة وطوري وعيك من خلال دورات متخصصة ومكثفة.</p>
                  <button className="cursor-pointer flex gap-3 items-center text-white bg-(--gold-dark) px-7 py-2.5 rounded-4xl mt-6 group-hover:bg-(--purple-deep) duration-400 ease-in-out group-hover:-translate-y-1.5">
                    <h1 className="text-xs font-medium tracking-[4px]">الاطلاع على كل الدورات</h1>
                    <MoveLeft className="w-4"/>
                  </button>
                </div>
            </Link>
            <Link to="/services" className="relative rounded-4xl h-75 cursor-pointer group overflow-hidden">
                <img src={pic3} loading="lazy" alt="" className="object-cover rounded-4xl h-full w-full group-hover:scale-105 overflow-hidden duration-400 ease-in-out" />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div>
                <div className="absolute left-0 top-25 w-full overflow-hidden pr-12 pb-5">
                  <h1 className="border-r-4 border-(--gold) text-xs mb-2 font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm">03 / فضاء السكينة</h1>
                  <h2 className="text-(--purple-deep) font-extrabold mb-3 text-3xl group-hover:text-(--gold) duration-400 ease-in-out  mt-4 group-hover:-translate-y-1">  فضاء التأمل</h2>
                  <p className="text-(--purple-accent) mb-4 font-normal text-sm">استمتعي بلحظات من الهدوء لتجديد طاقتك وتصفية ذهنك يومياً.</p>
                  <button className="cursor-pointer flex gap-3 items-center text-white bg-(--gold-dark) px-7 py-2.5 rounded-4xl mt-6 group-hover:bg-(--purple-deep) duration-400 ease-in-out group-hover:-translate-y-1.5">
                    <h1 className="text-xs font-medium tracking-[4px]">الاطلاع على كل الدورات</h1>
                    <MoveLeft className="w-4"/>
                  </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
