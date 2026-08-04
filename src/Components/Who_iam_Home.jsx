import { MoveRight } from "lucide-react"
import pic from "../assets-home/abouthome.jpeg"
import { Link } from "react-router-dom"

export default function Who_iam_Home() {
  return (
    <div className="bg-(--purple-deep) relative">
        <hr className="absolute border-0 bg-(--gold) left-40 opacity-50 w-[0.25px] h-full " />
        <hr className="absolute border-0 bg-(--gold)  w-full h-[0.25px] opacity-50 z-0 top-50 " />
        <div className="py-8 px-24 flex">
            <div className="basis-1/2 flex justify-center items-center">
                <img loading="lazy" src={pic} alt="" className="w-90 rotate-3 border border-(--gold) p-3" />
            </div>
            <div className="basis-1/2 flex flex-col">
                <h1 className="mb-3 border-r-4 border-(--gold) text-lg font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm relative right-14 after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">من أنا</h1>
                <h1 className="text-7xl text-white font-bold">هدى</h1>
                <h1 className="text-7xl text-(--gold) mb-6 font-bold relative after:content-[''] after:absolute after:w-20 after:h-0.5 after:bg-(--gold) after:top-20 after:right-0">أبـــــــــحمان</h1>
                <p className="leading-8 mb-5 text-sm font-normal text-white w-4/5">أنا هدى، لايف كوتش أرافقك لاكتشاف قوتك الداخلية وتحقيق توازن حقيقي في حياتك. أساعدك على التحرر من التوتر والضغوط، وبناء ثقة راسخة بنفسك، من خلال برامج عملية تُحدث تغييراً ملموساً في حياتك.</p>
                <hr className="bg-(--gold-light) opacity-50 border-0 h-[0.25px]"/>
                <div className="flex gap-12 my-3">
                    <div>
                        <h1 className="text-(--gold) font-bold text-xl">+2000</h1>
                        <p className="text-gray-300 text-xs">مستفيد(ة)</p>
                    </div>
                    <div className="after:bg-(--gold) after:h-6 after:w-px after:absolute relative after:top-3 after:-right-6.5">
                        <h1 className="text-(--gold) font-bold text-xl">ICF</h1>
                        <p className="text-gray-300 text-xs">اعتماد دولي</p>
                    </div>
                    <div className="after:bg-(--gold) after:h-6 after:w-px after:absolute relative after:top-3 after:-right-6.5">
                        <h1 className="text-(--gold) font-bold text-xl">+5</h1>
                        <p className="text-gray-300 text-xs">سنوات تميز</p>
                    </div>
                </div>
                <hr className="bg-(--gold-light) opacity-50 border-0 h-[0.25px]"/>
                <h1 className="text-gray-300 text-xl mt-8 font-medium">التغيير الحقيقي يبدأ عندما تقرر أن تستثمر في نفسك.</h1>
                <Link to="/about" className="group text-white mt-auto flex gap-3 cursor-pointer items-center relative after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-(--gold) after:top-9 hover:after:w-33 after:duration-300 after:ease-in">
                    <p className="group-hover:text-(--gold) duration-300 ease-in-out">اكتشف القصة كاملة</p> 
                    <MoveRight className="opacity-0 group-hover:opacity-100 w-4 text-(--gold) duration-300 ease-in-out" />
                </Link>
            </div>
      </div>
    </div>
  )
}
