import React from 'react';
import Image from "next/image";
import {User} from "@/lib/utils";

function MobileAboutMe(user: User) {
    return (
        <div className=" text-white h-screen relative overflow-y-hidden" id="aboutsection">
            <Image src="/background3.jpg" alt="mountain2" width="400" height="720" quality={100}
                   className="-z-10 opacity-100 absolute right-0 bottom-0 w-full h-screen"/>

            <div className="flex flex-col z-50 w-full">
                <Image src="/paperpin.png" alt="paper clip" width="100" height="100"
                       className="z-40 mt-14 rotate-90 ml-16 text-white"/>

                <div className=" h-48 w-full -mt-16 top-20 flex items-center justify-center">
                    <div
                        className="overflow-hidden w-48 h-48 bg-stone-900 rounded-full flex items-center justify-center">
                        <Image src="/myimage.jpg" alt="my image" width="280" height="100" quality="100"
                               className="w-48 h-48 opacity-80"/>
                    </div>
                </div>

                <div className="h-40 mt-2 mx-3 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold font-mono text-black">About</h2>
                    <p className="text-xl font-mono text-stone-900 text-center backdrop-blur-md">Web Developer, AI
                        Enthusiast. Pursuing Computer
                        Science and Engineering from Amity University, Noida.</p>
                </div>

                <div className="h-40 mt-36 mx-3 flex flex-col items-center px-8">
                    <h2 className="text-2xl font-semibold font-mono text-stone-300">Interests</h2>
                    <div className="grid grid-cols-4 mt-8 text-lg ">
                        <p className="text-stone-500">Debates</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p className="text-stone-700">Public Speaking</p>
                        <p></p>
                        <p className="text-stone-400">Mathematics</p>
                        <p></p>
                        <p></p>
                        <p className="text-stone-400">Artificial Intelligence</p>
                        <p></p>
                        <p className="text-stone-700">Travel</p>
                        <p></p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MobileAboutMe;