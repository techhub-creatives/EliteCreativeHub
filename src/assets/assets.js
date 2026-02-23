import appLaunch from "./App-launch.webp";
import eCommerce from "./E-commerce.webp";
import heroImage from "./Hero.png";
import saasPerformance from "./SaaS-Performance.webp";
import darkLogo from "./Logo dark.svg";
import lightLogo from "./Logo light.svg";
import techdarkLogo from "./tech-logo-dark.svg";
import techlightLogo from "./tech-logo-white.svg";

import blueGradientDark from "./blue-gradient-dark.svg";
import greenGradientDark from "./green-gradient-dark.svg";
import trustedPeople from "./trusted-people.svg";

import bookingLogo from "./company-logos/bookingcom-logo-svgrepo-com.svg";
import googleLogo from "./company-logos/google_logo.svg";
import lenovoLogo from "./company-logos/lenovo-1-logo-svgrepo-com.svg";
import microsoftLogo from "./company-logos/microsoft-logo-svgrepo-com.svg";
import oracleLogo from "./company-logos/oracle-6-logo-svgrepo-com.svg";
import spotifyLogo from "./company-logos/spotify-1-logo-svgrepo-com.svg";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import girl2 from "./people/girl2.jpg";
import girl4 from "./people/girl4.jpg";
import girl6 from "./people/girl6.jpg";
import girl8 from "./people/girl8.jpg";
import man4 from "./people/man4.jpg";
import man5 from "./people/man5.jpg";
import man10 from "./people/man10.jpg";
import Harman from "./people/me-formal-side.jpg";
import nophoto from "./people/Nophoto.png";

import Github from "./social-media/github.svg"
import Linkedin from "./social-media/linkedin.svg"
import Figma from "./social-media/figma.svg"
import Behance from "./social-media/behance.svg"
import GithubDark from "./social-media/github-dark.svg"
import LinkedinDark from "./social-media/linkedin-dark.svg"
import FigmaDark from "./social-media/figma-dark.svg"
import BehanceDark from "./social-media/behance-dark.svg"
 
import performance from "./performance-svgrepo-com.svg";
import growth from "./business-growth-progress-svgrepo-com.svg";
import marketing from "./marketing-svgrepo-com.svg";
import analytics from "./analytics-graph-chart-svgrepo-com.svg";


export const assets = {
    lightLogo,
    darkLogo,
    techdarkLogo,
    techlightLogo,
    heroImage,
    appLaunch,
    eCommerce,
    saasPerformance,
    blueGradientDark,
    greenGradientDark,
    trustedPeople
}

export const company_logos = [
    spotifyLogo,
    oracleLogo,
    microsoftLogo,
    lenovoLogo,
    googleLogo,
    bookingLogo,
];

export const mobileNavItems = [
    // { name: "Home", link: "#" },
    { name: "Services", link: "#Services" },
    { name: "Our Work", link: "#OurWork" },
    { name: "Our Team", link: "#OurTeam" },
    { name: "Book a Free Call", link: "#contactUs" },
]
export const navItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#Services" },
    { name: "Our Work", link: "#OurWork" },
    { name: "Our Team", link: "#OurTeam" },
]

export const icons = {
    darkIcon: CiDark,
    lightIcon: CiLight,
    arrowRightIcon: HiArrowLongRight,
    menuIcon: CgMenuRight,
    closeIcon: CgClose
}


export const serviceDate = [
    {
        title: "Brand Strategy & Identity",
        description: "Define your core message, audience, and visual language.",
        icon: marketing
    },
    {
        title: "Digital & Social Design",
        description: "Scroll-stopping graphics tailored to Instagram, LinkedIn, and beyond.",
        icon: growth
    },
    {
        title: "Website & UI Design",
        description: "Clean, user-focused websites that guide visitors to action.",
        icon: performance
    },
    {
        title: "Ongoing Brand Management",
        description: "Keep your visuals sharp, consistent, and adaptable as you grow.",
        icon: analytics
    }
]

export const ourWork = [
    {
        image: eCommerce,
        title: "E-commerce Growth Campaign",
        description: "Scaled paid ads with AI optimization to increase revenue while reducing acquisition costs."
    },
    {
        image: saasPerformance,
        title: "SaaS Performance Dashboard",
        description: "Designed and managed performance dashboards to track, analyze, and improve marketing efficiency."
    },
    {
        image: appLaunch,
        title: "App Launch & User Acquisition",
        description: "Executed full-funnel advertising to drive high-quality installs and long-term retention."
    }
]

export const teamData = [
    {
        "name": "Arjun Malhotra",
        "title": "Founder & CEO",
        "image": man10
    },
    {
        "name": "Aanya Kapoor",
        "title": "Brand Strategy",
        "image": girl2
    },
    {
        "name": "Daniel Brooks",
        "title": "Creative Director",
        "image": man5
    },
    {
        "name": "Harman Khurmi",
        "title": "Creative Designer",
        "image": Harman
    },
    {
        "name": "Rohit Verma",
        "title": "Senior Writer",
        "image": man4
    },
    {
        "name": "Sophia Martinez",
        "title": "Content Manager",
        "image": girl4
    },
    {
        "name": "Neha Sharma",
        "title": "Success Manager",
        "image": girl6
    },
    {
        "name": "Olivia Bennett",
        "title": "Senior Analyst",
        "image": girl8
    }
];

export const testimonial = [
    {
        "name": "Sarah K.",
        "title": "Owner, EcoLife Goods",
        "image": nophoto,
        "paragraph": '"Working with The Elite Creative Hub was a game-changer. Our brand finally looks as professional as the service we provide. We saw a 30% increase in qualified leads within two months."'    
    },
    {
        "name": "David M.",
        "title": "Director, TechFlow Solutions",
        "image": nophoto,
        "paragraph": '"Working with The Elite Creative Hub was a game-changer. Our brand finally looks as professional as the service we provide. We saw a 30% increase in qualified leads within two months."'
    }
];

export const socialMedia = [
    {
        name: "Github",
        icon: Github,
        iconDark: GithubDark,
        link: "https://github.com/Harman-khurmi"
    },
    {
        name: "Figma",
        icon: Figma,
        iconDark: FigmaDark,
        link: "https://www.figma.com/@harmankhurmi"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        iconDark: LinkedinDark,
        link: "https://www.linkedin.com/in/harmankhurmi/"
    },
    {
        name: "Behance",
        icon: Behance,
        iconDark: BehanceDark,
        link: "https://www.behance.net/harmankhurmi"
    },
]

export default assets;