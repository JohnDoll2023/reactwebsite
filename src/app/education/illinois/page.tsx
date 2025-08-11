import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Illinois',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <div className="order-2 md:order-1">
        <h2>University of Illinois (Fall 2024 - Present)</h2>
      </div>
      <div className="flex flex-1 flex-col md:flex-row items-center order-3 md:order-2">
        <p className="flex-1 text-xl text-left order-2 md:order-1">
          When I began my search for a graduate school to attend to pursue my Master's in Computer Science, one of criteria I used
          was to find a program that was highly touted and well-regarded. Enter, the University of Illinois, a prestigious institution 
          known for its strong engineering and computer science programs. 
        </p>
        <div className="relative w-full max-w-2xl aspect-video order-1 md:order-2 md:my-0 my-4">
          <Link href="https://illinois.edu" target="_blank">
            <Image
              src="/illinois.png"
              alt="University of Illinois block I logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <p className="flex-1 text-xl text-left order-3 md:order-3 md:mt-0 mt-7">
          Funny enough, the first time I visited campus (Urbana-Champaign) was while I was already in the midst of my first semester as a recruiter for Lutron.
          I went to the career fair and was recruiting my classmates shortly after becoming a member of the student body myself, albeit remotely.
        </p>
      </div>
      <div className="flex flex-col items-start w-full order-4 md:order-3 md:my-0 mt-10">
        <div className="flex items-start mb-4">
          <h3>Courses</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full text-2xl gap-4">
          <div className="order-1 md:order-none">
            <div className="flex flex-row justify-between">
              <h4>Completed</h4>
            </div>
            <div className="flex-1 text-xl text-left">
              <p><Link href="https://siebelschool.illinois.edu/academics/courses/CS427" target="_blank" className="hover:underline">CS 427 - Software Engineering</Link></p>
              <p><Link href="https://siebelschool.illinois.edu/academics/courses/CS412" target="_blank" className="hover:underline">CS 412 - Data Mining</Link></p>
              <p><Link href="https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=507" target="_blank" className="hover:underline">CS 416 - Data Visualization</Link></p>
              <p><Link href="https://siebelschool.illinois.edu/academics/courses/CS513" target="_blank" className="hover:underline">CS 513 - Data Cleaning</Link></p>
            </div>
          </div>
          <div className="order-2 md:order-none">
            <div className="flex flex-row justify-between">
              <h4>Upcoming</h4>
            </div>
            <div className="flex-1 text-xl">
              <p><Link href="https://siebelschool.illinois.edu/academics/courses/cs598ao2" target="_blank" className="hover:underline">CS 598 - Data Curation</Link></p>
              <p><Link href="https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=2191" target="_blank" className="hover:underline">CS 598 - Deep Learning for Healthcare</Link></p>
            </div>
          </div>
          <div className="order-3 md:order-none">
            <div className="flex flex-row justify-between">
              <h4>Transferred from Miami</h4>
            </div>
            <div className="flex-1 text-xl">
              <p><Link href="https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-467.html" target="_blank" className="hover:underline">CSE 567 - Computer and Network Security</Link></p>
              <p><Link href="https://bulletin.miamioh.edu/courses-instruction/qtm/#:~:text=QTM%C2%A0161.%20Quantum,CSE%C2%A0374." target="_blank" className="hover:underline">CSE 570N - Quantum Computing</Link></p>
              <p><Link href="https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-486.html" target="_blank" className="hover:underline">CSE 586 - Artificial Intelligence</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}