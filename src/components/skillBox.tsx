import React from 'react';
import Image from "next/image";

interface SkillItem {
    name: string;
    href: string;
}

interface SkillBoxProps {
    label: string;
    skills: SkillItem[];
}

function SkillBox({label, skills}: SkillBoxProps) {
    return (
        <div className="flex flex-col justify-between items-center rounded-lg shadow-lg mx-8 bg-transparent
                        backdrop-blur-xs p-4 relative h-fit">
            <div className="grid grid-cols-3 gap-2 mb-4 ">
                {skills.map(skill => (
                    <div
                        className="p-4 h-20 w-20 md:h-24 md:w-28 rounded-lg relative flex flex-col gap-2
                         justify-between items-center text-sm"
                        key={skill.name}>
                        <Image src={skill.href} alt={skill.name} width="80" height="80"
                               className="w-8 h-8 md:w-12 md:h-14"/>
                        <p className="text-xs absolute bottom-1">{skill.name}</p>
                    </div>
                ))}
            </div>
            <p className="text-xl font-semibold text-center">{label}</p>
        </div>
    );
}

export default SkillBox;