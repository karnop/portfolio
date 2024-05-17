"use client"
import React from 'react';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {Playpen_Sans, Radio_Canada} from "next/font/google";
import MobileMainBanner from "@/components/MobileMainBanner";


function MainBanner() {
    return (
        <div className="">
            <div className="md:hidden"><MobileMainBanner/></div>
        </div>
    );
}

export default MainBanner;