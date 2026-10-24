import Link from "next/link";

type Group = "education" | "experience" | "projects";

const groups = {
  education: [
    { href: "/education/wapak", label: "Wapakoneta High School" },
    { href: "/education/miami", label: "Miami University" },
    { href: "/education/illinois", label: "University of Illinois" },
  ],
  experience: [
    { href: "/experience/marathon", label: "Marathon" },
    { href: "/experience/stmarks", label: "St. Mark's" },
    { href: "/experience/hw", label: "Hospitality Wifi" },
    { href: "/experience/amazon2021", label: "Amazon (2021)" },
    { href: "/experience/amazon2022", label: "Amazon (2022)" },
    { href: "/experience/lutron", label: "Lutron" },
  ],
  projects: [
    { href: "/projects/checkers", label: "Checkers" },
    { href: "/projects/covid", label: "COVID Dashboard" },
    { href: "/projects/website1", label: "Website 1.0" },
    { href: "/projects/website2", label: "Website 2.0" },
    { href: "/projects/website3", label: "Website 3.0" },
  ],
} satisfies Record<Group, { href: string; label: string }[]>;

export function GroupPager({ group, current }: { group: Group; current: string }) {
  const pages = groups[group];
  const index = pages.findIndex((page) => page.href === current);
  const previous = index > 0 ? pages[index - 1] : undefined;
  const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined;

  return (
    <nav aria-label={`${group} page navigation`} className="group-pager">
      {previous ? (
        <Link
          href={previous.href}
          className="group-pager-link group-pager-previous"
          aria-label={`Previous ${group} page: ${previous.label}`}
          title={previous.label}
        >
          <span aria-hidden="true">←</span>
          <span>{previous.label}</span>
        </Link>
      ) : <span />}
      {next ? (
        <Link
          href={next.href}
          className="group-pager-link group-pager-next"
          aria-label={`Next ${group} page: ${next.label}`}
          title={next.label}
        >
          <span>{next.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
