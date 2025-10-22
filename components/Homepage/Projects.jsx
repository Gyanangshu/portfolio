'use client'

import React, { lazy, Suspense, useMemo, useState } from 'react';
import Heading from '../UI/Heading';
const Carousel = lazy(() => import('../UI/Carousel/Carousel'));
import { ImSpinner9 } from "react-icons/im";

const Projects = () => {

    const OPTIONS = { loop: true }
    const projectSlides = [
        {
            id: 1,
            title: "Telemed1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "Full Stack",
            img: ""
        },
        {
            id: 2,
            title: "Telemed2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "Frontend",
            img: ""
        },
        {
            id: 3,
            title: "Telemed3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "Frontend",
            img: ""
        },
        {
            id: 4,
            title: "Telemed4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "Full Stack",
            img: ""
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

    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center' id="projects">
            <Heading text={"Projects"} />
            
            <div className='flex items-center divide-x-2 divide-white/40 mb-8'>
                {buttonList.map((item, index) => (
                    <button
                        key={index}
                        className={`px-8 cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out first:pl-0 last:pr-0
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