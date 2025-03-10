import Link from 'next/link';
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="flex flex-row text-center items-center">
            <ul>
                <li>
                    <Link href="/" className="mx-10">
                        <Image
                            className="rounded-md"
                            src="/IMG_2611.jpg"
                            alt="John Doll"
                            width={50}
                            height={50}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="mx-10">John Doll</Link>
                </li>
                <li>
                    <Link href="/" className="mx-10">Home</Link>
                </li>
                <li>
                    <Link href="/projects" className="mx-10">Projects</Link>
                </li>
                <li>
                    <Link href="/resume" className="mx-10">Resume</Link>
                </li>
                <li>
                    <Link href="/education" className="mx-10">Education</Link>
                </li>
                <li>
                    <Link href="/experience" className="mx-10">Experience</Link>
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
        </nav>
    );
}