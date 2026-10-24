import Image from "next/image";
import { GroupPager } from "../../../components/group-pager/GroupPager";

export const generateMetadata = () => {
  return {
    title: "John Doll | Miami",
    description: "John Doll’s Miami University computer science education, projects, coursework, and campus experience.",
  };
};

export default function Home() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <GroupPager group="education" current="/education/miami" />
      <article className="w-full max-w-6xl space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Miami University
          </h1>
          <p className="text-lg">Fall 2019 - Spring 2023</p>
          <div className="inline-flex justify-center">
            <a
              href="https://miamioh.edu/cec/index.html"
              target="_blank"
              rel="noreferrer"
              title="Visit Miami University website"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/education/miami/miami.webp"
                alt="Miami University logo"
                width={800}
                height={400}
                className="h-auto w-full max-w-2xl object-contain"
                priority
              />
            </a>
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/education/miami/jimkiper.webp"
            alt="Miami University campus"
            width={4000}
            height={6000}
            className="h-64 w-full rounded-lg object-cover shadow md:h-80"
          />
          <Image
            src="/education/miami/seal.webp"
            alt="Miami University seal"
            width={4000}
            height={6000}
            className="h-64 w-full rounded-lg object-cover shadow md:h-80"
          />
        </section>

        <section className="space-y-5 text-base leading-8 md:text-lg">
          <p>
            With high school graduation approaching, I started to tell my
            parents I wasn&apos;t sure that my college experience would be able
            to top high school. I loved the relationships I had and classes I
            took throughout my four years at Wapak. I dipped my toes into
            everything I could, including taking the Intro to Engineering
            course, which was my only academic exposure to engineering prior to
            college. I entered Miami as a triple major in Computer Science,
            Computer Engineering, and Mathematics. I switched majors not one,
            not two, not three, not four, not five, but six times, ultimately
            landing solely on computer science. Having an innate curiousness
            for all of engineering, I wanted to try a lot of different things,
            but never swayed from computer science. My junior and senior years,
            I focused heavily on taking electives within the computer science
            department for all the special courses they offered. All in all,
            including my transfer credits from high school, I graduated with
            190 credit hours.
          </p>
        </section>

        <section className="space-y-8">
          <h2>Involvements</h2>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Undergraduate Associate (UA)</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Fall 2020
            </p>
            <p>
              In the Fall of 2020, I volunteered and was lucky enough to be
              selected as an Undergraduate Associate for a section of
              Computing, Engineering, and Society (CEC 101). Two other UA&apos;s
              (who happened to be my friends) and I were responsible for most
              things outside the classroom except for grading. We would host
              weekly office hours on Zoom as all classes at Miami were virtual
              for that semester. We would have a few kids show up, and we
              actually became friends with a couple of them which was awesome;
              I&apos;m still friends with them today. It was nice to be on the
              other side of the things as the &quot;instructor&quot; for once just
              to gain a new perspective. It has helped me to better understand
              and connect with my professors as I now know the struggles they
              face and as a student have more to offer to the professor having
              taken a position similar to theirs. Other responsibilities we had
              as UA&apos;s was creating and distributing weekly newsletters with
              topics ranging from the class specifically to university-wide
              events. Additionally, we were &quot;buddies&quot; with the first-year
              students as they got accustomed to college life during the COVID
              era. I feel like we were able to have a stronger impact this
              particular year as opposed to others because the students were
              having an extremely tough time getting connected to others and
              finding resources that on-campus students would have no trouble
              doing. This was one of the most rewarding parts of the position
              as I personally was able to help students find their way through
              their first semester at Miami.
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Honors Ambassador</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Panelist (Fall 2020 - Spring 2023)
              <br />
              Breakfast Greeter (Fall 2021 - Spring 2023)
              <br />
              Presidential Showcase Ambassador (Spring 2021 - Spring 2023)
              <br />
              Impromptu Guide on many occasions (Fall 2020 - Spring 2023)
            </p>
            <p>
              I was recommended for the Honors Ambassador position by several
              faculty members after I attended a recruiting event with my
              sister, who was a senior in high school at the time. I, a student
              in just my first semester, was with her along with my parents to
              more or less hang out and get to see each other again. However,
              as the social event moved along, I found myself talking to
              prospective students, telling them my experiences and recommending
              that they come to Miami. The two Chief Departmental Advisors
              (CDA) of my two majors at the time were there as well as my honors
              advisor. They noticed me &quot;doing a much better job of
              recruiting&quot; than they were doing, and we had a good laugh
              about it. I ended up getting invited back to the event the three
              following weeks and was extended an offer as an Honors Ambassador
              - a position otherwise reserved for second-year students. The
              beginning of my work as an ambassador was largely online due to
              the pandemic where I was a part of group and one-on-one sessions
              with prospective students and their families. Things returned to
              in-person my junior and senior year where I was a part of a panel
              every Friday that we hosted an honors information session. I was
              also a part of the morning breakfast mixer where I would talk to
              prospective students and their families about my experiences and
              guide them where they needed to be in our student center. For my
              last panel, I wore a special Mickey Mouse hat for fun and it
              ended up being{" "}
              <a
                href="https://www.instagram.com/p/CrB-dG5r6aH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#255230] underline underline-offset-4"
              >
                the day that the university photographer was there.
              </a>{" "}
              (This post happens to be one of the most liked posts for the
              Miami University Honors account.)
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Honors Student Advisory Board</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Member (Fall 2019 - Spring 2023)
              <br />
              Health and Activities Chair (Spring 2022 - Fall 2022)
            </p>
            <p>
              I applied for, interviewed, and was accepted onto the Honors
              Student Advisory Board (HSAB) in my first semester. On the board,
              I was a member of the health and wellness team each semester where
              I contributed to events and activities such as intramurals,
              newsletters, meditations, and yoga sessions. A big topic on the
              plate of HSAB is Miami&apos;s transition of the Honors Program to
              the Honors College. Almost every meeting, we discussed details
              regarding the new college and how it will be run and what we
              thought was best going forward. Now, Miami&apos;s Honors College
              that I helped to create is{" "}
              <a
                href="https://www.collegetransitions.com/blog/best-honors-colleges/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#255230] underline underline-offset-4"
              >
                ranked fifth best in the country.
              </a>{" "}
              It was an amazing adventure to contribute ideas on such a big
              project by the university. Being on the board was quite
              beneficial as I had insider information and was versed in how the
              college will be operating. This is just one of many ways I use my
              experiences in cross-disciplinary ways to enhance mine and
              other&apos;s time while at Miami.
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Senior Design Project</h3>
            <p>
              My year-long senior design project was to build a machine learning
              model and system that would automatically detect and recogize
              license plates entering and exiting a parking garage. The
              university sponsored this project as they are looking to find a
              much cheaper alternative for parking garage access than the
              current system. The current system is through an annual contract
              costing over $1,000,000 which is on top of each of the $10,000
              cameras that are installed in each garage and on several golf
              carts they drive around to check for parking passes. Our budget
              was $150 and with this, we were able to create the system with
              one camera that was attached to a Raspberry Pi. The system was
              able to detect and recognize license plates in real time and then
              send the data to a database. The system was also able to detect
              and read the characters on the license plate. We had users set up
              that could sign up with their plate and see their entry and exit
              log. We also had admins that could see and correct all of the data
              and add/remove users. I am real proud of my team and our success
              on the project. At the senior design expo, we placed 2nd out of
              over 30 teams.
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Miami Baseball Analytics Manager Team</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Member (Spring 2021 - Spring 2022)
              <br />
              At the time was the largest college baseball analytics team in
              the country
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Theta Tau - Professional Engineering Fraternity</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Member (Fall 2019 - Spring 2023)
              <br />
              Athletics Chair (Winter 2021 - Winter 2022)
            </p>
            <p>
              In my position, I was able to hold over 10 events virtually in
              just my first semester. Fraternity involvement in intramurals was
              up 300% from the previous record. I had a wonderful time playing
              on and rooting for our teams and providing electric energy each
              week at chapter meetings. My best friends are from the fraternity
              and after school, this position is where I spent most of my time,
              upwards of 8-10 hours a week.
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Association of Computer Machinery</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Member (Fall 2019 - Spring 2023)
            </p>
          </section>

          <section className="space-y-5 text-base leading-8 md:text-lg">
            <h3>Bridges Scholars (diversity organization)</h3>
            <p className="border-l-4 border-[#255230] pl-4 font-semibold text-white">
              Member (Fall 2019 - Spring 2023)
            </p>
          </section>
        </section>
      </article>
    </div>
  );
}
