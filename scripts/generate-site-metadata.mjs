import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const runGit = (args, fallback) => {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim() || fallback;
  } catch {
    return fallback;
  }
};

const commit = runGit(["log", "-1", "--format=%H|%cI"], "unknown|unknown").split("|");
const commitMessage = runGit(["log", "-1", "--format=%s"], "");
const version = runGit(["describe", "--tags", "--abbrev=0"], "unreleased");
const pullRequestNumber = commitMessage.match(/Merge pull request #(\d+)/)?.[1];
const metadata = {
  lastEdited: commit[1],
  lastCommitUrl:
    pullRequestNumber
      ? `https://github.com/JohnDoll2023/reactwebsite/pull/${pullRequestNumber}`
      : commit[0] === "unknown"
        ? null
        : `https://github.com/JohnDoll2023/reactwebsite/commit/${commit[0]}`,
  version,
  versionUrl:
    version === "unreleased"
      ? null
      : `https://github.com/JohnDoll2023/reactwebsite/releases/tag/${version}`,
};

mkdirSync("src/generated", { recursive: true });
writeFileSync(
  "src/generated/site-metadata.ts",
  `const siteMetadata = ${JSON.stringify(metadata)} as const;\n\nexport default siteMetadata;\n`,
);

const routes = [
  "",
  "/1se",
  "/blog",
  "/contact",
  "/dj",
  "/education",
  "/education/illinois",
  "/education/miami",
  "/education/wapak",
  "/experience",
  "/experience/amazon2021",
  "/experience/amazon2022",
  "/experience/hw",
  "/experience/lutron",
  "/experience/marathon",
  "/experience/stmarks",
  "/projects",
  "/projects/checkers",
  "/projects/covid",
  "/projects/dailytennis",
  "/projects/website1",
  "/projects/website2",
  "/projects/website3",
  "/resume",
];

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (route) =>
        `  <url><loc>https://johndoll.com${route}/</loc><changefreq>${route === "" ? "monthly" : "yearly"}</changefreq><priority>${route === "" ? "1.0" : "0.7"}</priority></url>`,
    )
    .join("\n")}\n</urlset>\n`,
);

writeFileSync(
  "public/robots.txt",
  "User-agent: *\nAllow: /\nDisallow: /_next/\nSitemap: https://johndoll.com/sitemap.xml\nHost: https://johndoll.com\n",
);
