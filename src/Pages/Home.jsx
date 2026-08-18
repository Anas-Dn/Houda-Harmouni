import BookHome from "../Components/BookHome";
import Hero from "../Components/Hero";
import Questions from "../Components/Questions";
import Sec2 from "../Components/Sec2";
import Services_Home from "../Components/Services_Home";
import Slider_1 from "../Components/Slider_1";
import Testemonials from "../Components/Testemonials";
import Who_iam_Home from "../Components/Who_iam_Home";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider_1 />
      <Sec2 />
      <BookHome />
      <Who_iam_Home />
      <Services_Home />
      <Testemonials />
      <Questions />
    </div>
  )
}
