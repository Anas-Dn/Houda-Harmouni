import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../assets-home/logo-premium.png";
import { faInstagram, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#f3ede4]">
      <hr className="border-px opacity-20 bg-gray-400 h-full " />
      <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:1100px)]:grid-cols-4 pt-12 pb-5 px-10 sm:px-20 [@media(min-width:1390px)]:px-36 gap-20 place-items-center sm:place-items-start">

        <div className="flex flex-col items-center sm:items-start">
          <img src={pic} alt="" className="w-40 mb-3" />
          <p className="text-purple-400 leading-6 font-medium mb-6 text-sm sm:text-start text-center">التميز في خدمة تحولك. نهج شمولي يجمع بين القوة الذهنية والسكينة العميقة لقادة الغد.</p>
          <div className="flex gap-2">
            <div><FontAwesomeIcon icon={faInstagram} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faTelegram} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faTiktok} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
            <div><FontAwesomeIcon icon={faYoutube} className="border-purple-300 border rounded-full cursor-pointer text-(--purple-deep) p-2.5 hover:bg-(--purple-deep) hover:text-white duration-400 transition-all hover:-translate-y-2" /></div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-(--gold) font-bold sm:mb-8 mb-5 text-xs">استكشاف</h1>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الرئيسية</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">من أنا</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الخدمات والعروض</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">الكتيب المجاني</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-(--gold) font-bold sm:mb-8 mb-5 text-xs">البرامج</h1>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">جلسات عبر الإنترنت</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">دروس مسجلة</p>
          <p className="text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300">تأملات</p>
        </div>
        <div className="flex flex-col sm:justify-start sm:items-start items-center justify-center">
          <h1 className="text-(--gold) font-bold sm:mb-8 mb-5 text-xs">اتصال</h1>
          <p dir="ltr" className="ml-26 gap-2 flex text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300" ><FontAwesomeIcon icon={faPhone} /><p>+212 661-491819</p></p>
          <p dir="ltr" className="ml-25 gap-2 flex text-(--purple-royal) font-bold mb-4 text-sm hover:text-(--gold) cursor-pointer duration-300" ><FontAwesomeIcon icon={faPhone} /><p>+212 643-354739</p></p>
        </div>

      </div>
      <hr className="border-px opacity-10 bg-gray-400 h-full "/>
      <div className="lg:px-36 sm:px-20 px-10 sm:py-6 py-3 flex flex-col [@media(min-width:500px)]:flex-row gap-4 justify-between items-center">
        <h1 className="text-xs font-medium cursor-pointer">© 2026 HOUDA HARMONY. فن التوازن.</h1>
        <div className="flex gap-6">
          <h1 className="text-xs font-medium cursor-pointer">سياسة الخصوصية</h1>
          <h1 className="text-xs font-medium cursor-pointer">الشروط القانونية</h1>
        </div>
      </div>
    </div>
  )
}
