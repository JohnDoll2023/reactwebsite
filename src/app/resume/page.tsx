import ResumeDownload from "./ResumeDownload";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Resume',
    };
  };

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 px-4 py-4 md:gap-6 md:px-0 md:py-0">
        <iframe
          src="/JohnDollResume.pdf?v=2#view=FitH"
          className="h-[72vh] w-full max-w-4xl min-w-0 rounded-2xl md:h-[80vh]"
          title="Resume"
        />
        <ResumeDownload />
    </main>
  );
}
