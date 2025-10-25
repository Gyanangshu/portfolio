'use client'

import React, { lazy, Suspense, useMemo, useState } from 'react';
import Heading from '../UI/Heading';
const Carousel = lazy(() => import('../UI/Carousel/Carousel'));
import { ImSpinner9 } from "react-icons/im";
import telemedLogo from "../../assets/projects/telemed/logo.svg";
import TeleMed from "../../assets/projects/telemed/TeleMed.webp";
import TokenLogo from "../../assets/projects/token/icon.svg";
import Token from "../../assets/projects/token/token.webp";
import InstaCover from "../../assets/projects/instaStoryViewer/insta.webp";
import Instalogo from "../../assets/projects/instaStoryViewer/instalogo.webp";
import SearchBarLogo from "../../assets/projects/searchBar/searchBarLogo.webp";
import SearchBarCover from "../../assets/projects/searchBar/searchBarCover.webp";

const Projects = () => {

    const OPTIONS = { loop: true }
    const projectSlides = [
        
        {
            id: 1,
            title: "TeleMed",
            description: "Reimagining rural healthcare with real-time video consultations with doctors. Powered by simple & scalable technology. Giving every patient - no matter how remote - the chance to be seen, heard, and treated with dignity",
            githubLink: "https://github.com/Gyanangshu/TeleMed",
            demoLink: "https://telemedhealthcare.netlify.app/",
            tag: "Full Stack",
            img: TeleMed,
            logo: telemedLogo
        },
        {
            id: 2,
            title: "NFT Token Tracker",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "https://github.com/Gyanangshu/NFT-Token-Tracker",
            demoLink: "https://tokenportfolio.netlify.app",
            tag: "Frontend",
            img: Token,
            logo: TokenLogo
        },
        {
            id: 3,
            title: "Instagram Story Viewer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "https://github.com/Gyanangshu/Instagram",
            demoLink: "https://gyanangshu-insta-test.netlify.app",
            tag: "Frontend",
            img: InstaCover,
            logo: Instalogo
        },
        {
            id: 4,
            title: "Animated Search Bar",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "https://github.com/Gyanangshu/Animated-search-bar",
            demoLink: "https://search-animations.netlify.app",
            tag: "Frontend",
            img:SearchBarCover,
            logo:SearchBarLogo
        },
    ];

    const [selectedListItem, setSelectedListItem] = useState("All Projects");
    const buttonList = ["All Projects", "Full Stack", "Frontend"];

    const filteredProjects = useMemo(() => {
        if (selectedListItem === "All Projects") {
            return projectSlides;
        }
        return projectSlides.filter((project) => project.tag === selectedListItem);
    }, [selectedListItem]);

    console.log("filteredProjects: ",filteredProjects);

    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center' id="projects">
            <Heading text={"Projects"} />
            
            <div className='flex items-center divide-x-2 divide-white/40 mb-8'>
                {buttonList.map((item, index) => (
                    <button
                        key={index}
                        className={`sm:px-8 px-4 cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out first:pl-0 last:pr-0
                            ${selectedListItem === item ? "" : "text-white hover:text-gray-300"}`}
                        onClick={() => setSelectedListItem(item)}
                    >
                        {selectedListItem === item ? (
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">
                                {item}
                            </span>
                        ) : (
                            item
                        )}
                    </button>
                ))}
            </div>

            <Suspense fallback={
                <div className='w-full h-full my-8 flex items-center justify-center'>
                    <ImSpinner9 className="w-8 h-8 animate-spin text-(--color-purple)" />
                </div>
            }>
                <Carousel slides={filteredProjects} options={OPTIONS} key={selectedListItem} />
            </Suspense>
        </div>
    )
}

export default Projects