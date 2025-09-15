import FilledButton from "./FilledButton"
import HollowButton from "./HollowButton"
import ParagraphText from "./ParagraphText"
import Title from "./Title"

const HeroSection = () => {
    return (
        <div>
            <Title/>
            <ParagraphText/>
            <div className="flex justify-center space-x-[25px] mt-[32px]">
                <FilledButton content="Contact Us"/>
                <HollowButton content="About Us"/>
            </div>
        </div>
    )
}

export default HeroSection