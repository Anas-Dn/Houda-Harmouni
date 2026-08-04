import pic1 from "../assets-home/service-seances.png";
import pic2 from "../assets-home/service-cours.png";
import pic3 from "../assets-home/service-meditation.png";

export default function Services_Home() {
  return (
    <div className="mt-30 mb-30 mx-30">
      <div className="flex gap-4 justify-center">
        <h1 className="text-6xl font-bold text-(--purple-deep)">برامجي</h1>
        <h1 className="text-6xl font-bold text-(--gold)">وخدماتي</h1>
      </div>
      <p className="flex justify-center mt-6 text-lg">أرافقك من خلال برامج عملية وجلسات موجهة لتحقيق التوازن وبناء الثقة في نفسك.</p>

      <div className="flex gap-10 h-160 mt-15 overflow-hidden">
        <div className="relative rounded-4xl basis-1/2 h-full cursor-pointer">
            <img src={pic1} loading="lazy" alt="" className="w-full h-full object-cover rounded-4xl" />
            <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent rounded-4xl"></div>
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div>
        </div>
        <div className="flex flex-col gap-10 basis-1/2 h-160">
            <div className="relative rounded-4xl h-75 cursor-pointer">
                <img src={pic2} loading="lazy" alt="" className=" object-cover rounded-4xl h-full w-full" />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div> 
            </div>
            <div className="relative rounded-4xl h-75 cursor-pointer">
                <img src={pic3} loading="lazy" alt="" className="object-cover rounded-4xl h-full w-full" />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent rounded-4xl"></div>
            </div>
        </div>
      </div>
    </div>
  )
}
