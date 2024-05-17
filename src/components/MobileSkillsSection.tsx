import React from 'react';
import SkillBox from "@/components/skillBox";
import {authenticationSkills, backEndSkills, frontEndSkills} from "@/lib/utils";
import Image from "next/image";
import {Poppins, Radio_Canada} from "next/font/google";

const radioCanada = Radio_Canada({
    subsets: ['latin'],
    weight: ["700"]// Adjust for the character sets you need
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"]
})
function MobileSkillsSection() {
    return (
        <div className="bg-zinc-200 md:bg-stone-950 h-screen flex flex-col relative overflow-y-hidden"
             id="skillsection">
            {/*<div className="bg-gradient-to-b from-stone-950 to-zinc-200 h-12 w-full -mt-1"></div>*/}

            <div className="mt-4 flex items-center justify-center">
                <p className={`${radioCanada.className} text-2xl md:text-4xl lg:text-6xl z-40 mt-14`}>Skills</p>
            </div>

            <div
                className="flex flex-col h-full md:flex-row lg:items-start items-center justify-center  gap-4 z-20 md:mt-20">
                <SkillBox label="Front-End Development" skills={frontEndSkills}/>
                <SkillBox label="Back-End Development" skills={backEndSkills}/>
                <SkillBox label="Authentication" skills={authenticationSkills}/>
            </div>

            <Image src="/background2.png" alt="mountain2" width="400" height="10" quality="100"
                   className="md:hidden z-10 opacity-80 absolute right-0 bottom-0 w-full"/>

        </div>
    );
}

export default MobileSkillsSection;