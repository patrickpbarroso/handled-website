import FilledButton from "../UI/Buttons/FilledButton"
import HollowButton from "../UI/Buttons/HollowButton"
import ParagraphText from "../UI/Text/ParagraphText"
import Title from "../UI/Text/Title"

const HeroSection = () => {
    return (
        <div className="ml-[50px] mr-[20px]">
            <Title>
                Professional Website Development <span className="text-[#3A58BA]">.</span>
            </Title>
            <ParagraphText>
                Custom designs professionally built to benefit your business. Well tailor your online presence to bring you
                <span className="font-bold"> success</span>.
            </ParagraphText>
            <div>
                <div className="flex justify-center space-x-[10px] mt-[20px]">
                    <div className="relative">
                    <FilledButton content="Contact Us" px="10" py="5" textSize="16"/>

                    {/* Vertical line starts below the button */}
                    <div
                        className="absolute top-full h-[400%] ml-[60px] border-l-2 border-dashed bottom-0 w-[0.5px] border-[#BFBCCC]"
                    ></div>
                    </div>
                    <HollowButton content="About Us" px="10" py="5" textSize="16"/>
                </div>
            </div> 
        </div>
    )
}

export default HeroSection