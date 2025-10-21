const HollowButton = ({ content="", px="10", py="5", textSize="16"}) => {
    return (
        <button 
            style={{
                paddingLeft: `${px}px`,
                paddingRight: `${px}px`,
                paddingTop: `${py}px`,
                paddingBottom: `${py}px`,
                fontSize: `${textSize}px`,
            }}
            className="border text-[#EEEEF8] rounded-[25px]">
            {content}
        </button>
    )
}

export default HollowButton