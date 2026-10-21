import AboutHero from "../Components/AboutHero";
import AboutSkills from "../Components/AboutSkills";
import AboutStory from "../Components/AboutStory";

export default function About() {
  return (
    <div className="relative bg-(--purple-royal)">
      <AboutHero />
      <AboutStory />
      <AboutSkills />
    </div>
  )
}
