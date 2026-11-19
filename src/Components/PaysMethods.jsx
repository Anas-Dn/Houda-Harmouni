import { CreditCard, Shield } from "lucide-react";


export default function PaysMethods() {
  return (
    <div className="py-20 px-92 flex flex-col items-center">
        <h3 className="mb-10 border-r-3 border-(--gold) text-lg font-bold text-(--gold) bg-[#dca0111a] w-fit px-3 py-1.5 rounded-sm relative after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">خطوات التسجيل</h3>
        <h1 className="text-5xl font-black text-(--purple-royal) mb-2">طرق</h1>
        <h2 className="text-5xl font-bold text-(--gold) mb-2">الدفع المتاحة</h2>
        <p className="relative text-center bg-[rgba(210,162,12,0.05)] border border-(--gold-light) rounded-2xl py-5 px-10 w-3/4 mt-7 text-lg font-medium text-(--purple-accent)">
            <div className="text-(--gold) absolute right-6">●</div>
             ملاحظة: لضمان جدية الحجز وجودة الخدمة رسوم التسجيل غير قابلة للاسترجاع بعد إتمام الدفع، إلا في حالات استثنائية خاصة. شكراً لتفهمكم .
        </p>


        <div className="flex gap-8 w-full my-15">

            <div className="flex-1 bg-[rgba(210,162,12,0.05)] px-10 py-10 border border-gray-200 rounded-4xl hover:border-(--gold) transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.2)] hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-13 h-13 bg-(image:--gold-shimmer) flex items-center justify-center rounded-xl"><CreditCard className="text-white w-8 h-8 " /></div>
                    <h1 className="text-2xl font-bold text-(--purple-royal)">التحويل البنكي</h1>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">اسم البنك</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">Banque Populaire</h2>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">صاحب الحساب</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">ABAHMANE HOUDA</h2>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-4">رقم الحساب (RIB)</h6>
                    <div className="relative bg-white border border-dashed border-yellow-900 py-3 px-4 rounded-2xl pl-24 mb-7">
                        <h2 dir="ltr" className="text-lg font-extralight">1 6 4  6 4 0  2 1 1 1 1 4 9 7 1 8 3 6 0 0 0 8 5 9 </h2>
                        <button className="absolute left-5 top-6 text-xs font-medium cursor-pointer bg-(--purple-deep) text-white py-2 px-3 rounded-lg
                        hover:bg-(--gold) transition-colors duration-300">نسخ</button>
                    </div>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">CODE SWIFT / BIC</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">BCPOMAMC</h2>
                </div>
            </div>

            <div className="flex-1 bg-[rgba(210,162,12,0.05)] px-10 py-10 border border-gray-200 rounded-4xl hover:border-(--gold) transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.2)] hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-13 h-13 bg-(image:--gold-shimmer) flex items-center justify-center rounded-xl"><Shield className="text-white w-8 h-8" /></div>
                    <h1 className="text-2xl font-bold text-(--purple-royal)">وكالات التحويل</h1>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">الوكالات المدعومة</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">Western Union / Ria / WafaCash / Cash Plus / Chaabi Cash / Damane Cash</h2>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">الاسم الكامل</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">ABAHMANE HOUDA</h2>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">رقم الهاتف</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">+212 661 491 819</h2>
                </div>
                <div>
                    <h6 className="text-xs text-gray-800 mb-2">المدينة</h6>
                    <h2 className="text-lg font-bold text-(--purple-royal) mb-7">طنجة (Tanger)</h2>
                </div>
            </div>

        </div>


        <div className="bg-[rgba(108,62,145,0.05)] w-full flex flex-col items-center py-9 px-5 border border-purple-200 rounded-2xl">
            <h2 className="text-lg font-medium mb-3 text-(--purple-deep)">بعد إتمام عملية الدفع، يرجى إرسال صورة وصل التحويل لتأكيد مكانك في البرنامج.</h2>
            <p className="text-sm font-medium mb-3 text-gray-400">* نود إعلامكم أن رسوم التسجيل غير قابلة للاسترجاع بعد إتمام الدفع، إلا في حالات استثنائية خاصة. شكراً لتفهمكم.</p>
            <h4 className="text-lg text-green-600 font-medium underline cursor-pointer">إرسال الوصل عبر الواتساب →</h4>
        </div>
    </div>
  )
}
