"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
    const [lastEdited, setLastEdited] = useState<string | null>(null);
    const [lastCommitUrl, setLastCommitUrl] = useState<string | null>(null);
    const [version, setVersion] = useState<string | null>(null);
    const [versionUrl, setVersionUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const username = "JohnDoll2023";
                const repo = "reactwebsite";

                // Fetch the latest commit
                const commitsResponse = await fetch(
                    `https://api.github.com/repos/${username}/${repo}/commits`
                );
                const commitsData = await commitsResponse.json();
                if (commitsData.length > 0) {
                    const lastCommitDate = new Date(commitsData[0].commit.author.date);
                    const currentDate = new Date();
                    const diffInDays = (currentDate.getTime() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);

                    if (diffInDays <= 45) {
                        setLastEdited(lastCommitDate.toLocaleDateString());
                        setLastCommitUrl(commitsData[0].html_url); // URL to the latest commit
                    } else {
                        setLastEdited(null);
                        setLastCommitUrl(null);
                    }
                }

                // Fetch the latest release
                const releasesResponse = await fetch(
                    `https://api.github.com/repos/${username}/${repo}/releases/latest`
                );
                const releasesData = await releasesResponse.json();
                if (releasesData.tag_name) {
                    setVersion(releasesData.tag_name);
                    setVersionUrl(releasesData.html_url); // URL to the latest release
                }
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <footer className="footer-container">
            {/* Left Section (Empty for now) */}
            <div className="footer-left"></div>

            {/* Centered Content */}
            <div className="footer-center">
                <ul className="flex flex-row">
                    <li className="mx-2">
                        <a href="https://www.youtube.com/channel/UCm9XHfS8Zkr9vs9REP0_T_Q" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="https://www.linkedin.com/in/johnmdoll" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="https://github.com/JohnDoll2023" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="https://www.strava.com/athletes/59946814" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
                        </a>
                    </li>
                    <li className="mx-2" >
                        <a href="https://leetcode.com/JohnDoll2023/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"fill="currentColor">
                                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="mx-2" >
                        <a href="https://www.goodreads.com/user/show/186496332-john-doll" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"fill="currentColor">
                                <path d="m5.111 18.907h.129c.585 0 1.176 0 1.762.005.074 0 .143-.019.166.098.328 1.636 1.383 2.559 2.9 2.995 1.241.356 2.495.366 3.749.084 1.558-.347 2.582-1.327 3.136-2.831.369-1.008.494-2.053.508-3.117.005-.272.014-2.203-.009-2.475l-.041-.014c-.037.07-.079.136-.115.206-1.019 2.02-2.826 3.159-4.861 3.239-4.75.188-7.812-2.672-7.932-8.259-.023-1.111.083-2.198.383-3.267.95-3.333 3.44-5.541 7.097-5.569 2.826-.019 4.681 1.814 5.359 3.295.023.052.06.108.11.089v-2.888h2.043c0 13.139.005 15.572.005 15.572-.005 3.68-1.232 6.736-4.75 7.603-3.205.792-7.332.225-9.039-2.681-.369-.633-.544-1.327-.599-2.086zm6.747-17.194c-2.421-.023-5.004 1.908-5.304 6.272-.189 2.766.683 5.728 3.298 6.966 1.273.605 3.427.703 4.995-.408 2.195-1.556 2.891-4.547 2.527-7.219-.448-3.333-2.205-5.625-5.516-5.611z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <p className="text-sm mt-1">&copy; {new Date().getFullYear()} John Doll</p>
            </div>

            {/* Right-Aligned Content */}
            <div className="footer-right">
                {lastEdited && lastCommitUrl && (
                    <p className="text-sm">
                        <a href={lastCommitUrl} target="_blank" rel="noopener noreferrer">
                            Last Edited On: <span className="underline">{lastEdited}</span>
                        </a>
                    </p>
                )}
                {version && versionUrl && (
                    <p className="text-sm">
                        <a href={versionUrl} target="_blank" rel="noopener noreferrer">
                            Version: <span className="underline">{version}</span>
                        </a>
                    </p>
                )}
            </div>
        </footer>
    );
};