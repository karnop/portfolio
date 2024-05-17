import MainBanner from "@/components/MainBanner";
import SkillsSection from "@/components/SkillsSection";
import AboutMe from "@/components/AboutMe";
import {myUser} from "@/lib/utils";
import MobileContactMe from "@/components/MobileContactMe";

export default function Home() {
    return (
        <div className="">
            <MainBanner/>
            <SkillsSection/>
            <AboutMe name={myUser.name} age={myUser.age} dob={myUser.dob} description={myUser.description}/>
            <MobileContactMe/>
        </div>
    );
}
