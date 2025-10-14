import FilledButton from "@/components/hero_section/FilledButton";
import HeroSection from "@/components/hero_section/HeroSection";
import HollowButton from "@/components/hero_section/HollowButton";
import ParagraphText from "@/components/hero_section/ParagraphText";
import Title from "@/components/hero_section/Title";
import Carousel from "@/components/UI/Carousel";
import OverlayCard from "@/components/UI/OverlayCard";
import SecondaryTitle from "@/components/UI/SecondaryTitle";
import ServiceCard from "@/components/UI/ServiceCard";

export default function Home() {
  return (
    <div className="bg-[#292932]">
      {/* Hero section */}
      <div className="w-full h-[450px] bg-[#434357] clip-slant pt-8">
        <HeroSection />
      </div>

      {/* What we can do for you section */}
      <div className="absolute top-[450px]">
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
      </div>

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

      {/* Why coose us section */}
      <div className="w-full h-[950px] bg-[#434357] clip-slant-second pt-8"/>
      <div className="absolute top-[1400px] w-full font-inter">
        <OverlayCard height={700}>
          <SecondaryTitle>Why choose <span>Us</span>?</SecondaryTitle>
          <ParagraphText>
            We are small team of experienced developers with a big passion for building websites. Every project gets our
            full attention and care, and we treat your site as if it were our own
          </ParagraphText>
          <ul className="list-disc list-inside text-start mt-[20px] mx-[20px]">
            <li className="mb-[20px]">Proud of the work we deliver, with no shortcuts.</li>
            <li className="mb-[20px]">100% dedication to every project, big or small.</li>
            <li>A personal, friendly approach where you are a partner, not just a client.</li>
          </ul>
          <div className="mt-[20px]">
            <HollowButton content="About Us"/>
          </div>
          
        </OverlayCard>
      </div>

      {/* Some of our projects carousel */}
      <div className="absolute top-[2150px] font-inter ml-[60px] mr-[20px]">
        <div className="text-center mb-[10px]">
          <p className="text-[#D8D8ED] text-[24px]">
            Here is Some of Our Projects.
          </p>
        </div>
        <Carousel />
      </div>

      {/* How we work section */}
      <div className="mt-[250px] ml-[60px] text-center">
        <SecondaryTitle>How we work</SecondaryTitle>
      </div>
    </div>
    
    
  );
}
