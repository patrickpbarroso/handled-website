type SecondaryTitleProps = {
    children: React.ReactNode;
};

const SecondaryTitle:  React.FC<SecondaryTitleProps> = ({ children }) => {
    return (
        <h1 className="text-[28px] font-bold text-white">
            { children }
        </h1>
    )
}

export default SecondaryTitle