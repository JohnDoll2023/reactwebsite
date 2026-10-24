import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type SearchEntry = {
  title: string;
  href: string;
  text: string;
};

const searchEntries: SearchEntry[] = [
  { title: "Home", href: "/", text: "John Doll software engineer and DevOps engineer portfolio." },
  { title: "Resume", href: "/resume", text: "John M. Doll. DevOps Engineer focused on CI/CD, cloud infrastructure, automation, and software delivery. 567-356-0382, jdollmu@gmail.com, johnmdoll.com, linkedin.com/in/johnmdoll, github.com/JohnDoll2023. Lutron Electronics, Amazon, Cloudbees, Jenkins, Ansible, Docker, AWS, Azure, Groovy, Bash, Python, Java, Kotlin, Swift, C#, SQL, Ruby, Git, GitHub, GitLab, Jira, Kubernetes, New Relic." },
  { title: "Experience", href: "/experience", text: "Professional experience at Lutron, Amazon, Hospitality Wifi, St. Mark's, and Marathon." },
  { title: "Lutron", href: "/experience/lutron", text: "Senior DevOps Engineer and software engineer working with Cloudbees, Jenkins, Groovy, Docker, Ansible, AWS, Azure, and Kubernetes." },
  { title: "Amazon (2022)", href: "/experience/amazon2022", text: "Software Development Engineer Intern building Android applications with Deep Java Library and machine learning." },
  { title: "Amazon (2021)", href: "/experience/amazon2021", text: "Software Development Engineer Intern building secure web applications, dashboards, APIs, HTML, CSS, and JavaScript." },
  { title: "Hospitality Wifi", href: "/experience/hw", text: "Global Support Liaison experience in hospitality WiFi, networking, systems, and technical support." },
  { title: "St. Mark's", href: "/experience/stmarks", text: "Sound and technology support experience including livestreaming, audio, video, and church production." },
  { title: "Marathon", href: "/experience/marathon", text: "IT and Engineering Explorers Program experience with Arduino, engineering, and technology." },
  { title: "Projects", href: "/projects", text: "Software projects built with React, Next.js, Tailwind CSS, TypeScript, data visualization, and web development." },
  { title: "Website 3.0", href: "/projects/website3", text: "Current personal website built with React, Next.js, Tailwind CSS, and TypeScript." },
  { title: "Website 2.0", href: "/projects/website2", text: "Personal website built with AWS, web development, JavaScript, HTML, and CSS." },
  { title: "Website 1.0", href: "/projects/website1", text: "First public-facing website built during college with HTML, CSS, and JavaScript." },
  { title: "COVID-19 Dynamic Dashboard", href: "/projects/covid", text: "Health services web application and data visualization dashboard with charts, maps, and testing." },
  { title: "Checkers", href: "/projects/checkers", text: "Fully functional checkers game and software project." },
  { title: "Daily Tennis App", href: "/projects/dailytennis", text: "The Daily Tennis App project." },
  { title: "Education", href: "/education", text: "Education at the University of Illinois, Miami University, and Wapakoneta High School." },
  { title: "University of Illinois", href: "/education/illinois", text: "Master of Computer Science, graduate courses, data mining, data visualization, deep learning, and database systems." },
  { title: "Miami University", href: "/education/miami", text: "Bachelor of Science in Computer Science, software engineering, computer security, and artificial intelligence." },
  { title: "Wapakoneta High School", href: "/education/wapak", text: "High school education, tennis, projects, and extracurricular activities." },
  { title: "Contact", href: "/contact", text: "Contact John Doll about work, questions, or collaboration." },
  { title: "1 Second Everyday", href: "/1se", text: "1SE project and video application." },
  { title: "Blog", href: "/blog", text: "Blog posts and writing by John Doll." },
];

function getResults(query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return searchEntries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const text = entry.text.toLowerCase();
      const searchable = `${title} ${text}`;
      const score = terms.reduce((total, term) => {
        if (title === term) return total + 12;
        if (title.includes(term)) return total + 7;
        if (text.includes(term)) return total + 3;
        return total;
      }, 0) + (searchable.startsWith(terms[0]) ? 2 : 0);
      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, 8)
    .map(({ entry }) => entry);
}

function highlight(text: string, query: string) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return text;
  const expression = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "ig");
  return text.split(expression).map((part, index) =>
    terms.some((term) => part.toLowerCase() === term.toLowerCase()) ? <mark key={index}>{part}</mark> : part,
  );
}

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => getResults(query), [query]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={`site-search ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="site-search-toggle"
        aria-label={open ? "Close site search" : "Open site search"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
        </svg>
      </button>
      <div className="site-search-panel" hidden={!open}>
        <label htmlFor="site-search-input" className="sr-only">Search this site</label>
        <input
          id="site-search-input"
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search site..."
          autoComplete="off"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="site-search-results"
        />
        {query && (
          <div id="site-search-results" className="site-search-results" role="listbox">
            {results.length > 0 ? results.map((result) => (
              <Link
                key={result.href}
                href={result.href}
                role="option"
                className="site-search-result"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
              >
                <strong>{result.title}</strong>
                <span>{highlight(result.text, query)}</span>
              </Link>
            )) : <p className="site-search-empty">No matching pages.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
