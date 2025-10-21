const HollowButton = ({ content="", px="10", py="5", textSize="16"}) => {
    return (
        <button 
            className={`px-[${px}px] py-[${py}px] border text-[#EEEEF8] rounded-[25px] text-[${textSize}px]`}>
            {content}
        </button>
    )
}

export default HollowButton