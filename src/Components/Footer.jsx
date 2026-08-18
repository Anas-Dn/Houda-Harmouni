import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../assets-home/logo-premium.png";
import { faInstagram, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <hr className="border-px opacity-20 bg-gray-400 h-full " />
      <div className="grid grid-cols-4 pt-12 pb-5 px-36 gap-20">

        <div>
          <img src={pic} alt="" className="w-40 mb-3" />
          <p className="text-purple-400 leading-6 font-medium mb-6 text-sm">التميز في خدمة تحولك. نهج شمولي يجمع بين القوة الذهنية والسكينة العميقة لقادة الغد.</p>
          <div className="flex gap-2">
            <div><FontAwesomeIcon icon={faInstagram} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faTelegram} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faTiktok} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faYoutube} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
          </div>
        </div>
        <div>
          <h1 className="text-(--gold) font-bold mb-8 text-xs">استكشاف</h1>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الرئيسية</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">من أنا</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الخدمات والعروض</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الكتيب المجاني</p>
        </div>
        <div>
          <h1 className="text-(--gold) font-bold mb-8 text-xs">البرامج</h1>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">جلسات عبر الإنترنت</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">دروس مسجلة</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">تأملات</p>
        </div>
        <div className="min-w-fit">
          <h1 className="text-(--gold) font-bold mb-8 text-xs">اتصال</h1>
          <p dir="ltr" className="ml-26 gap-2 flex text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300" ><FontAwesomeIcon icon={faPhone} /><p>+212 661-491819</p></p>
          <p dir="ltr" className="ml-25 gap-2 flex text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300" ><FontAwesomeIcon icon={faPhone} /><p>+212 643-354739</p></p>
        </div>

      </div>
      <hr className="border-px opacity-10 bg-gray-400 h-full "/>
      <div className="px-36 py-6 flex justify-between">
        <h1 className="text-xs font-medium cursor-pointer">© 2026 HOUDA HARMONY. فن التوازن.</h1>
        <div className="flex gap-6">
          <h1 className="text-xs font-medium cursor-pointer">سياسة الخصوصية</h1>
          <h1 className="text-xs font-medium cursor-pointer">الشروط القانونية</h1>
        </div>
      </div>
    </div>
  )
}
