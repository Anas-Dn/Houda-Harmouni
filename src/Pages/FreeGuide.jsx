import FreeGuideAbout from "../Components/FreeGuideAbout";
import FreeGuideHome from "../Components/FreeGuideHome";

export default function FreeGuide() {
  return (
    <div className="bg-(--purple-royal) h-full w-full">
      <FreeGuideHome />
      <FreeGuideAbout />
      <div className="mt-20">
        <h1 className="opacity-0">h</h1>
      </div>
    </div>
  )
}
