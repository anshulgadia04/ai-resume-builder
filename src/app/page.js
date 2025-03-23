
import HeroSection from "./components/HeroSection";
import PromotionSlider from "./components/PromotionSlider";
import ExploreFeatures from "./components/ExploreFeatures";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import HowItWorks from "./components/HowitWorks";
import Resume from "./components/Resume";

export default function Home() {
  return (
   <>
     <HeroSection />
     <PromotionSlider />
     <ExploreFeatures />
     <PricingSection />
     <HowItWorks />
     <FaqSection />
     <Resume/>
   </>
  );
}
