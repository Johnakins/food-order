import FeaturedItems from "@/components/Homepage/FeaturedItems";
import Offer from "@/components/Homepage/Offer";
import Slider from "@/components/Homepage/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <FeaturedItems />
      <Offer />
    </main>
  )
}
