'use client'

import React from 'react';
import SplitText from '@/animations/SplitText';

const Heading = ({text}) => {
    return (
        <div className="relative inline-block h-fit sm:mb-16 mb-10">
            <div
                className="aurora-glow absolute -z-10"
                style={{
                    top: '30%',
                    bottom: '30%',
                    left: '2%',
                    right: '2%'
                }}
            />
            <SplitText
                text={text}
                className="lg:text-8xl lg:leading-32 sm:text-6xl sm:leading-20 text-5xl leading-14 font-semibold relative z-10"
                delay={60}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
        </div>
    )
}

export default Heading
