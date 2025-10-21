import FilledButton from "../UI/Buttons/FilledButton";
import ParagraphText from "../UI/Text/ParagraphText";
import OverlayCard from "../UI/Cards/OverlayCard";
import SecondaryTitle from "../UI/Text/SecondaryTitle";

const WhatWeDoCard = () => {
    return (
        <OverlayCard>
          <SecondaryTitle>
            What we can do for <span className="text-[#A1B0E0]">you</span>
          </SecondaryTitle>
          <ParagraphText>
            Our services cover the whole process of bringing your business into the online world. 
            We help elevate your online presence with a professionally designed site optimised for search engine visibility, 
            complete security, and lightning quick speeds.
          </ParagraphText>
          <div className="mt-[20px] block md:hidden">
            <FilledButton content="Get Started" px="10" py="5" textSize="16"/>
          </div>
        </OverlayCard>
    )
}

export default WhatWeDoCard;