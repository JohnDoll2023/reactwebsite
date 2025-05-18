"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const dropdowns = {
    projects: [
        { href: "/projects", label: "Projects Overview" },
        { href: "/projects/website3", label: "Website 3.0" },
        { href: "/projects/website2", label: "Website 2.0" },
        { href: "/projects/website1", label: "Website 1.0" },
        { href: "/projects/covid", label: "COVID Dashboard" },
        { href: "/projects/checkers", label: "Checkers" },
        { href: "/projects/dailytennis", label: "Daily Tennis" },
    ],
    education: [
        { href: "/education", label: "Education Overview" },
        { href: "/education/illinois", label: "University of Illinois" },
        { href: "/education/miami", label: "Miami University" },
        { href: "/education/wapak", label: "Wapak High School" },
    ],
    experience: [
        { href: "/experience", label: "Experience Overview" },
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
                    <Link
                        href={item.href}
                        className="dropdown-link"
                        onClick={() => setOpenDropdown(null)} // Reset dropdown on navigation
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <nav>
            <div className="nav-content">
                <Link href="/" className="mr-5 ml-2">
                    <Image
                        className="rounded-md navbar-image"
                        src="/IMG_2611.jpg"
                        alt="John Doll"
                        width={50}
                        height={50}
                    />
                </Link>
                <li className="text-lg" id="name">
                    <Link href="/" className="mx-5">John Doll</Link>
                </li>
                <ul className={`menu ${mobileOpen ? "open" : ""}`}>
                    <li>
                        <Link href="/" className="mx-5">Home</Link>
                    </li>
                    {Object.keys(dropdowns).map((key) => (
                        <li
                            key={key}
                            className={openDropdown === key ? "open" : ""}
                            onMouseEnter={() => setOpenDropdown(key as DropdownKey)} // Open dropdown on hover
                            onMouseLeave={() => setOpenDropdown(null)} // Close dropdown on mouse leave
                        >
                            <button
                                className="mx-5 capitalize"
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
                                    setOpenDropdown(openDropdown === key ? null : (key as DropdownKey)); // Toggle dropdown
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
                        <Link href="/resume" className="mx-5">Resume</Link>
                    </li>
                    <li>
                        <Link href="/1se" className="mx-5">1SE</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="mx-5">Contact</Link>
                    </li>
                </ul>
                <button className="hamburger mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
};