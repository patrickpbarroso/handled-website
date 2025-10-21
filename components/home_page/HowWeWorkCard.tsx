import Title from "../UI/Text/Title";
import SecondaryTitle from "../UI/Text/SecondaryTitle";
import ParagraphText from "../UI/Text/ParagraphText";
import FilledButton from "../UI/Buttons/FilledButton";

const HowWeWorkCard = () => {
    return (
        <div className="mt-[20px] text-center">
            <Title>
                How we work<span className="text-[#3A58BA]">.</span>
            </Title>
            <div className="bg-[#434357] border border-[#d8d8d8] py-[10px] px-[15px] mt-[20px] text-start">
                <div className="mb-[40px]">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/checkbox.png" className="w-[35px] h-[35px]"/>
                        <div className="flex flex-col text-start">
                            <p className="font-bold text-white text-[22px]">Collaborative design</p>
                            <p className="text-[#AEAEAE]">your vision guides every step</p>
                        </div>
                    </div>
                    <ParagraphText>
                        <span className="font-bold">Our process involves a clear and structured plan</span>, so you are never left in the dark. 
                        We work closely with you during the design phase to create a website that reflects 
                        your vision while guiding you with our expertise. 
                    </ParagraphText>
                </div>

                <div className="mb-[40px]">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/checkbox.png" className="w-[35px] h-[35px]"/>
                        <div className="flex flex-col text-start">
                            <p className="font-bold text-white text-[22px]">Seamless development</p>
                            <p className="text-[#AEAEAE]">clean, responsive, functional build</p>
                        </div>
                    </div>
                    <ParagraphText>
                        <span className="font-bold">We bring your vision to life with clean, functional, and responsive code</span>, 
                        using your feedback to ensure the final product matches your needs.
                    </ParagraphText>
                </div>

                <div className="mb-[40px]">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/checkbox.png" className="w-[35px] h-[35px]"/>
                        <div className="flex flex-col text-start">
                            <p className="font-bold text-white text-[22px]">Ongoing maintenance</p>
                            <p className="text-[#AEAEAE]">support that never leaves you behind</p>
                        </div>
                    </div>
                    <ParagraphText>
                        <span className="font-bold">Our process involves a clear and structured plan</span>, so you are never left in the dark. 
                        We work closely with you during the design phase to create a website that reflects your vision while guiding you with our expertise. 
                    </ParagraphText>
                </div>
                <div className="justify-center align-center text-center mb-[10px]">
                    <FilledButton content="Get Started" px="10" py="5" textSize="16"/>
                </div>
                
            </div>
        </div>
    )
}

export default HowWeWorkCard;