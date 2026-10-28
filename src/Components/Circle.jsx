
export default function Circle({text1 , text2}) {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="relative h-13 w-13 rounded-full border-2 border-(--gold) " >
              <div className="absolute right-px top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white " />
        </div>
        <h1 className="text-2xl font-extrabold mt-3 text-(--gold)">{text1}</h1>
        <h2  className="text-xl font-medium mt-2 text-gray-300">{text2}</h2>
    </div>
  )
}
