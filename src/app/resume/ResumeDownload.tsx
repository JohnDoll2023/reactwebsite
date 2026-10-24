"use client";

import { useState } from "react";

export default function ResumeDownload() {
  const [downloadError, setDownloadError] = useState(false);

  const downloadResume = async () => {
    setDownloadError(false);

    try {
      const response = await fetch("/JohnDollResume.pdf?v=2");
      if (!response.ok) {
        throw new Error(`Resume download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const file = new File([blob], "John-Doll-Resume.pdf", {
        type: "application/pdf",
      });

      if (
        navigator.share &&
        navigator.canShare?.({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          title: "John Doll Resume",
        });
        return;
      }

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "John-Doll-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      console.error("Resume download failed", error);
      setDownloadError(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={downloadResume}
        className="rounded-lg bg-[#255230] px-5 py-3 font-bold text-white underline underline-offset-4 md:hidden"
      >
        Download resume
      </button>
      {downloadError && (
        <p role="alert" className="text-center text-sm text-red-700">
          Resume download failed. Try opening the PDF, then use your browser&apos;s save or share option.
        </p>
      )}
    </>
  );
}
