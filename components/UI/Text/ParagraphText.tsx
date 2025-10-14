type ParagraphTextProps = {
    children: React.ReactNode;
};


const ParagraphText:  React.FC<ParagraphTextProps> = ({ children }) => {
    return (
        <p className="text-[16px] text-[#EEEEF8] mt-[15px] tracking-[0.05em] leading-[1.7em]">
            {children}
        </p>
    )
}

export default ParagraphText