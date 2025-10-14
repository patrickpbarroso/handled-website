"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ParagraphText from "../Text/ParagraphText"

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
                            <div className="relative w-full aspect-[16/9]"> {/* no fixed px, responsive */}
                            <Image
                            src={src[0]}
                            alt={`Slide ${index}`}
                            width={1200}   // intrinsic width of your image
                            height={800}   // intrinsic height of your image
                            />
                            </div>
                            <div className="bg-[#24242C] pt-[5px] mt-[-10px] pb-[10px] text-center">
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