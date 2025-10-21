import FilledButton from "../UI/Buttons/FilledButton";
import HollowButton from "../UI/Buttons/HollowButton";
import OverlayCard from "../UI/Cards/OverlayCard";
import HeroSection from "./HeroSection";
import WhatWeDoCard from "./WhatWeDoCard";

const DesktopHomePage = () => {
  return (
    <div className="bg-[#292932] relative overflow-hidden py-10">
      <div
        className="absolute bottom-0 w-full h-full bg-[#434357] [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_100%)]"
      ></div>

        <div className="flex flex-row gap-x-10 justify-center px-50 relative p-12 text-white">
            {/* Text section — fills half */}
            <div className="flex flex-col w-1/2">
              <div>
                <p className="text-[13px]">Could your online presence be improved?</p>
                <h1 className="font-inter text-6xl">
                Let us handle it<span>.</span>
                </h1>
                <p className="text-[20px] font-thin">
                Bespoke designs professionally built to benefit your business. We will tailor your online presence to bring you success.
                </p>
              </div>
              <div className="flex flex-row w-full justify-center items-center gap-x-6 h-full">
                <FilledButton content="Contact Us" px="20" py="10" textSize="20"/>
                <HollowButton content="About Us" px="20" py="10" textSize="20"/>
              </div>
            </div>

            {/* Image section — fills half */}
            <div className="w-1/2 flex items-center justify-center">
                <img src="showcaseimage.png" className="w-full h-[300px] object-cover" />
            </div>
        </div>

        <div className="relative z-10 mt-10 mx-70">
          <WhatWeDoCard />
        </div>
        
    </div>
  );
};

export default DesktopHomePage;
