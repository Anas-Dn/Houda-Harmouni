import { faSquareInstagram, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets-home/abouthome.jpeg"

export default function AboutHero() {
  return (
    <div className="text-white gap-10 flex justify-center items-center pt-30 px-55">
      <div>
        <h1>من أنا؟</h1>
        <h1>هدى أبحمان</h1>
        <p>لايف كوتش أرافقك لتجاوز التوتر واستعادة سلامك الداخلي، من خلال تقنيات عميقة وبسيطة تساعدك على التغيير الحقيقي.</p>
        <span>لأن التغيير الحقيقي يبدأ من الداخل</span>
        <div className="mt-6 flex gap-6">
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTiktok} className="text-xl text-(--gold)"/></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faSquareInstagram} className="text-xl text-(--gold)" /></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faYoutube} className="text-xl text-(--gold)" /></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTelegram} className="text-xl text-(--gold)" /></div>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="w-130 rounded-4xl border border-(--gold) p-2"/>
      </div>
    </div>
  )
}
