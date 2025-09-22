import FilledButton from "./FilledButton"
import HollowButton from "./HollowButton"
import ParagraphText from "./ParagraphText"
import Title from "./Title"

const HeroSection = () => {
    return (
        <div>
            <Title/>
            <ParagraphText/>
            <div className="mx-15">
                <div className="flex justify-center space-x-[25px] mt-[32px]">
                    <div className="relative">
                    <FilledButton content="Contact Us" />

                    {/* Vertical line starts below the button */}
                    <div
                        className="absolute top-full h-[400%] ml-[60px] border-l-2 border-dashed bottom-0 w-[0.5px] border-[#BFBCCC]"
                    ></div>
                    </div>
                    <HollowButton content="About Us"/>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection