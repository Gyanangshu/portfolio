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
    // {
    //     label: "Blog",
    //     href: "/blog"
    // }
];

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
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

    // console.log(pathname)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-svh relative overflow-hidden max-w-(--screen-width) mx-auto font-urbanist">
            <nav
                className={`fixed left-0 mx-auto w-full z-[99999] transition-all duration-500 ease-in-out ${isScrolled
                        ? "top-7 px-(--padding-small-screen) md:px-(--padding-large-screen)"
                        : "top-0 px-0"
                    }`}
            >
                <div
                    className={`mx-auto flex justify-between items-center text-white transition-all duration-500 ease-in-out ${isScrolled
                            ? "max-w-2xl px-8 py-4 rounded-4xl  bg-gradient-to-r from-(--bg-dark-color) via-50% to-purple-950 border-2 border-purple-700"
                            : "px-8 md:px-(--padding-large-screen) max-w-(--content-width) mx-auto py-6 rounded-none border border-transparent"
                        }`}
                >
                    <h1 className="text-lg italic">Gyanangshu</h1>
                    <ul className="flex items-center gap-4">
                        {menu?.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <li
                                    className={`cursor-pointer ${pathname === item.href &&
                                        "bg-gradient-to-r from-blue-950 to-purple-950 px-3 pb-0.5 rounded-xl"
                                        }`}
                                >
                                    {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex items-center md:gap-6 gap-4">
                        <Link
                            href="https://www.linkedin.com/in/gyanangshu-misra-63136b18a"
                            target="_blank"
                            title="Linkedin"
                            className="hover:scale-105"
                        >
                            <SlSocialLinkedin size={18} />
                        </Link>
                        <Link
                            href="https://github.com/Gyanangshu"
                            target="_blank"
                            title="GitHub"
                            className="hover:scale-105"
                        >
                            <LuGithub size={18} />
                        </Link>
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