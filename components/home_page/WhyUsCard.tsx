import HollowButton from "../UI/Buttons/HollowButton";
import ParagraphText from "../UI/Text/ParagraphText";
import OverlayCard from "../UI/Cards/OverlayCard";
import SecondaryTitle from "../UI/Text/SecondaryTitle";

const WhyUsCard = () => {
    return (
        <OverlayCard height={500}>
            <SecondaryTitle>Why choose <span className="text-[#A1B0E0]">Us</span>?</SecondaryTitle>
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
    )
}

export default WhyUsCard;