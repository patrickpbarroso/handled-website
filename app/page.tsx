import FilledButton from "@/components/UI/Buttons/FilledButton";
import HeroSection from "@/components/home_page/HeroSection";
import HollowButton from "@/components/UI/Buttons/HollowButton";
import ParagraphText from "@/components/UI/Text/ParagraphText";
import Title from "@/components/UI/Text/Title";
import HowWeWorkCard from "@/components/home_page/HowWeWorkCard";
import OurServices from "@/components/home_page/OurServices";
import PortfolioCarousel from "@/components/home_page/PortfolioCarousel";
import Carousel from "@/components/UI/Figures/Carousel";
import OverlayCard from "@/components/UI/Cards/OverlayCard";
import SecondaryTitle from "@/components/UI/Text/SecondaryTitle";
import ServiceCard from "@/components/UI/Cards/ServiceCard";
import WhatWeDoCard from "@/components/home_page/WhatWeDoCard";
import WhyUsCard from "@/components/home_page/WhyUsCard";
import MakeYourVisionRealityCard from "@/components/home_page/MakeYourVisionReality";

export default function Home() {
  return (
    <div className="bg-[#292932]">
      {/* Hero section */}
      <div className="w-full h-[450px] bg-[#434357] clip-slant pt-8">
        <HeroSection />
      </div>

      {/* What we can do for you section */}
      <div className="absolute top-[450px]">
        <WhatWeDoCard />
      </div>

      {/* Our services section */}
      <OurServices />
      
      <div className="w-full h-[950px] bg-[#434357] clip-slant-second pt-8"/>

      {/* Why coose us section */}
      <div className="absolute top-[1400px] w-full font-inter">
        <WhyUsCard />
      </div>

      {/* Some of our projects carousel */}
      <div className="absolute top-[1950px] font-inter ml-[60px] pr-[20px]">
        <PortfolioCarousel />
      </div>

      {/* How we work section */}
      <div className="ml-[60px] mr-[20px]">
        <HowWeWorkCard />
      </div>

      {/* Make your vision reality section */}

      <div className="mt-[200px] w-full h-[250px] bg-[#434357] clip-slant-third pt-8"/>

      <div className="absolute top-[3350px]">
        <MakeYourVisionRealityCard />
      </div>
      
    </div>
    
    
  );
}
