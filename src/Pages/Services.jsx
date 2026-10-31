import { Dot } from "lucide-react";

export default function Services() {
  return (
    <div className="flex gap-18 px-60 pt-40">


      <div className="basis-2/3">
        <div className="flex gap-2 justify-center mb-7">
          <h1 className="text-6xl text-(--purple-deep) font-bold text-center">اكتشف </h1>
          <h1 className="text-6xl text-(--gold) font-bold text-center"> خدماتنا</h1>
        </div>
        <p className="px-15 mb-15 text-center text-(--purple-accent) text-lg font-medium">مجموعة مختارة ومخصصة من برامج المرافقة، الماستركلاس والتأملات لدعم توسعك الشخصي.</p>
        <hr className="border-0 h-px bg-(--gold) opacity-40 mb-12"/>
      </div>

      <div className="basis-1/3 w-full h-full">
        <div className="shadow-2xl shadow-[rgb(0,0,0,0.2)] h-fit rounded-xl px-11 w-full pt-10 pb-12">

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer">الفئات</h1>
            <hr className="border-0 h-px w-7 opacity-60 bg-(--gold) "/>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"> <Dot className="absolute -right-6 -top-1 text-(--gold)" />  جميع الخدمات</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">10</h6>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  حصص فردية</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">3</h6>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  تأمل</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">0</h6>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xs font-extrabold text-[rgba(45,18,68,0.5)] cursor-pointer transition-all duration-300 relative
            hover:text-(--purple-royal) hover:-translate-x-2"><Dot className="absolute -right-6 -top-1 text-(--gold)" />  دورات وماستركلاس</h1>
            <h6 className="font-extrabold text-xs text-[rgba(45,18,68,0.5)]">7</h6>
          </div>
        </div>
      </div>


    </div>
  )
}
