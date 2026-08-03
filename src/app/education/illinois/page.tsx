import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Illinois',
    };
  };

const completedCourses = [
  {
    href: "https://siebelschool.illinois.edu/academics/courses/CS427",
    label: "CS 427 - Software Engineering",
  },
  {
    href: "https://siebelschool.illinois.edu/academics/courses/CS412",
    label: "CS 412 - Data Mining",
  },
  {
    href: "https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=507",
    label: "CS 416 - Data Visualization",
  },
  {
    href: "https://siebelschool.illinois.edu/academics/courses/CS513",
    label: "CS 513 - Data Cleaning",
  },
  {
    href: "https://siebelschool.illinois.edu/academics/courses/cs598ao2",
    label: "CS 598 - Data Curation",
  },
  {
    href: "https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=2191",
    label: "CS 598 - Deep Learning for Healthcare",
  },
  {
    href: "https://siebelschool.illinois.edu/academics/courses/cs411",
    label: "CS 411 - Database Systems",
  },
];

const transferredCourses = [
  {
    href: "https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-467.html",
    label: "CSE 567 - Computer and Network Security",
  },
  {
    href: "https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-486.html",
    label: "CSE 586 - Artificial Intelligence",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <div className="order-2 md:order-1">
        <h2>University of Illinois (Fall '24 - August '26)</h2>
      </div>
      <div className="flex flex-1 flex-col md:flex-row items-center order-3 md:order-2">
        <p className="flex-1 text-xl text-left order-2 md:order-1">
          When I began my search for a graduate school to attend to pursue my Master&apos;s in Computer Science, one of criteria I used
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
          Funny enough, the first time I visited campus (Urbana-Champaign) was as a recruiter for Lutron while I was already in the midst of my first semester.
          I went to the career fair and was recruiting my classmates shortly after becoming a member of the student body myself, albeit remotely.
        </p>
      </div>
      <div className="flex flex-col items-start w-full order-4 md:order-3 md:my-0 mt-10">
        <div className="flex items-start mb-4">
          <h3>Courses</h3>
        </div>
        <div className="w-full text-2xl">
          <div className="md:hidden">
            <div className="flex flex-row justify-between">
              <h4>Completed</h4>
            </div>
            <div className="flex-1 text-xl text-left">
              {completedCourses.map((course) => (
                <p key={course.label}>
                  <Link href={course.href} target="_blank" className="hover:underline">
                    {course.label}
                  </Link>
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-row justify-between">
              <h4>Transferred from Miami</h4>
            </div>
            <div className="flex-1 text-xl">
              {transferredCourses.map((course) => (
                <p key={course.label}>
                  <Link href={course.href} target="_blank" className="hover:underline">
                    {course.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 md:gap-4">
            <div>
              <div className="flex flex-row justify-between">
                <h5>Completed</h5>
              </div>
              <div className="flex-1 text-xl text-left">
                {completedCourses.slice(0, 4).map((course) => (
                  <p key={course.label}>
                    <Link href={course.href} target="_blank" className="hover:underline">
                      {course.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="invisible">Completed</h4>
              <div className="flex-1 text-xl text-left">
                {completedCourses.slice(4).map((course) => (
                  <p key={course.label}>
                    <Link href={course.href} target="_blank" className="hover:underline">
                      {course.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-row justify-between">
                <h5>Transferred from Miami</h5>
              </div>
              <div className="flex-1 text-xl">
                {transferredCourses.map((course) => (
                  <p key={course.label}>
                    <Link href={course.href} target="_blank" className="hover:underline">
                      {course.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}