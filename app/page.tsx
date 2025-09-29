import FilledButton from "@/components/hero_section/FilledButton";
import HeroSection from "@/components/hero_section/HeroSection";
import HollowButton from "@/components/hero_section/HollowButton";
import ParagraphText from "@/components/hero_section/ParagraphText";
import Title from "@/components/hero_section/Title";
import OverlayCard from "@/components/UI/OverlayCard";
import SecondaryTitle from "@/components/UI/SecondaryTitle";
import ServiceCard from "@/components/UI/ServiceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#292932] bg-">
      {/* Hero section */}
      <div className="w-full h-[450px] bg-[#434357] clip-slant pt-8">
        <HeroSection />
      </div>

      {/* What we can do for you section */}
      <OverlayCard>
        <SecondaryTitle>
          What we can do for <span className="text-[#A1B0E0]">you</span>
        </SecondaryTitle>
        <ParagraphText>
          Our services cover the whole process of bringing your business into the online world. 
          We help elevate your online presence with a professionally designed site optimised for search engine visibility, 
          complete security, and lightning quick speeds.
        </ParagraphText>
        <div className="mt-[20px]">
          <FilledButton content="Get Started"/>
        </div>
      </OverlayCard>

      {/* Our services section */}
      <div className="ml-[60px] mt-[400px] justify-center items-center text-center text-[#E6E6F3]">
        <Title>
          Our Services<span className="text-[#3A58BA]">.</span>
        </Title>
        <ParagraphText>
          From Design to Maintenance, <span className="text-[#A1B0E0]">we’re with you</span> every step of the way.
        </ParagraphText>
        <div className="mt-[20px] pb-[20px]">
          <div className="flex flex-row mb-[20px] justify-center items-center">
            <ServiceCard 
              imgPath="design.png"
              content="Design"
            />
            <ServiceCard 
              imgPath="develop.png"
              content="Develop"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <ServiceCard 
              imgPath="deploy.png"
              content="Deploy"
            />
            <ServiceCard
              imgPath="mantain.png"
              content="Maintain"
            />

          </div>
          <div className="mt-[20px]">
            <HollowButton content="View Services" />
          </div>
        </div>
      </div>

      
    </div>
    
  );
}
