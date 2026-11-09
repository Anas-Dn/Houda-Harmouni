import { ArrowLeft, Dot } from "lucide-react";
import { useContext } from "react";
import {DataContext} from '../context/DataContext'
import { Link } from "react-router-dom";


export default function Services() {

  const {data} = useContext(DataContext)
  return (
    <div className="flex gap-8 px-50 pt-40">


      <div className="basis-3/4">
        <div className="flex gap-2 justify-center mb-7">
          <h1 className="text-6xl text-(--purple-deep) font-bold text-center">اكتشف </h1>
          <h1 className="text-6xl text-(--gold) font-bold text-center"> خدماتنا</h1>
        </div>
        <p className="px-15 mb-15 text-center text-(--purple-accent) text-lg font-medium">مجموعة مختارة ومخصصة من برامج المرافقة، الماستركلاس والتأملات لدعم توسعك الشخصي.</p>
        <hr className="border-0 h-px bg-(--gold) opacity-20 mb-12"/>
        <div className="grid grid-cols-3 gap-8">
          {data.map((box) => {
            return(
            <div key={box.id} className="w-full h-100">
              <div className="relative h-full w-full rounded-2xl cursor-pointer border border-(--purple-dark)">
                <img src={box.image} alt={box.h1} className="h-full w-full bg-cover bg-center rounded-2xl" />
                <div className="absolute right-0 top-0 py-6 px-8">
                  <h6>{box.littleHeader}</h6>
                  <h2>{box.h1}</h2>
                  <hr />
                  <h6>الاستثمار:</h6>
                  <h3 className="flex justify-end-safe" dir="ltr">{box.priceDH}</h3>
                  <h4>{box.priceEUR}</h4>
                  <Link className="flex ">
                    <h4>اكتشف المزيد</h4>
                    <ArrowLeft />
                  </Link>
                </div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] rounded-2xl"></div>
              </div>
            </div>
            )
          })}
        </div>
      </div>




      <div className="basis-1/4 w-full h-full">
        <div className="shadow-2xl shadow-[rgb(0,0,0,0.2)] h-fit rounded-xl px-11 w-full pt-10 pb-12">

          <div className="flex justify-between items-center mb-10">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer">الفئات</h1>
            <hr className="border-0 h-px w-7 opacity-60 bg-(--gold) "/>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"> <Dot className="absolute -right-6 -top-1 text-(--gold)" />  جميع الخدمات</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">10</h6>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  حصص فردية</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">3</h6>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  تأمل</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">0</h6>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  دورات وماستركلاس</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">7</h6>
          </div>
        </div>
      </div>


    </div>
  )
}
