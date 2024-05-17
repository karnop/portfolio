import React from 'react';
import {myUser, User} from "@/lib/utils";
import MobileMainBanner from "@/components/MobileMainBanner";
import MobileAboutMe from "@/components/MobileAboutMe";

function AboutMe(user: User) {
    return (
        <div className="">
            <div className="md:hidden">
                <MobileAboutMe name={myUser.name} age={myUser.age} dob={myUser.dob} description={myUser.description}/>
            </div>
        </div>
    );
}

export default AboutMe;