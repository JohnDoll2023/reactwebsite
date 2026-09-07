import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Lutron',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <article className="w-full max-w-6xl space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Lutron</h1>
          <p className="text-lg">Senior Software Engineer with Central DevOps</p>
          <div className="inline-flex justify-center">
            <a href="https://lutron.com" target="_blank" rel="noreferrer" title="Visit Lutron website" className="transition-opacity hover:opacity-80">
              <Image
                src="/experience/lutron/lutron.png"
                alt="Lutron logo"
                width={2000}
                height={529}
                className="h-auto w-full max-w-64 object-contain brightness-0 invert"
                priority
              />
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Image
            src="/experience/lutron/5k.jpeg"
            alt="Lutron 5K"
            width={4032}
            height={3024}
            className="aspect-[4/3] h-full w-full rounded-lg object-cover shadow"
          />
          <Image
            src="/experience/lutron/starwars.jpeg"
            alt="Lutron Star Wars event"
            width={4032}
            height={3024}
            className="aspect-[4/3] h-full w-full rounded-lg object-cover shadow"
          />
          <Image
            src="/experience/lutron/promotion.jpeg"
            alt="Lutron promotion"
            width={3213}
            height={5712}
            className="aspect-[3/4] h-full w-full rounded-lg object-cover shadow"
          />
        </section>

        <section className="space-y-5 text-base leading-8 md:text-lg">
          <p>
            I started at Lutron Electronics in June 2023 shortly after <Link href="/education/miami" className="font-semibold text-[#255230] underline underline-offset-4">graduating from Miami</Link> and have learned more than I ever could have fathomed.
            In my fourth year with the company, I have had two different team leads across four software teams.
            I organize my office&apos;s 5Ks as well as orchestrate our recruiting efforts at my alma mater.
          </p>
          <p>
            Upon joining Lutron, I was placed on the Mobile App Infrastructure team.
            In this role, I learned the basics and foundations of pipelines, automation and DevOps, particularly with Cloudbees, Jenkins, and Groovy.
            At Miami, I took a fantastic course in DevOps, but coursework can&apos;t replicate the real thing.
            Without going into magnifying detail, the course did cover some useful topics that I was able to transfer such as Docker, Ansible, and AWS tooling.
            I utilized Ansible frequently in order to build up the scripts and Infrastructure-as-Code (IaC) we had in place for our local build machines.
            I was exposed to and improved the process for building iOS and Android apps, and releasing them to their respective app stores both to testers and publicly.
          </p>
          <p>
            The second team I was on was Systems Infrastructure.
            Seven to eight months after I joined Lutron, the Mobile App Infrastructure team absorbed responsibilities for other platforms, so while my team and I still maintained the mobile app infrastructure, we started to take care of a couple other domains as well.
            One of my biggest projects at Lutron was on this team, where I was tasked with creating a multi-architecture Docker container.
            At the time, only Windows users were able to develop and build one of our platforms, and the environment setup was long and tedious.
            As a Mac user myself, I had to find ways to make the platform build work on Mac too, and package it in a unified Docker container that could be used by either Windows or Mac users.
            The requirements of this project helped us advance how we generate our own Docker containers, and reduced the setup time for developers from roughly a week to ~10 minutes.
          </p>
          <p>
            Around two years into my tenure with Lutron, I transitioned to my third team that we referred to as “fast-feature team.”
            It was a combination of software and embedded developers to get the embedded software on our physical device products to communicate with our mobile and desktop applications.
            My part was to add the software definitions of the device to our applications, and also to ensure they could communicate their settings and events back and forth with each other.
            I worked across multiple applications and across disciplines in a highly collaborative environment to satisfy the needs of the project.
          </p>
          <p>
            After a year on the fast-feature team, I moved over to the Central DevOps team in May 2026.
            I spent the first ten weeks knocking the dust off and remembering the state of the mobile app infrastructure, which is now wholly my responsibility.
            I listened to the mobile app developers - my customers - and fixed many pain points they were suffering from.
            I was largely trusted to work autonomously to whip the pipelines and automation back into shape, which I am very proud of having done.
            When I became a part of DevOps, the mobile app release build process was failing over 50% of the time, causing messy failures and leaving the app in a hard-to-recover-from state.
            Now, the release build process is hovering around a 95% success rate, with the small number of failures mostly fixable by a simple re-run of the pipeline.
            But my role has expanded far past the original mobile app infrastructure I was trusted with when I began working at Lutron.
            Today, I am responsible for the Azure Kubernetes upgrade processes, the system infrastructure I maintained before, permissions management, Cloudbees management, and many other random tasks and fires that come with being a member of the Central DevOps team.
          </p>
          <p>
            Across each of these teams, I have been very active outside of my technical day-to-day work.
            I took over the planning and execution of my office&apos;s 5K and BBQ.
            As a runner, and a person who loves to plan things, I found myself naturally fitting into this position.
            I am also the lead recruiter at my alma mater, Miami University.
            I plan which clubs we will talk to, the info sessions we have, the kits we want for the career fair, and maintain our relationship with key contacts at Miami.
            Not only do I run the recruiting at Miami, but I assist with recruiting at other schools as well, including my graduate school, the <Link href="/education/illinois" className="font-semibold text-[#255230] underline underline-offset-4">University of Illinois</Link>.
          </p>
        </section>
      </article>
    </div>
  );
}