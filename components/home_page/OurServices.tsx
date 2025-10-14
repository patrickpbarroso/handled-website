import HollowButton from "../UI/Buttons/HollowButton";
import ParagraphText from "../UI/Text/ParagraphText";
import Title from "../UI/Text/Title";
import ServiceCard from "../UI/Cards/ServiceCard";

const HeroSection = () => {
    return (
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
    )
}

export default HeroSection;