import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface NavbarItem {
    label: string;
    href: string;
}

export const navbarItems: NavbarItem[] = [
    {
        label: 'Home',
        href: '/#mainsection', // Replace with your home page route
    },
    {
        label: 'Skills',
        href: '/#skillsection', // Replace with your blog page route (if applicable)
    },
    {
        label: 'About',
        href: '/#about', // Replace with your about page route
    },
    {
        label: 'Portfolio',
        href: '/#portfolio', // Replace with your portfolio page route
    },
    {
        label: 'Contact',
        href: '/#contact', // Replace with your contact page route
    },
];

interface SkillItem {
    name: string;
    href: string;
}

export const frontEndSkills: SkillItem[] = [
    {
        name: "NextJs",
        href: "/next.svg"
    },
    {
        name: "HTML",
        href: "/html5.png",
    },
    {
        name: "CSS",
        href: "/css.png",
    },
    {
        name: "tailwindCSS",
        href: "/tailwind.svg",
    },
    {
        name: "ReactJs",
        href: "/react.png",
    },
    {
        name: "ShadcnUi",
        href: "/shadcn.png",
    },
]

export const backEndSkills: SkillItem[] = [
    {
        name: "Prisma ORM",
        href: "/prisma.png"
    },
    {
        name: "Mongoose",
        href: "/mongoose.png",
    },
    {
        name: "MongoDb",
        href: "/mongodb.png ",
    },
    {
        name: "TypeScript",
        href: "/typescript.png ",
    },
    {
        name: "NextJs",
        href: "/next.svg"
    },
]

export const authenticationSkills: SkillItem[] = [
    {
        name: "AuthJs",
        href: "/authjs.png"
    },
]

export type User = {
    name: String,
    age: number,
    dob: string,
    description: string,
}

export const myUser: User = {
    name: "Manav Mahesh Sanger",
    age: 20,
    dob: "30 April 2004",
    description: "web developer who loves to code and explore the world. Also really interested in AI and its potential to shape the future"
}