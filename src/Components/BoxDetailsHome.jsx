import { ArrowLeft } from "lucide-react";

export default function BoxDetailsHome({box}) {
  return (
    <div className="flex justify-center items-center gap-12 mt-38 px-70 mb-20">


        
        <div className="basis-1/2">
            <p className="mb-4 border-r-3 border-(--gold) text-lg font-bold text-(--gold) bg-[#dca0111a] w-fit px-3 py-1.5 rounded-sm relative right-14 after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">{box.littleHeader}</p>
            <h1 className="text-7xl font-bold text-(--purple-royal) mb-4">{box.h1}</h1>
            <h2 className="text-4xl font-bold text-(--gold) mb-7">{box.h2}</h2>
            <p className="text-[rgba(26,11,46,0.7)] text-2xl font-medium leading-10 mb-9">{box.description}</p>
            <hr className="text-(--gold-dark) mb-4 w-full opacity-40"/>
            <div className="flex justify-between">
                <div className="text-center basis-1/3">
                    <h2 className="text-(--gold) font-bold text-lg mb-2">المدة</h2>
                    <h4 className="text-(--purple-deep) font-bold text-[15px] mb-1.5">{box.duration1}</h4>
                    <h6 className="text-[13px] font-light">{box.duration2}</h6>
                </div>
                <div className="text-center basis-1/3 relative after:absolute after:bg-(--gold) after:h-10 after:w-px after:opacity-35 after:right-0 after:top-1/3">
                    <h2 className="text-(--gold) font-bold text-lg mb-2">الشكل</h2>
                    <h4 className="text-(--purple-deep) font-bold text-[15px] mb-1.5">{box.form1}</h4>
                    <h6 className="text-[13px] font-light">{box.form2}</h6>
                </div>
                <div className="text-center basis-1/3 relative after:absolute after:bg-(--gold) after:h-10 after:w-px after:opacity-35 after:right-0 after:top-1/3">
                    <h2 className="text-(--gold) font-bold text-lg mb-2">السعر</h2>
                    <h4 className="flex justify-center text-(--gold-dark) font-bold mb-1.5" dir="ltr">{box.priceDH}</h4>
                    <h6 className="font-bold text-(--purple-deep) text-[14px]">{box.priceEUR}</h6>
                </div>
            </div>
            <hr className="text-(--gold-dark) mt-4 w-full opacity-40 mb-12"/>
            <div className="flex justify-center">
                <button className="flex items-center gap-4 bg-(image:--gold-shimmer) text-white font-bold text-lg px-10 py-4 rounded-4xl cursor-pointer">
                    <p>سجلي الآن: طرق الدفع</p>
                    <ArrowLeft className="w-5"/>
                </button>
            </div>
        </div>

        <div className="basis-1/2">
            <div className="">
                <div className="p-4 bg-white">
                    <img src={box.image} alt={box.h1} className="rounded-4xl h-170 w-full object-cover"  />
                </div>
            </div>
        </div>


    </div>
  )
}
