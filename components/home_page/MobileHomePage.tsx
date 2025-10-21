import HeroSection from "./HeroSection";
import HowWeWorkCard from "./HowWeWorkCard";
import MakeYourVisionRealityCard from "./MakeYourVisionReality";
import OurServices from "./OurServices";
import PortfolioCarousel from "./PortfolioCarousel";
import WhatWeDoCard from "./WhatWeDoCard";
import WhyUsCard from "./WhyUsCard";

const MobileHomePage = () => {
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
            <div className="absolute top-[1975px] font-inter ml-[60px] pr-[20px]">
                <PortfolioCarousel />
            </div>

            {/* How we work section */}
            <div className="ml-[60px] mr-[20px] mt-[60px]">
                <HowWeWorkCard />
            </div>

            {/* Make your vision ## section */}

            {/* <div className="mt-[200px] w-full h-[250px] bg-[#434357] clip-slant-third pt-8"/> */}

            <div className="relative mt-[30px] pb-[30px]">
                <div
                className="absolute bottom-0 w-full h-full bg-[#434357]"
                style={{
                    clipPath: 'polygon(0% 50%, 100% 40%, 100% 100%, 0% 100%)'
                }}
                ></div>
                <div className="relative">
                <MakeYourVisionRealityCard />
                </div>
            </div>

        
        </div>
    )
}

export default MobileHomePage;