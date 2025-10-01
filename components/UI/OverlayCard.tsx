import React from 'react';

type OverlayCardProps = {
    children: React.ReactNode;
    height?: number | string;
};

const OverlayCard: React.FC<OverlayCardProps> = ({ children, height }) => {
    return (
        <div 
            className="bg-[#23232C] flex flex-col min-h-[450px] justify-center items-center text-center text-[#E6E6F3] text-inter ml-[60px] mr-[20px] px-3 py-[16px]"
            style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}>
            {children}
        </div>
    );
};

export default OverlayCard;