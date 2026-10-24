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
