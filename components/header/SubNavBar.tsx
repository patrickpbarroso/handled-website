const SubNavBar = ({ height = "h-[5vh]" }) => {
    return (
            <div className={`relative w-full ${height} bg-[#23232C] border-t border-b border-[#BFBCCC]`}>
                <div className="absolute left-0 top-1/2 w-full h-[1px] bg-[#BFBCCC] -translate-y-1/2"></div>
            </div>
    )
}

export default SubNavBar