"use client";

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
    // Track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Dropdown menu data
    const dropdowns = {
        projects: [
            { href: "/projects/website3", label: "Website 3.0" },
            { href: "/projects/website2", label: "Website 2.0" },
            { href: "/projects/website1", label: "Website 1.0" },
            { href: "/projects/covid", label: "COVID Dashboard" },
            { href: "/projects/checkers", label: "Checkers" },
            { href: "/projects/dailytennis", label: "Daily Tennis" },
        ],
        resume: [
            { href: "/resume/pdf", label: "PDF Resume" },
            { href: "/resume/skills", label: "Skills" },
            { href: "/resume/awards", label: "Awards" },
        ],
        education: [
            { href: "/education/illinois", label: "Illinois" },
            { href: "/education/miami", label: "Miami" },
            { href: "/education/wapak", label: "Wapak HS" },
        ],
        experience: [
            { href: "/experience/lutron", label: "Lutron" },
            { href: "/experience/amazon2022", label: "Amazon (2022)" },
            { href: "/experience/amazon2021", label: "Amazon (2021)" },
            { href: "/experience/hw", label: "Hospitality Wifi" },
        ],
        "1SE": [
            { href: "/1se/2023", label: "2023" },
            { href: "/1se/2024", label: "2024" },
            { href: "/1se/about", label: "About 1SE" },
        ],
    };

    // Helper to render dropdown
    const renderDropdown = (key: string) => (
        <ul className="dropdown">
            {dropdowns[key].map(item => (
                <li key={item.href}>
                    <Link href={item.href} className="dropdown-link">{item.label}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <nav>
            <div className="nav-content" style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <Link href="/" className="mx-10">
                    <Image
                        className="rounded-md"
                        src="/IMG_2611.jpg"
                        alt="John Doll"
                        width={50}
                        height={50}
                    />
                </Link>
                <ul className={mobileOpen ? "open" : ""}>
                    <li>
                        <Link href="/" className="">John Doll</Link>
                    </li>
                    <li>
                        <Link href="/" className="">Home</Link>
                    </li>
                    {/* Dropdown items start here */}
                    {Object.keys(dropdowns).map((key) => (
                        <li
                            key={key}
                            className=""
                            onMouseEnter={() => setOpenDropdown(key)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link href={`/${key}`} className="mx-10 capitalize">{key}</Link>
                            {openDropdown === key && renderDropdown(key)}
                        </li>
                    ))}
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
}