import type React from "react";
import ResumeDownload from "./ResumeDownload";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Resume',
      description: 'John Doll’s software engineering and DevOps resume, including experience, education, skills, and projects.',
    };
  };

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 px-4 py-4 md:gap-6 md:px-0 md:py-0">
        <article className="w-full max-w-4xl rounded-2xl border border-black/10 p-5 shadow-sm dark:border-white/20 md:p-8">
          <header className="border-b border-black/10 pb-5 dark:border-white/20">
            <h1 className="text-4xl md:text-6xl">John M. Doll</h1>
            <p className="mt-2 text-lg font-bold md:text-2xl">DevOps Engineer | CI/CD | Cloud Infrastructure | Automation</p>
            <p className="mt-3 text-sm leading-7 md:text-base">
              567-356-0382 • jdollmu@gmail.com • johnmdoll.com • linkedin.com/in/johnmdoll • github.com/JohnDoll2023
            </p>
          </header>
          <section className="mt-6 space-y-3">
            <h2 className="text-2xl md:text-3xl">Summary</h2>
            <p>DevOps Engineer with 3+ years of experience building and optimizing CI/CD infrastructure, release automation, and configuration-as-code systems. Proven track record strengthening build performance, release reliability, developer productivity, and deployment automation across large scale development environments.</p>
          </section>
          <section className="mt-6 space-y-5">
            <h2 className="text-2xl md:text-3xl">Experience</h2>
            <ResumeRole title="Senior Software Engineer – Central DevOps" company="Lutron Electronics" location="Boynton Beach, FL" dates="June 2023 – Present">
              <li>Reduced development build time by 56 minutes per run (from 2+ hours) across a job executing ~90 times daily.</li>
              <li>Resolved recurring build machine outages by optimizing Cloudbees disk configuration by cutting usage from 100% (build-blocking) to a stable ~60% while increasing the build history visible to mobile app teams.</li>
              <li>Achieved near 100% build machine reliability via configuration-as-code (Ansible, Cloudbees), closing multiple security gaps while also improving the self-service environment all mobile developers already rely on.</li>
              <li>Built a multi-arch Docker development environment (Buildx, ARM64, AMD64) to bridge the Mac/Windows gap for our largest dev division and cut new hire setup time by over 99% from ~1 week to 10 minutes.</li>
              <li>Improved release build success rate from 51% to 84% in two weeks through pipeline optimization.</li>
              <li>Automated Android/iOS beta and production build and deployment workflows using Groovy, Cloudbees, and API integrations, removing manual release steps and lowering deployment risk.</li>
              <li>Architected a New Relic dashboard with 5 tabs and ~50 widgets surfacing comprehensive build and test metrics across all mobile pipelines.</li>
              <li>Engineered the weekly company-wide software signoff process using Cloudbees pipelines, Jira integrations, and approval tracking to create a single audit trail and eliminate human error.</li>
              <li>Pioneered dynamic parametrization for Cloudbees CI/CD jobs, clearing hard-coded values and enabling self-updating, future-proof pipelines.</li>
              <li>Serve as Campus Recruiting Manager for my alma mater, organizing 20+ recruiting events reaching 1000+ students.</li>
            </ResumeRole>
            <ResumeRole title="Software Engineer Intern" company="Amazon" location="Santa Clara, CA" dates="May 2022 – August 2022">
              <li>Released 3 Android apps built with Deep Java Library, an open-source deep learning Java framework.</li>
              <li>Published a 7-page technical article on Semantic Segmentation to Towards AI.</li>
              <li>Debugged and solved numerous issues, boosting DJL reliability and efficiency.</li>
            </ResumeRole>
            <ResumeRole title="Software Engineer Intern" company="Amazon" location="Seattle, WA" dates="May 2021 – August 2021">
              <li>Utilized HTML, CSS, JavaScript, Ajax, and jQuery to construct the frontend of a highly secure web app.</li>
              <li>Created a dashboard with an extensible API integration pattern where new sources required just 3 more lines of code.</li>
              <li>Designed the architecture and UI for a web-based product projected to save developers and customer service hundreds of hours monthly and thousands of dollars in operational costs at 1000+ monthly uses.</li>
            </ResumeRole>
          </section>
          <section className="mt-6 space-y-3">
            <h2 className="text-2xl md:text-3xl">Education</h2>
            <ul className="list-disc space-y-2 pl-6"><li>University of Illinois — Urbana, IL — GPA: 4.0 — Master of Computer Science — August 2026</li><li>Miami University — Oxford, OH — GPA: 3.76 — B.S. in Computer Science (Cum Laude) — May 2023</li></ul>
          </section>
          <section className="mt-6 space-y-3">
            <h2 className="text-2xl md:text-3xl">Skills</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>DevOps / Infrastructure:</strong> Jenkins, Cloudbees, Ansible, Docker, AWS, Azure, Artifactory</li>
              <li><strong>CI/CD &amp; Automation:</strong> Groovy, Bash, Python, Fastlane, API Integration, Release Automation</li>
              <li><strong>Development:</strong> Java, Kotlin, Swift, C#, SQL, Ruby</li>
              <li><strong>Version Control &amp; Collaboration:</strong> Git, GitHub, GitLab, Bitbucket, Jira, Confluence</li>
              <li><strong>Security / Quality / Observability:</strong> Fortify, SonarQube, New Relic</li>
              <li><strong>AI-Assisted Development:</strong> Claude Code, Sourcegraph, Amp, GitHub Copilot</li>
            </ul>
          </section>
        </article>
        <iframe
          src="/JohnDollResume.pdf?v=2#view=FitH"
          className="h-[72vh] w-full max-w-4xl min-w-0 rounded-2xl md:h-[80vh]"
          title="Resume"
        />
        <ResumeDownload />
    </main>
  );
}

function ResumeRole({
  title,
  company,
  location,
  dates,
  children,
}: {
  title: string;
  company: string;
  location: string;
  dates: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <div className="flex flex-col justify-between gap-1 md:flex-row">
        <div><h3 className="text-xl not-italic">{title}</h3><p className="font-bold">{company}</p></div>
        <p className="text-sm md:text-right">{location}<br />{dates}</p>
      </div>
      <ul className="list-disc space-y-1 pl-6 leading-7">{children}</ul>
    </section>
  );
}
