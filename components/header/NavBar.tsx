'use client'
import Image from "next/image";
import Link from "next/link";
import HandledLogo from "@/public/HandledLogo.png";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="top-0 w-full h-[50px] shadow-xl bg-[#343338]">
            <div className="flex justify-between items-center h-full w-full px-[60px]">
                <div>
                    <Link href="\">
                        <Image
                        src={HandledLogo}
                        alt="Handled logo"
                        width="100"
                        height="20"
                        className="cursor-pointer"
                        priority
                        />
                    </Link>
                    
                </div>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="\about">
                            <li className="ml-10 uppercase hover:border-b text-x1 text-white">About Us</li>
                        </Link>
                        <Link href="\about">
                            <li className="ml-10 uppercase hover:border-b text-x1 text-white">Services</li>
                        </Link>
                        <Link href="\about">
                            <li className="ml-10 uppercase hover:border-b text-x1 text-white">Pricing</li>
                        </Link>
                        <Link href="\about">
                            <li className="ml-10 uppercase hover:border-b text-x1 text-white">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} color="#CACACA"/>
                </div>
            </div>
            <div className={
                menuOpen 
                ? "fixed top-0 w-[100%] sm:hidden h-[400px] bg-[#343338] p-10 ease-in-out duration-500 z-50"
                : "fixed top-[-100%] w-[100%] h-[40%] op-0 ease-in duration-200 z-50"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={30} color={"#CACACA"}/>
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href="\">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-[#CACACA]">
                                Home
                            </li>
                        </Link>
                        <Link href="\about">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-[#CACACA]">
                                About Us
                            </li>
                        </Link>
                        <Link href="\services">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-[#CACACA]">
                                Services
                            </li>
                        </Link>
                        <Link href="\pricing">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-[#CACACA]">
                                Pricing
                            </li>
                        </Link>
                        <Link href="\">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-[#CACACA]">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar