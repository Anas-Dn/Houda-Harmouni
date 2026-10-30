import { Sparkles } from "lucide-react";


export default function FreeGuideAbout() {
  return (
    <div className="bg-white flex flex-col w-full rounded-[50px] px-16 pt-16 pb-14">
      
          <h1 className="text-center text-3xl text-(--purple-deep) mb-3 font-extrabold">ماذا ستجد داخل الدليل؟</h1>
          <h2 className="text-center text-lg font-extrabold text-(--gold)">من خلال هذا الكتيب ستكتشف:</h2>
      
      <div className="flex gap-6 mt-14">

        <div className="flex-1 border border-amber-100 bg-[rgb(250,246,238)] flex items-center justify-center flex-col py-10 px-18 rounded-4xl gap-3
                        hover:scale-102 hover:border-(--gold) transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(220,160,17,0.12)] ">
            <Sparkles className="text-(--gold) w-5 h-5"/>
          </div>
          <p className="text-center text-(--purple-deep) font-extrabold">كيف تبدأ رحلة التشافي.</p>
        </div>
        <div className="flex-1 border border-amber-100 bg-[rgb(250,246,238)] flex items-center justify-center flex-col py-10 px-18 rounded-4xl gap-3
                        hover:scale-102 hover:border-(--gold) transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(220,160,17,0.12)] ">
            <Sparkles className="text-(--gold) w-5 h-5"/>
          </div>
          <p className="text-center text-(--purple-deep) font-extrabold">أسئلة عميقة لفهم نفسك.</p>
        </div>
        <div className="flex-1 border border-amber-100 bg-[rgb(250,246,238)] flex items-center justify-center flex-col py-10 px-18 rounded-4xl gap-3
                        hover:scale-102 hover:border-(--gold) transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(220,160,17,0.12)] ">
            <Sparkles className="text-(--gold) w-5 h-5"/>
          </div>
          <p className="text-center text-(--purple-deep) font-extrabold">تمارين عملية للتفريغ والوعي.</p>
        </div>
        <div className="flex-1 border border-amber-100 bg-[rgb(250,246,238)] flex items-center justify-center flex-col py-10 px-18 rounded-4xl gap-3
                        hover:scale-102 hover:border-(--gold) transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(220,160,17,0.12)] ">
            <Sparkles className="text-(--gold) w-5 h-5"/>
          </div>
          <p className="text-center text-(--purple-deep) font-extrabold">خطوات بسيطة لاستعادة السلام الداخلي.</p>
        </div>

      </div>
    </div>
  )
}
