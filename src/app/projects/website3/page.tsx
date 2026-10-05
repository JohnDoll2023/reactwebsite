export const generateMetadata = () => {
    return {
      title: "John Doll | Website 3.0",
    };
};

export default function Home() {
    return (
      <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(37,82,48,0.14),_transparent_40%),linear-gradient(180deg,#f8faf6_0%,#eef4ea_48%,#ffffff_100%)] text-slate-900">
        <section className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
            <div className="space-y-6 text-base leading-7 text-slate-700 md:text-lg">
              <p>
                The third iteration of my personal website, I created this website to show new experiences in a more personalized way.
                The last two versions had my stories that I wanted to share, but the websites felt too plain, and not enough like me.
                This version is Terminal themed, and has different sub themes in some of the different tabs just for fun.
                Even though it is Terminal themed, it feels more modern and sleek, giving a more professional feel but still has all my fun stories and experiences.
              </p>

              <p>
                I started this edition in Fall 2024 right when I started grad school.
                This proved to be tough to do side-by-side my homework and I really didn&apos;t put much work into it over the next 20 months.
                Once I finished grad school, I returned to developing this site, and with the help of GitHub Copilot, started churning out the pages I had envisioned.
              </p>

              <p>
                This website is built using React, NextJS, TailwindCSS, and TypeScript.
                This is my first time using React and NextJS, and I chose them specifically to learn more about them in a personal, real-world project.
                I have also put a lot of effort into learning the GitHub workflow, using projects, GitHub Actions, PR&apos;s, Issues, etc. in order to understand how others may use it in a production environment.
                As a DevOps engineer, figuring out the automation associated with these things was fascinating to me.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
}