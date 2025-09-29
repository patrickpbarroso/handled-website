import FilledButton from "./FilledButton"
import HollowButton from "./HollowButton"
import ParagraphText from "./ParagraphText"
import Title from "./Title"

const HeroSection = () => {
    return (
        <div className="ml-[70px] mr-5">
            <Title>
                Professional Website Development <span className="text-[#3A58BA]">.</span>
            </Title>
            <ParagraphText>
                Custom designs professionally built to benefit your business. We'll tailor your online presence to bring you
                <span className="font-bold"> success</span>.
            </ParagraphText>
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