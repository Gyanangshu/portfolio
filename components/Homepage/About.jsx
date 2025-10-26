'use client'

import React, {lazy, Suspense} from 'react';
import Heading from '../UI/Heading';
const BentoGrid = lazy(() => import("@/animations/BentoGrid"));
import { ImSpinner9 } from "react-icons/im";

const About = () => {
    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center'>
            <Heading text={"About Me"} />

            <Suspense fallback={<div className='w-full h-full my-8 flex items-center justify-center'><ImSpinner9 className="w-8 h-8 animate-spin text-(--color-purple)" /></div>}>
                <BentoGrid
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </Suspense>
        </div>
    )
}

export default About
