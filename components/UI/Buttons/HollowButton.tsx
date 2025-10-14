const HollowButton = ({ content }: {content: string}) => {
    return (
        <button className="px-[20px] border border-[#BFBCCC] text-[#EEEEF8] rounded-[25px] text-[16px]">
            {content}
        </button>
    )
}

export default HollowButton