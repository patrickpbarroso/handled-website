import HeroSection from "@/components/home_page/HeroSection";
import HowWeWorkCard from "@/components/home_page/HowWeWorkCard";
import OurServices from "@/components/home_page/OurServices";
import PortfolioCarousel from "@/components/home_page/PortfolioCarousel";
import WhatWeDoCard from "@/components/home_page/WhatWeDoCard";
import WhyUsCard from "@/components/home_page/WhyUsCard";
import MakeYourVisionRealityCard from "@/components/home_page/MakeYourVisionReality";
import MobileHomePage from "@/components/home_page/MobileHomePage";
import DesktopHomePage from "@/components/home_page/DesktopHomePage";

export default function Home() {
  return (
    <div>
      {/* mobile */}
      <div className="block md:hidden">
        <MobileHomePage />
      </div>

      {/* desktop */}
      <div className="hidden md:block">
        <DesktopHomePage />
      </div>
    </div>
  );
}
