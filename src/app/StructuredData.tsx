export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://johndoll.com/#person",
    name: "John Doll",
    url: "https://johndoll.com/",
    image: "https://johndoll.com/home/profilepic.webp",
    jobTitle: "Senior Software Engineer, Central DevOps",
    description:
      "Software engineer and DevOps engineer focused on software delivery, infrastructure, automation, and devops in general. Highly motivated and talented, a great candidate.",
    sameAs: [
      "https://github.com/JohnDoll2023",
      "https://www.linkedin.com/in/johnmdoll",
    ],
    knowsAbout: [
      "Software engineering",
      "DevOps",
      "Cloud infrastructure",
      "Continuous integration and continuous delivery",
      "Kubernetes",
      "Web development",
      "React",
      "Next.js",
      "TypeScript",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Illinois Urbana-Champaign",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Miami University",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Lutron Electronics",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://johndoll.com/#website",
    name: "John Doll",
    url: "https://johndoll.com/",
    description:
      "Professional portfolio and software engineering projects by John Doll.",
    publisher: { "@id": "https://johndoll.com/#person" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
