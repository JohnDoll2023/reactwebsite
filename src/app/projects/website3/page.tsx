import Image from "next/image";
import Link from "next/link";
import { GroupPager } from "../../../components/group-pager/GroupPager";

export const generateMetadata = () => {
    return {
      title: "John Doll | Website 3.0",
    };
};

export default function Home() {
    return (
      <main className="flex-1 bg-[#171717] text-white">
        <GroupPager group="projects" current="/projects/website3" />
        <section className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur md:p-10">
            <div className="space-y-6 text-base leading-7 text-slate-300 md:text-lg">
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Website 3.0
              </h1>

              <p>
                I created the third iteration of my personal website to share my experiences in a more personalized way.
                The last two versions, <Link href="/projects/website1" className="font-semibold text-sky-300 underline underline-offset-4">1.0</Link> and <Link href="/projects/website2" className="font-semibold text-sky-300 underline underline-offset-4">2.0</Link>, contained the stories I wanted to share, but they felt too plain and did not feel enough like me.
                This version has a terminal theme, with different subthemes across some of the tabs for fun.
                Even with its terminal theme, the site feels modern and sleek, giving it a more professional feel while preserving my fun stories and experiences.
              </p>

              <p>
                I started this edition in Fall 2024, when I began graduate school.
                Balancing development with my coursework proved difficult, so I did not put much work into it over the next 20 months.
                Once I finished graduate school, I returned to developing the site and, with help from GitHub Copilot, began building the pages I had envisioned.
              </p>

              <div className="flex justify-center py-2">
                <Image
                  src="/projects/website3/aws.webp"
                  alt="AWS CodePipeline deployment for the website"
                  width={2938}
                  height={1294}
                  className="h-auto w-full max-w-4xl rounded-xl object-contain shadow-lg"
                />
              </div>

              <p>
                This website is built using React, Next.js, Tailwind CSS, and TypeScript.
                This is my first time using React and Next.js, which I chose specifically to learn more about them in a personal, real-world project.
                I have also put significant effort into learning the GitHub workflow, using Projects, GitHub Actions, pull requests, and Issues to understand how these tools are used in production environments.
                Each version of my website has been deployed on AWS, but this version has been the most complicated by far.
                In version 1.0, I got down and dirty and learned what I needed to know to get a simple website up and running.
                In version 2.0, I moved to AWS and added automation so that each commit automatically updated the website.
                Because this version uses React and Next.js, I have to build the application on AWS before sending the build output to the container serving the public site.
                My older versions also took a while to update, so I learned how to set up a cache invalidator that makes each update available to end users immediately.
                As a DevOps engineer, figuring out the automation associated with these things was fascinating to me.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
}