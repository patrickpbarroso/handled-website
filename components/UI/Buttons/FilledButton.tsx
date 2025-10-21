const FilledButton = ({ content, px="10", py="5", textSize="16"}: {content: string, px: string, py: string, textSize: string}) => {
    return (
        <button 
            className={`px-[${px}px] py-[${py}px] bg-[#3A58BA] text-[#EEEEF8] rounded-[25px] text-[${textSize}px]`}>
            {content}
        </button>
    )
}

export default FilledButton