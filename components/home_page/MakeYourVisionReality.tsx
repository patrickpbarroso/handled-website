import FilledButton from "../UI/Buttons/FilledButton";
import HollowButton from "../UI/Buttons/HollowButton";
import OverlayCard from "../UI/Cards/OverlayCard";
import ParagraphText from "../UI/Text/ParagraphText";
import SecondaryTitle from "../UI/Text/SecondaryTitle";
import Title from "../UI/Text/Title";

const MakeYourVisionRealityCard = () => {
    return (
        <OverlayCard height={350}>
            <div className="mx-[20px]">
                <SecondaryTitle>Make Your Vision a Reality<span className="text-[#3A58BA]">.</span></SecondaryTitle>
                <ParagraphText>
                    Bespoke designs professionally built to benefit your business. Well tailor your online presence to bring you <span className="font-bold">success</span>.
                </ParagraphText>
            </div>
            <div className="flex flex-row mt-[25px] justify-center gap-x-[10px]">
                <FilledButton content={"Contact Us"}/>
                <HollowButton content={"About Us"} px="10" py="5" textSize="16"/>
            </div>
        </OverlayCard>
    )
}

export default MakeYourVisionRealityCard;