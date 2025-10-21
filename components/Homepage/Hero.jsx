'use client'

import Silk from "@/animations/Silk"
// import { useTheme } from "next-themes"
import React from 'react';
import Button from "../UI/Button";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
  // const { theme, setTheme } = useTheme()

  return (
    <section className="relative flex items-center justify-center min-h-screen text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* "#636CCB" */}
        <Silk
          speed={4}
          scale={0.8}
          color="#5b21ad"
          noiseIntensity={1}
          rotation={0}
        />
      </div>
      {/* inline-block bg-gradient-to-r from-red-700 to-purple-500 bg-clip-text text-transparent */}
      {/* Foreground Content */}
      <div className="relative flex flex-col items-center gap-10 px-(--padding-small-screen) md:px-(--padding-large-screen)">
        <div className="sm:text-center text-left">
          <h1 className="lg:text-8xl lg:leading-32 sm:text-6xl sm:leading-20 text-5xl leading-14 font-semibold md:mb-4 mb-6">Hi, I'm Gyanangshu</h1>
          <p className="sm:text-xl text-lg max-w-3xl sm:leading-9 leading-6 mx-auto">A Frontend & MERN Stack Developer who crafts performant, scalable, and user-friendly web applications</p>
        </div>

        <div className="flex items-center justify-center sm:flex-row flex-col gap-3 sm:w-fit w-full">
          <Link className="w-full" href="#projects">
            <Button bgColor={"bg-gradient-to-r from-blue-500 to-purple-700"} text={"View Projects"} icon={<LuArrowRight size={15} />} />
          </Link>
          <Link className="w-full" href="#contact">
          <Button bgColor={"border border-white/20 bg-gradient-to-r from-blue-950 to-purple-950"} text={"Get In Touch"} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
