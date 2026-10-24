import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const runGit = (args, fallback) => {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim() || fallback;
  } catch {
    return fallback;
  }
};

const runJsonRequest = (url) => {
  try {
    return JSON.parse(
      execFileSync("curl", ["--fail", "--silent", "--show-error", "--location", url], {
        encoding: "utf8",
      }),
    );
  } catch {
    return null;
  }
};

const formatDate = (value) => {
  if (!value || value === "unknown") {
    return "unknown";
  }

  const numericValue = Number(value);
  const date = Number.isNaN(numericValue)
    ? new Date(value)
    : new Date(numericValue < 1e12 ? numericValue * 1000 : numericValue);

  return Number.isNaN(date.getTime()) ? "unknown" : date.toISOString().slice(0, 10);
};

const sourceCommit = process.env.CODEBUILD_RESOLVED_SOURCE_VERSION || "unknown";
const sourceDate = process.env.CODEBUILD_START_TIME || "unknown";
const localCommit = runGit(
  ["log", "-1", "--format=%H|%cI"],
  "",
).split("|");
const sourceCommitData =
  sourceCommit !== "unknown"
    ? runJsonRequest(`https://api.github.com/repos/JohnDoll2023/reactwebsite/commits/${sourceCommit}`)
    : null;
const commit = localCommit[0]
  ? localCommit
  : [
      sourceCommit,
      sourceCommitData?.commit?.committer?.date || sourceDate,
    ];
const commitMessage = runGit(["log", "-1", "--format=%s"], "");
const localVersion = runGit(["tag", "--sort=-version:refname"], "")
  .split("\n")
  .find(Boolean);
const latestRelease = runJsonRequest(
  "https://api.github.com/repos/JohnDoll2023/reactwebsite/releases/latest",
);
const remoteTags = runGit(
  [
    "ls-remote",
    "--tags",
    "--refs",
    "--sort=-v:refname",
    "https://github.com/JohnDoll2023/reactwebsite.git",
  ],
  "",
);
const remoteVersion = remoteTags.match(/refs\/tags\/(v\d+\.\d+\.\d+)$/m)?.[1];
const version = latestRelease?.tag_name || localVersion || remoteVersion || "unreleased";
const pullRequestNumber = commitMessage.match(/Merge pull request #(\d+)/)?.[1];
const metadata = {
  lastEdited: formatDate(commit[1]),
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
