"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const dropdowns = {
    projects: [
        { href: "/projects/website3", label: "Website 3.0" },
        { href: "/projects/website2", label: "Website 2.0" },
        { href: "/projects/website1", label: "Website 1.0" },
        { href: "/projects/covid", label: "COVID Dashboard" },
        { href: "/projects/checkers", label: "Checkers" },
        { href: "/projects/dailytennis", label: "Daily Tennis" },
    ],
    education: [
        { href: "/education/illinois", label: "University of Illinois" },
        { href: "/education/miami", label: "Miami University" },
        { href: "/education/wapak", label: "Wapak High School" },
    ],
    experience: [
        { href: "/experience/lutron", label: "Lutron" },
        { href: "/experience/amazon2022", label: "Amazon (2022)" },
        { href: "/experience/amazon2021", label: "Amazon (2021)" },
        { href: "/experience/hw", label: "Hospitality Wifi" },
        { href: "/experience/marathon", label: "Marathon" },
    ]
} as const;

type DropdownKey = keyof typeof dropdowns;

export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Helper to render dropdown
    const renderDropdown = (key: DropdownKey) => (
        <ul className="dropdown">
            {dropdowns[key].map(item => (
                <li key={item.href}>
                    <Link href={item.href} className="dropdown-link">{item.label}</Link>
                </li>
            ))}
        </ul>
    );

    // Detect mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 1000;

    return (
        <nav>
            <div className="nav-content">
                <Link href="/" className="mx-10">
                    <Image
                        className="rounded-md"
                        src="/IMG_2611.jpg"
                        alt="John Doll"
                        width={50}
                        height={50}
                    />
                </Link>
                <li className="text-lg">
                    <Link href="/" className="mx-10">John Doll</Link>
                </li>
                <ul className={mobileOpen ? "open" : ""}>
                    
                    <li>
                        <Link href="/" className="mx-10">Home</Link>
                    </li>
                    {Object.keys(dropdowns).map((key) => (
                        <li
                            key={key}
                            className=""
                            onMouseEnter={() => !mobileOpen && setOpenDropdown(key as DropdownKey)}
                            onMouseLeave={() => !mobileOpen && setOpenDropdown(null)}
                        >
                            <button
                                className="mx-10 capitalize"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: 0,
                                }}
                                onClick={() => {
                                    if (mobileOpen) {
                                        setOpenDropdown(openDropdown === key ? null : (key as DropdownKey));
                                    }
                                }}
                                type="button"
                            >
                                {key}
                                <span style={{ marginLeft: 4, fontSize: "0.7em" }}>▼</span>
                            </button>
                            {(openDropdown === key || (!mobileOpen && openDropdown === key)) && renderDropdown(key as DropdownKey)}
                        </li>
                    ))}
                    <li>
                        <Link href="/resume" className="mx-10">Resume</Link>
                    </li>
                    <li>
                        <Link href="/1se" className="mx-10">1SE</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="mx-10">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="mx-10">Contact</Link>
                    </li>
                </ul>
                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
};