import React from 'react';
import {Dancing_Script, Poppins} from 'next/font/google';
import {navbarItems} from "@/lib/utils";
import Link from "next/link";

const dancingScript = Dancing_Script({
    subsets: ['latin'], // Adjust for the character sets you need
});

const roboto = Poppins({
    subsets: ['latin'], // Adjust for the character sets you need
    weight: ["500"]
});

function Navbar() {
    return (
        <div
            className="z-50 fixed top-0 text-stone-100 w-full flex justify-center md:justify-between
            px-8 py-4 items-center bg-stone-950 bg-transparent backdrop-blur-md">
            <div className="">
                <p className={`${dancingScript.className} font-bold text-2xl`}>Manav Mahesh Sanger</p>
            </div>

            <div className="hidden md:block">
                {navbarItems.map(item => (
                    <Link href={item.href} key={item.label}>
                        <button className={`${roboto.className} mx-2`}>{item.label}</button>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default Navbar;