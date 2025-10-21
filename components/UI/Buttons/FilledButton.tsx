const FilledButton = ({ content = "", px = "10", py = "5", textSize = "16" }) => {
    return (
        <button
            style={{
                paddingLeft: `${px}px`,
                paddingRight: `${px}px`,
                paddingTop: `${py}px`,
                paddingBottom: `${py}px`,
                fontSize: `${textSize}px`,
            }}
            className="bg-[#3A58BA] text-[#EEEEF8] rounded-[25px]"
        >
            {content}
        </button>
    );
};

export default FilledButton;
