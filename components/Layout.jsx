'use client'

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";

const menu = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Blog",
        href: "/blog"
    }
];

const Layout = ({ children }) => {
    // const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname();

    const blacklists = [
        "/admin"
    ]

    const isBlacklist = blacklists.includes(pathname)

    if (isBlacklist) {
        return (
            <div>{children}</div>
        )
    }

    console.log(pathname)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 50)
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])

    return (
        <div className="flex flex-col min-h-svh relative overflow-hidden max-w-(--screen-width) mx-auto font-urbanist">
            <nav
                className="fixed top-7 left-0 mx-auto w-full z-[99999] px-(--padding-small-screen) md:px-(--padding-large-screen)"
            >
                <div className="max-w-2xl mx-auto px-8 py-4 flex justify-between items-center bg-white/30 text-white rounded-4xl transition-all duration-500 border-2 border-white/15">
                    <h1 className="text-lg">Navbar</h1>
                    <ul className="flex items-center gap-4">
                        {menu?.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <li className={`cursor-pointer ${pathname === item.href && "bg-(--color-purple) px-3 pb-0.5 rounded-xl"}`}>{item.label}</li>
                            </Link>
                        ))}
                    </ul>
                    <div className='flex items-center gap-4'>
                        <Link href="" target='_blank' title='Linkedin' className='hover:scale-105'><SlSocialLinkedin size={18} /></Link>
                        <Link href="" target='_blank' title='GitHub' className='hover:scale-105'><LuGithub size={18} /></Link>
                    </div>
                </div>
            </nav>

            <main className="flex-1 z-10">{children}</main>

            <footer className="z-20 text-white/60 text-center mt-24 py-6 px-(--padding-small-screen) md:px-(--padding-large-screen)">
                © 2025 Gyanangshu Misra - Crafted with ❤️ using NextJs
            </footer>
        </div>
    )
}

export default Layout
