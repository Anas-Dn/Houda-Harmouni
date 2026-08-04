import { BookOpen, Download, Sparkles } from "lucide-react";
import pic from "../assets-home/free-guide-cover.png";

export default function BookHome() {
  return (
    <div className="bg-white flex py-40 px-30">
      <div className="basis-1/2">
        <div>
            <img loading="lazy" src={pic} alt="" className="w-80 rounded-2xl UpDown " />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-center">
        <h1 className="flex items-center gap-2 border border-(--gold) py-2 px-5 mb-6 rounded-4xl bg-linear-[135deg] from-[#dca0111f] to-[#dca01105] w-fit"><Sparkles className="w-4 text-(--gold) h-4"/> <p className="text-md font-medium text-(--gold-dark)">هدية ترحيبية مجانية</p></h1>
        <p className="text-xl font-bold text-(--gold) mb-5">لا تعرف من أين تبدأ رحلة التغيير؟</p>
        <h1 className="w-full text-4xl font-bold text-(--purple-royal) mb-5">دليلك العملي للتشافي الذاتي والوعي</h1>
        <p className="leading-7 text-lg mb-4 text-(--purple-accent)">إذا كنت لا تعرف من أين تبدأ، أو تشعر بالحيرة، فهذا الدليل صُمم خصيصًا لمساعدتك على فهم عالمك الداخلي، والتحرر من العوائق النفسية، والبدء بخطوات عملية بسيطة نحو السلام الداخلي.</p>
        <div className="w-full flex gap-10 mt-2">
            <button className="w-full flex gap-3 bg-(--gold) justify-center cursor-pointer py-4 rounded-4xl hover:bg-(--gold-light) duration-300 ease-in-out hover:shadow-xl"><Download className="w-5 text-white"/> <h1 className="text-white font-medium">تحميل الكتيب مجاناً</h1></button>
            <button className="w-full flex gap-3  bg-gray-200 border border-gray-300 justify-center cursor-pointer py-4 rounded-4xl hover:border-(--purple-royal) hover:shadow-xl duration-300 ease-in-out"> <BookOpen className="w-5 text-(--purple-royal)"/> <h1 className="text-(--purple-royal) font-medium">أبواب وتفاصيل الكتيب</h1></button>
        </div>
      </div>
    </div>
  )
}
