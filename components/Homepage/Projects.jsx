'use client'

import React from 'react';
import Heading from '../UI/Heading';
import Carousel from '../UI/Carousel/Carousel';

const Projects = () => {

    const OPTIONS = { loop: true }
    const projectSlides = [
        {
            id: 1,
            title: "Telemed1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "",
            img: ""            
        },
        {
            id: 2,
            title: "Telemed2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "",
            img: ""            
        },
        {
            id: 3,
            title: "Telemed3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "",
            img: ""         
        },
        {
            id: 4,
            title: "Telemed4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.",
            githubLink: "",
            demoLink: "",
            tag: "",
            img: ""           
        },
    ];

    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center' id="projects">
            <Heading text={"Projects"} />
            <div className='flex items-center gap-4'>
                <p>All</p>
                <p>Frontend</p>
            </div>
            <div>
                <Carousel slides={projectSlides} options={OPTIONS} />
            </div>
        </div>
    )
}

export default Projects
