import React from 'react';

type OverlayCardProps = {
    children: React.ReactNode;
};

const OverlayCard: React.FC<OverlayCardProps> = ({ children }) => {
    return (
        <div className="bg-[#23232C] flex flex-col min-h-[450px] justify-center items-center text-center text-[#E6E6F3] absolute top-[445px] text-inter ml-[60px] mr-[20px] px-3 py-[16px]">
            {children}
        </div>
    );
};

export default OverlayCard;