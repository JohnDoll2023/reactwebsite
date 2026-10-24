"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiteSearch } from "./SiteSearch";

const dropdowns = {
    projects: [
        { href: "/projects", label: "Projects Overview" },
        { href: "/projects/website3", label: "Website 3.0" },
        { href: "/projects/website2", label: "Website 2.0" },
        { href: "/projects/website1", label: "Website 1.0" },
        { href: "/projects/covid", label: "COVID Dashboard" },
        { href: "/projects/checkers", label: "Checkers" },
        /*{ href: "/projects/dailytennis", label: "Daily Tennis" },*/
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
        { href: "/experience/stmarks", label: "St. Mark's" },
        { href: "/experience/marathon", label: "Marathon" },
    ]
} as const;

type DropdownKey = keyof typeof dropdowns;

export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileOpen(false);
                setOpenDropdown(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    // Helper function to check if a path is active
    const isActive = (path: string, section?: DropdownKey) => {
        const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
        const normalizedPath = path.replace(/\/+$/, "") || "/";

        // For dropdown sections, check current path starts with section name.
        if (section) {
            return normalizedPathname.startsWith(`/${section}`);
        }

        if (normalizedPath === "/" && normalizedPathname === "/") return true;
        if (normalizedPath === "/" && normalizedPathname !== "/") return false;
        
        return normalizedPathname === normalizedPath;
    };

    const activeLinkStyle = (path: string) =>
        isActive(path) ? { color: "#fcd34d", fontWeight: 700 } : undefined;

    // Helper to render dropdown
    const renderDropdown = (key: DropdownKey) => (
        <ul className="dropdown">
            {dropdowns[key].map(item => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className={`dropdown-link block w-full ${isActive(item.href) ? "active" : ""}`}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        onClick={() => {
                            setOpenDropdown(null); // Close dropdown
                            setMobileOpen(false); // Close mobile menu
                        }}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <nav ref={navRef} aria-label="Primary navigation">
            <div className="nav-content">
                <Link href="/" className="mr-5 ml-2">
                    <Image
                        className="rounded-md navbar-image"
                        src="/nav/headshot.webp"
                        alt="John Doll"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="text-lg" id="name">
                    <Link href="/" className="mx-5">John Doll</Link>
                </div>
                <ul id="primary-menu" className={`menu ${mobileOpen ? "open" : ""}`}>
                    <li>
                        <Link
                            href="/"
                            className={`nav-link mx-5 ${isActive("/") ? "active" : ""}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    {Object.keys(dropdowns).map((key) => (
                        <li
                            key={key}
                            className={openDropdown === key ? "open" : ""}
                            onMouseEnter={() => setOpenDropdown(key as DropdownKey)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                className={`nav-link mx-5 capitalize ${isActive("", key as DropdownKey) ? "active" : ""}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    width: "100%",
                                }}
                                onClick={() => {
                                    setOpenDropdown(openDropdown === key ? null : (key as DropdownKey));
                                }}
                                aria-expanded={openDropdown === key}
                                aria-haspopup="true"
                                type="button"
                            >
                                {key}
                                <span style={{ marginLeft: 4, fontSize: "0.7em" }}>▼</span>
                            </button>
                            {(openDropdown === key || (!mobileOpen && openDropdown === key)) && renderDropdown(key as DropdownKey)}
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/resume"
                            className={`nav-link mx-5 ${isActive("/resume") ? "active" : ""}`}
                            aria-current={isActive("/resume") ? "page" : undefined}
                            style={activeLinkStyle("/resume")}
                            onClick={() => setMobileOpen(false)}
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/1se"
                            className={`nav-link mx-5 ${isActive("/1se") ? "active" : ""}`}
                            aria-current={isActive("/1se") ? "page" : undefined}
                            style={activeLinkStyle("/1se")}
                            onClick={() => setMobileOpen(false)}
                        >
                            1SE
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`nav-link mx-5 ${isActive("/contact") ? "active" : ""}`}
                            aria-current={isActive("/contact") ? "page" : undefined}
                            style={activeLinkStyle("/contact")}
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <SiteSearch onOpenChange={() => setMobileOpen(false)} />
                <button
                    className="hamburger mr-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                    aria-controls="primary-menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
};