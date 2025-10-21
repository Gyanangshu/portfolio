'use client'

import BentoGrid from '@/animations/BentoGrid';
import React from 'react';
import Heading from '../UI/Heading';

const About = () => {
    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center'>
            <Heading text={"About Me"} />

            <div>
            <BentoGrid
                textAutoHide={true}
                enableStars={false}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </div>
        </div>
    )
}

export default About
