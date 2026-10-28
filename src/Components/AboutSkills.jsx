import Circle from "./Circle";
import DashedLines from "./DashedLines";


export default function AboutSkills() {
  return (
    <div className="mt-15">


      <h1 className="text-7xl text-(--gold) text-center font-semibold mb-10">القيمة التي نعدك بتحقيقها</h1>
      <div className="h-280 w-full pb-30 relative">
        <DashedLines />

        <div className="absolute left-1/2 top-1/2 -translate-1/2 ">

            <div className="absolute w-80 -top-120 right-52">
              <Circle text1="الانسجام" text2="إيجاد محورك المركزي وسط الفوضى." />
            </div>
            <div className="absolute w-80 -top-90 left-60">
              <Circle text1="السكينة" text2="هدوء داخلي مستمر وقوي." />
            </div>
            <div className="absolute w-80 -top-54 -right-39">
              <Circle text1="التوسع" text2="تجاوز حدود منطقة الراحة الخاصة بك." />
            </div>
            <div className="absolute w-80 top-40 right-16">
              <Circle text1="الارتقاء" text2="الوصول إلى قمم جديدة من الوعي." />
            </div>

        </div>
      </div>



    </div>
  )
}
