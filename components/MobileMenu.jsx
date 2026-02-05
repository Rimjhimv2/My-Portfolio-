'use client';

import { X } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

function MobileMenu({ menuOpen, setMenuOpen }) {

    const menuLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>

            <button
                onClick={() => setMenuOpen(false)}
                className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                aria-label='Close Menu'
            >
                <X className='h-5 w-5' />
            </button>

            {menuLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transition-all duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

export default MobileMenu;
