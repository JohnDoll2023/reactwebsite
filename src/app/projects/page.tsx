export const generateMetadata = () => {
    return {
      title: 'John Doll | Projects',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <main className="w-full max-w-6xl space-y-10">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1>Projects</h1>
          <p className="text-base leading-8 md:text-lg">
            Sample introduction: My projects turn ideas into practical tools,
            creative experiments, and opportunities to keep learning. Explore
            each project below to see what I built and how it came together.
          </p>
        </header>
        <section className="text-center">
          Projects
        </section>
      </main>
    </div>
  );
}