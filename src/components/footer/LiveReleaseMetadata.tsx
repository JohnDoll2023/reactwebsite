"use client";

import { useEffect, useState } from "react";

type ReleaseMetadata = {
  version: string;
  versionUrl: string | null;
  lastEdited: string;
  lastCommitUrl: string | null;
};

type GitHubRelease = {
  tag_name?: string;
  html_url?: string;
  published_at?: string;
};

export function LiveReleaseMetadata({
  fallback,
}: {
  fallback: ReleaseMetadata;
}) {
  const [metadata, setMetadata] = useState(fallback);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/repos/JohnDoll2023/reactwebsite/releases/latest", {
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub release request failed with ${response.status}`);
        }
        return response.json() as Promise<GitHubRelease>;
      })
      .then((release) => {
        if (!release.tag_name || !release.published_at) {
          throw new Error("GitHub release response omitted required metadata");
        }

        setMetadata((current) => ({
          ...current,
          version: release.tag_name!,
          versionUrl: release.html_url || `https://github.com/JohnDoll2023/reactwebsite/releases/tag/${release.tag_name}`,
          lastEdited: release.published_at!.slice(0, 10),
        }));
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.warn("Unable to load latest release metadata; using build metadata.", error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <p className="text-sm">
        {metadata.lastCommitUrl ? (
          <a href={metadata.lastCommitUrl} target="_blank" rel="noopener noreferrer">
            Last Edited On: <span className="underline">{metadata.lastEdited}</span>
          </a>
        ) : (
          <>Last Edited On: <span className="underline">{metadata.lastEdited}</span></>
        )}
      </p>
      {metadata.version && (
        <p className="text-sm">
          {metadata.versionUrl ? (
            <a href={metadata.versionUrl} target="_blank" rel="noopener noreferrer">
              Version: <span className="underline">{metadata.version}</span>
            </a>
          ) : (
            <>Version: <span className="underline">{metadata.version}</span></>
          )}
        </p>
      )}
    </>
  );
}
