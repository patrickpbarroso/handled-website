const ServiceCard = ({ imgPath = "", content = "" }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#434357] w-[180px] h-[120px] py-[25px] px-[40px] mr-[20px]">
            <img src={imgPath}/>
            <div className="relative flex flex-col items-center">
                <p className="text-[20px] z-10 text-thick-shadow">{content}</p>
                <div className="absolute bottom-0 w-[80px] h-[10px] bg-[#919EC9]"></div>
            </div>
        </div>
    )
}

export default ServiceCard