import { faSquareInstagram, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets-home/abouthome.jpeg"

export default function AboutHero() {
  return (
    <div className="text-white gap-10 flex justify-center items-center py-30 px-55">
      <div >
        <h1 className="text-8xl font-black mb-2">من أنا؟</h1>
        <h1 className="text-8xl font-black mb-2 text-(--gold)">هدى أبحمان</h1>
        <p className="text-2xl font-normal mt-7 w-4/5">لايف كوتش أرافقك لتجاوز التوتر واستعادة سلامك الداخلي، من خلال تقنيات عميقة وبسيطة تساعدك على التغيير الحقيقي.</p>
        <span className="text-lg text-(--gold) mt-6 block font-medium">لأن التغيير الحقيقي يبدأ من الداخل</span>
        <div className="mt-6 flex gap-6">
            <div className="group hover:shadow-[0_2px_10px_rgba(255,215,0,0.7)] hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTiktok} className="text-xl group-hover:text-(--gold-light) text-(--gold)"/></div>
            <div className="group hover:shadow-[0_2px_10px_rgba(255,215,0,0.7)] hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faSquareInstagram} className="text-xl group-hover:text-(--gold-light) text-(--gold)" /></div>
            <div className="group hover:shadow-[0_2px_10px_rgba(255,215,0,0.7)] hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faYoutube} className="text-xl group-hover:text-(--gold-light) text-(--gold)" /></div>
            <div className="group hover:shadow-[0_2px_10px_rgba(255,215,0,0.7)] hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTelegram} className="text-xl group-hover:text-(--gold-light) text-(--gold)" /></div>
        </div>
      </div>
      <div className="basis-1/2">
        <img src={image} alt="" className="w-130 rounded-4xl border border-(--gold) p-1"/>
      </div>
    </div>
  )
}
