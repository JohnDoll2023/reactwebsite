import Image from "next/image";

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
        <h2>University of Illinois (Fall &apos;24 - August &apos;26)</h2>
      </div>
      <div className="order-3 grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3">
        <Image
          src="/education/illinois/background.jpeg"
          alt="University of Illinois campus"
          width={2268}
          height={4032}
          className="h-72 w-full rounded-lg object-contain shadow md:h-96"
        />
        <div className="relative h-48 w-full md:h-64">
          <Image
            src="/education/illinois/illinois.png"
            alt="University of Illinois block I logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <Image
          src="/education/illinois/statue.jpeg"
          alt="University of Illinois campus statue"
          width={2268}
          height={4032}
          className="h-72 w-full rounded-lg object-contain shadow md:h-96"
        />
      </div>
      <div className="order-4 grid flex-1 grid-cols-1 items-center gap-8 md:grid-cols-2">
        <p className="text-left text-xl">
          When I began my search for a graduate school to attend to pursue my Master&apos;s in Computer Science, one of criteria I used
          was to find a program that was highly touted and well-regarded. Enter, the University of Illinois, a prestigious institution 
          known for its strong engineering and computer science programs. 
        </p>
        <p className="text-left text-xl">
          Funny enough, the first time I visited campus (Urbana-Champaign) was as a recruiter for Lutron while I was already in the midst of my first semester.
          I went to the career fair and was recruiting my classmates shortly after becoming a member of the student body myself, albeit remotely.
        </p>
      </div>
      <div className="flex flex-col items-start w-full order-5 md:my-0 mt-10">
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
                  <a href={course.href} target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
                    {course.label}
                  </a>
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-row justify-between">
              <h4>Transferred from Miami</h4>
            </div>
            <div className="flex-1 text-xl">
              {transferredCourses.map((course) => (
                <p key={course.label}>
                  <a href={course.href} target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
                    {course.label}
                  </a>
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
                    <a href={course.href} target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
                      {course.label}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="invisible">Completed</h4>
              <div className="flex-1 text-xl text-left">
                {completedCourses.slice(4).map((course) => (
                  <p key={course.label}>
                    <a href={course.href} target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
                      {course.label}
                    </a>
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
                    <a href={course.href} target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
                      {course.label}
                    </a>
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