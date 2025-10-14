"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ParagraphText from "../hero_section/ParagraphText";

const images = [
    ["/setiaspa.png", "Sepia's Spa is a business who offers spa services in Malaysia.", "/"],
    ["/tastenorfolk.png",  "Sed id mauw joi namerius suckt", "/"],
    ["/setiaspa.png",  "Sed id vilis lapila zume suscipt lectures", "/"],
];

export default function Carousel(){
    const [emblaRef] = useEmblaCarousel({ loop: false})

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
                {images.map((src, index) => (
                    <div className="flex-[0_0_90%]" key={index}>
                        <a href={src[2]}>
                            <Image
                                src={src[0]}
                                alt={`Slide ${index}`}
                                width={1200}
                                height={600}
                                
                            />
                            <div className="bg-[#24242C] font-lato text-center pt-[30px] pb-[15px] mt-[-30px] mx-[10px] px-[10px]">
                                <ParagraphText>
                                    {src[1]}
                                </ParagraphText>
                            </div>
                        </a>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}