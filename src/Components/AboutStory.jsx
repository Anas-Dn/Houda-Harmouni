
export default function AboutStory() {
  return (
    <div className="w-full bg-white rounded-[80px] py-20 flex flex-col items-center">

      <h1 className="text-3xl font-bold text-(--gold-dark) mb-10">هدى أبـحـمــان</h1>
      <div className="flex justify-center items-center gap-6 mb-8">
        <hr className="w-10 text-(--gold) opacity-60"/>
         <span className="text-(--gold) text-2xl">✦</span>
         <hr className="w-10 text-(--gold) opacity-60"/>
      </div>
      <p className="w-230 text-center mb-14 text-2xl font-light leading-10">هدى أبحمان هي كوتش حياة متخصصة في مرافقة الأفراد نحو تحقيق التوازن والتميز. من خلال تقنيات مبتكرة ونهج شمولي، تساعدك على اكتشاف إمكاناتك الكاملة وتحويل حياتك نحو الأفضل، مع التركيز على التناغم بين العقل والجسد. تقدم جلسات التنفس التأملي، التنويم الإيحائي، وتقنيات التحرر الجسدي لمساعدتك على تطوير ذاتك وتحقيق أهدافك</p>
      <div className="flex gap-7 mb-16">
        <div className="rounded-4xl border border-(--gold) bg-amber-50 text-(--gold) text-sm font-semibold py-3 px-7">التنويم الإيحائي</div>
        <div className="rounded-4xl border border-(--gold) bg-amber-50 text-(--gold) text-sm font-semibold py-3 px-7">التنفس التأملي</div>
        <div className="rounded-4xl border border-(--gold) bg-amber-50 text-(--gold) text-sm font-semibold py-3 px-7">التحرر الجسدي</div>
      </div>
      <hr className="w-200 h-px text-(--gold) opacity-40"/>
      <h2 className="mt-16 mb-8 text-2xl text-(--gold) font-bold">الشهادات والاعتمادات</h2>
      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-medium"> <span className="text-(--gold) ml-2 text-xl">✦</span> معالجة بالتنويم الإيحائي (خريجة ACHE)</h4>
        <h4 className="text-xl font-medium"> <span className="text-(--gold) ml-2 text-xl">✦</span> لايف كوتش معتمدة من WIN BE THE WINNER</h4>
        <h4 className="text-xl font-medium"> <span className="text-(--gold) ml-2 text-xl">✦</span> معتمدة من الاتحاد الدولي للكوتشينغ</h4>
        <h4 className="text-xl font-medium"> <span className="text-(--gold) ml-2 text-xl">✦</span> ممارِسة معتمدة دوليًا في التنفس التأملي</h4>
        <h4 className="text-xl font-medium"> <span className="text-(--gold) ml-2 text-xl">✦</span> خريجة المركز الدولي للتنمية البشرية</h4>
      </div>

    </div>
  )
}
