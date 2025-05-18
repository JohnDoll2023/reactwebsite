import Link from "next/link";

const links = {
    projects: "/projects",
    education: "/education",
    experience: "/experience",
    resume: "/resume",
}

export const generateMetadata = () => {
    return {
        title: 'John Doll | Where am I',
    };
};

export default function Home() {
    return (
        <div className="flex flex-1 items-center justify-center flex-col">
            <h1 className="md:text-7xl text-2xl text-center">
                The page you are looking for could not be found.
            </h1>
            <h2 className="md:text-3xl text-xl">Please let me know if I've made a mistake using the <Link href="/contact" className="text-blue-500">contact page</Link>!</h2>
        </div>
    );
}