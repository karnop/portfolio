import React from 'react';
import Image from "next/image";
import { Button } from './ui/button';
import {useToast} from "@/components/ui/use-toast";
import {Resend} from "resend";

async function formServerAction(formData : FormData)
{
    "use server"
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
        from : "onboarding@resend.dev",
        to : "communicate.manav@gmail.com",
        subject : `Contact form message from ${name}`,
        text : `${message}`,
    })

    console.log("Email send!");

}

function MobileContactMe() {
    return (
        <div className="flex flex-col items-center justify-center text-white h-screen relative overflow-y-hidden md:hidden" id="bannersection">
            <Image src="/background5.jpg" alt="mountain2" width="400" height="10" quality={100}
                   className="-z-10 opacity-80 absolute right-0 bottom-0 w-full h-screen"/>

            <form className="flex flex-col bg-stone-200 h-fit w-fit p-4 rounded-lg" action={formServerAction}>
                <div className="">
                    <h1 className="text-stone-700 text-3xl font-semibold">Contact Me</h1>
                    <hr className="w-full h-1 text-stone-700 bg-stone-800"/>
                </div>

                <div className="mt-8">
                    <h2 className="text-stone-700 text-lg">Name</h2>
                    <input name="name" required={true}
                           className="p-3 pr-16 bg-stone-200 border-b border-stone-600 text-black focus:outline-none required:"
                           placeholder="Write your name here..."/>
                </div>

                <div className="mt-8">
                    <h2 className="text-stone-700 text-lg">Email / Social</h2>
                    <input name="email"  required={true}
                           className="p-3 pr-16 bg-stone-200 border-b border-stone-600 text-black focus:outline-none required:"
                           placeholder="Let me know how to contact you back (email or Insta username)..."/>
                </div>

                <div className="mt-8">
                    <h2 className="text-stone-700 text-lg">Message</h2>
                    <textarea name="message" required={true}
                           className="p-3 pr-16 bg-stone-200 border-b border-stone-600 text-black focus:outline-none required:"
                           placeholder="Write your message ..." rows={5}/>
                </div>

                <Button variant="ghost" className="text-stone-700" type="submit">Send</Button>


            </form>
        </div>
    );
}

export default MobileContactMe;