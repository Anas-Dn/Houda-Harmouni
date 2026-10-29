
import { ArrowLeft, Download, ShieldCheck } from "lucide-react"
import image from "../assets-home/free-guide-cover.png"

export default function FreeGuideHome() {
  return (
    <div className="pt-40 pb-20 mx-60 flex gap-10">
        <div className="basis-1/2 mt-12">
            <h1 className="text-5xl font-extrabold text-white mb-3">دليلك العملي</h1>
            <h1 className="text-5xl font-extrabold text-(--gold) mb-9">للتشافي الذاتي والوعي</h1>
            <p className="text-xl font-medium text-white leading-9">إذا كنت لا تعرف من أين تبدأ رحلة التشافي، فقد صُمم هذا الدليل ليكون أول خطوة لك نحو فهم نفسك، والتحرر من العوائق الداخلية، واستعادة السلام الداخلي.</p>
            <div className="mt-7">
                <p className="flex justify-center mb-2"><ShieldCheck className="w-6 text-(--gold)"/></p>
                <p className="text-center text-(--gold) font-extrabold">بداية هادئة وآمنة • تطبيقات عملية • PDF مجاني</p>
            </div>
            <div className="flex w-full gap-4 mt-11">
                <div className="w-full flex gap-4 cursor-pointer text-white bg-(--gold) py-4 px-3 rounded-[40px] justify-center duration-300  transition-all
                hover:bg-(--gold-light) hover:scale-103"
                >
                    <p><Download /></p>
                    <p className="font-extrabold">تحميل الكتيب مجاناً الآن</p>
                </div>
                <div className="w-full flex gap-4 cursor-pointer text-white border border-purple-400 py-4 px-3 rounded-[40px] justify-center duration-300 transition-all
                hover:scale-103 hover:border-white"
                >
                    <p className="font-extrabold">اكتشف الخدمات والجلسات</p>
                    <p><ArrowLeft /></p>
                </div>
            </div>
        </div>
        <div className="basis-1/2 flex justify-center UpDown">
            <img src={image} alt="" className="w-80 rounded-l-xl rounded-r-3xl " />
        </div>
    </div>
  )
}
