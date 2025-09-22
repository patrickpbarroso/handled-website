import FilledButton from "@/components/hero_section/FilledButton";
import HeroSection from "@/components/hero_section/HeroSection";
import HollowButton from "@/components/hero_section/HollowButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#292932] bg-">
      <div className="w-full h-[450px] bg-[#434357] clip-slant pt-8">
        <HeroSection />
      </div>
      <div className="bg-[#23232C] justify-center align-center text-center text-[#E6E6F3] absolute top-[445px] text-inter ml-[70px] mr-[20px] px-[18px] py-[16px]">
        <p className="text-[28px] font-bold">What we can do for <span className="text-[#A1B0E0]">you</span></p>
        <p className="text-[16px] text-[#E6E6F3] mt-[12px] mb-[32px] tracking-[0.05em] leading-[1.7em]">
          Our services cover the whole process of bringing your business into the online world. 
          We help elevate your online presence with a professionally designed site optimised for search engine visibility, 
          complete security, and lightning quick speeds.
        </p>
        <FilledButton content="Get Started"/>
      </div>
      <div className="mt-80 justify-center items-center text-center text-[#E6E6F3]">
        <p className="text-[32px]">Our Services<span className="text-[#3A58BA]">.</span></p>
        <p className="text-lg text-[#E6E6F3] mt-[12px] mb-[32px] tracking-[0.05em] leading-[1.7em] ml-[70px] mr-[20px]">
          From Design to Maintenance, <span className="text-[#A1B0E0]">we’re with you</span> every step of the way.
        </p>
        <div className="ml-[70px] mr-[20px] pb-[20px]">
          <div className="flex flex-row mb-[20px]">
            <div className="flex flex-col justify-center items-center bg-[#434357] w-[180px] h-[120px] py-[25px] px-[40px] mr-[20px]">
                <img src="design.png"/>
                <div className="relative flex flex-col items-center">
                  <p className="text-[20px] z-10 text-thick-shadow">Design</p>
                  <div className="absolute bottom-0 w-[80px] h-[10px] bg-[#919EC9]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#434357] w-[180px] h-[120px] py-[25px] px-[40px]">
              <img src="develop.png" width="28"/>
              <div className="relative flex flex-col items-center">
                <p className="text-[20px] z-10 text-thick-shadow">Develop</p>
                <div className="absolute bottom-0 w-[80px] h-[10px] bg-[#919EC9]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center bg-[#434357] w-[180px] h-[120px] py-[25px] px-[40px] mr-[20px]">
              <img src="deploy.png"/>
              <div className="relative flex flex-col items-center">
                  <p className="text-[20px] z-10 text-thick-shadow">Deploy</p>
                <div className="absolute bottom-0 w-[80px] h-[10px] bg-[#919EC9]"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#434357] w-[180px] h-[120px] py-[25px] px-[40px]">
              <img src="mantain.png"/>
              <div className="relative flex flex-col items-center">
                <p className="text-[20px] z-10 text-thick-shadow">Mantain</p>
                <div className="absolute bottom-0 w-[80px] h-[10px] bg-[#919EC9]"></div>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <HollowButton content="View Services" />
          </div>
        </div>
      </div>
    </div>
    
  );
}
