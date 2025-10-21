'use client'

import React from 'react';
import { LuGithub } from "react-icons/lu";
import { FcGlobe } from "react-icons/fc";
import Heading from '../UI/Heading';

const Projects = () => {

    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center' id="projects">
            <Heading text={"Projects"} />
            <div className='max-w-96 md:mt-20 mt-6'>
                <div className={`border border-(--border-color) rounded-xl shadow-xl hover:shadow-emerald-800 transition-all duration-700 ease-in-out`}>
                    <div className='h-80 max-w-96 border-b border-(--border-color) overflow-hidden'>
                        <img className='h-full w-full' src={null} alt="project image" />
                    </div>
                    <div className="p-5">
                        <h3 className='text-3xl font-semibold'>TeleMed</h3>
                        <p className='pt-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis fugiat obcaecati, incidunt sapiente accusantium expedita veniam eveniet voluptatum, doloribus quas consequuntur nulla animi molestiae soluta, non impedit dolore quia.</p>
                        <div className='flex items-center gap-2 mt-8'>
                            <button className='flex items-center gap-2 border border-(--color-border) px-3 pt-0.5 pb-1 rounded-2xl bg-(--color-purple) cursor-pointer'><FcGlobe />Demo</button>
                            <button className='flex items-center gap-2 border border-(--color-border) px-3 py-0.5 pb-1 rounded-2xl cursor-pointer'><LuGithub /> Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
