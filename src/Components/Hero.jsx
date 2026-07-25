import Houda from "../assets-home/houda.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faTelegram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen pt-30 pb-4 px-45 flex gap-20">
       
       <h1 className="absolute text-[24rem] font-bold text-purple-400/10  -z-10">HOUDA</h1>
      
      <img src={Houda} alt=""className="w-120 h-full rounded-4xl object-cover object-center" />
      <div className="flex flex-col justify-center ">
        <h4 className="mb-10 border-r-4 border-(--gold) text-lg font-medium text-(--gold) bg-[#dca0111a] w-fit px-3 py-2 rounded-sm relative right-14 after:absolute after:w-10 after:h-px after:bg-(--gold) after:-right-13 after:top-1/2">مدربة حياة معتمدة</h4>
        <h1 className="mb-3 text-7xl text-(--purple-royal) font-medium">هدى ابـحمان</h1>
        <h3 className="mb-8 text-4xl text-(--gold) font-medium">رحلتك نحو السلام الداخلي تبدأ هنا</h3>
        <p className="mb-6 text-2xl font-light text-(--purple-accent)">لأنك تستحق حياة أكثر هدوءًا وتوازنًا، أرافقك بخطوات بسيطة وعميقة نحو التغيير.</p>
        <div className="mt-6 flex gap-6">
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTiktok} className="text-xl text-(--gold)"/></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faSquareInstagram} className="text-xl text-(--gold)" /></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faYoutube} className="text-xl text-(--gold)" /></div>
            <div className="hover:-translate-y-2 hover:border-(--gold) duration-400 transition-all bg-[#2d12440d] flex items-center justify-center p-3 rounded-xl cursor-pointer border border-[#dca01133]"><FontAwesomeIcon icon={faTelegram} className="text-xl text-(--gold)" /></div>
        </div>
      </div>

    </div>
  )
}
