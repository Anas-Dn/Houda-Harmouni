import { CreditCard, Shield } from "lucide-react";


export default function PaysMethods() {
  return (
    <div className="py-20 px-92 flex flex-col items-center">
        <h3 className="mb-10 border-r-3 border-(--gold) text-lg font-bold text-(--gold) bg-[#dca0111a] w-fit px-3 py-1.5 rounded-sm relative after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">خطوات التسجيل</h3>
        <h1 className="text-5xl font-black text-(--purple-royal) mb-2">طرق</h1>
        <h2 className="text-5xl font-bold text-(--gold) mb-2">الدفع المتاحة</h2>
        <p className="relative text-center bg-[rgba(210,162,12,0.05)] border border-(--gold-light) rounded-2xl py-5 px-10 w-3/4 mt-7 text-lg font-medium text-(--purple-accent)">
            <div className="text-(--gold) absolute right-6">●</div>
             ملاحظة: لضمان جدية الحجز وجودة الخدمة رسوم التسجيل غير قابلة للاسترجاع بعد إتمام الدفع، إلا في حالات استثنائية خاصة. شكراً لتفهمكم .</p>
        <div className="flex gap-8 w-full my-15">
            <div className="flex-1 h-150 bg-[rgba(210,162,12,0.05)] px-10 py-6 border border-gray-200 rounded-4xl hover:border-(--gold) transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.2)] hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-13 h-13 bg-[image:var(--gold-shimmer)] flex items-center justify-center rounded-xl"><CreditCard className="text-white w-8 h-8 " /></div>
                    <h1 className="text-2xl font-bold text-(--purple-royal)">التحويل البنكي</h1>
                </div>
            </div>
            <div className="flex-1 h-150 bg-[rgba(210,162,12,0.05)] px-10 py-6 border border-gray-200 rounded-4xl hover:border-(--gold) transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.2)] hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-13 h-13 bg-[image:var(--gold-shimmer)] flex items-center justify-center rounded-xl"><Shield className="text-white w-8 h-8" /></div>
                    <h1 className="text-2xl font-bold text-(--purple-royal)">وكالات التحويل</h1>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}
