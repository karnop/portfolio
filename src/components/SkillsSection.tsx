import React from 'react';
import MobileMainBanner from "@/components/MobileMainBanner";
import MobileSkillsSection from "@/components/MobileSkillsSection";


function SkillsSection() {
    return (
        <div className="">
            <div className="md:hidden"><MobileSkillsSection/></div>
        </div>
    );
}

export default SkillsSection;