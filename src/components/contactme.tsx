import {myUser, User} from "@/lib/utils";
import MobileAboutMe from "@/components/MobileAboutMe";
import React from "react";
import MobileContactMe from "@/components/MobileContactMe";

function AboutMe() {
    return (
        <div className="">
            <div className="md:hidden">
                <MobileContactMe/>
            </div>
        </div>
    );
}