const HollowButton = ({ content }: {content: string}) => {
    return (
        <button className="px-[10px] w-[120px] border border-[#BFBCCC] text-[#EEEEF8] rounded-[25px] text-lg">
            {content}
        </button>
    )
}

export default HollowButton