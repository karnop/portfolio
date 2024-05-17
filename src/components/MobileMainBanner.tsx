"use client"
import React from 'react';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {Radio_Canada} from "next/font/google";
const gluten = Radio_Canada({
    subsets: ['latin'],
    weight: ["400"]// Adjust for the character sets you need
});

function MobileMainBanner() {
    return (
        <div className="bg-cover bg-stone-950 text-white h-screen relative overflow-y-hidden" id="bannersection">
            <Image src="/background1.jpg" alt="mountain2" width="400" height="10" quality={100}
                   className="z-10 opacity-80 absolute right-0 bottom-0 w-full"/>
            <div className="z-20 mt-24 px-8 flex flex-col items-center justify-center">


                <div className="md:basis-1/2 md:h-screen flex items-start md:mt-32 justify-center ">
                    <p className={`${gluten.className} z-40 text-slate-50 flex text-md md:text-xl lg:text-6xl text-center shadow-lg`}>
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'Hi, I code', // initially rendered starting point
                                1000,
                                'Hi, I am Manav',
                                1000,
                                'Hi, I do web development in NextJs',
                                1000,
                                'Hi, I am currently learning AI',
                                500,
                            ]}
                            speed={50}
                            style={{fontSize: '2em'}}
                            repeat={Infinity}
                        />
                    </p>
                </div>
                <div className="absolute top-64">
                    <a href="#"
                       className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                        <span
                            className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                        <span
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        <span
                            className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        <span
                            className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span
                            className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span
                            className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Documentation</span>
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 absolute right-3 bottom-3 z-50">
                <a href="https://github.com/karnop" target="_blank">
                    <Image src="/github.png" alt="github" height="30" width="30"
                           className="opacity-70 hover:opacity-100 hover:cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/manav_sanger" target="_blank">
                    <Image src="/instagram.png" alt="instagram" height="30" width="30"
                           className="opacity-60 hover:opacity-100"/>
                </a>
                <a href="https://www.youtube.com/channel/UCQFrVSG37kQe5I3JKcbdDhg" target="_blank">
                    <Image src="/youtube.png" alt="youtube" height="30" width="30"
                           className="opacity-70 hover:opacity-100"/>
                </a>
                <a href="https://www.linkedin.com/in/manav-sanger/" target="_blank">
                    <Image src="/linkedin.png" alt="linkedin" height="30" width="30"
                           className="opacity-70 hover:opacity-100"/>
                </a>
            </div>
        </div>
    );
}

export default MobileMainBanner;