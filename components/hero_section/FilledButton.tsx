const FilledButton = ({ content }: {content: string}) => {
    return (
        <button className="w-[120px] py-[5px] bg-[#3A58BA] text-[#EEEEF8] rounded-[25px] text-lg">
            {content}
        </button>
    )
}

export default FilledButton