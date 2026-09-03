import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Amazon (2021)',
    };
  };

export default function Home() {
  return (
    <main className="flex-1 px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-green-700 dark:text-green-400">
            Experience · Amazon
          </p>
          <h1 className="mb-6">Amazon (2021)</h1>
          <p className="max-w-2xl text-lg leading-8 md:text-2xl">
            My first major internship took me to Seattle, where I spent the
            summer of 2021 working at Amazon.
          </p>
          <ul className="mt-8 space-y-3 text-lg leading-8 md:text-xl">
            <li className="rounded-xl border-l-4 border-green-700 bg-black/[0.04] px-5 py-3 dark:bg-white/[0.06]">
              Seattle
            </li>
            <li className="rounded-xl border-l-4 border-green-700 bg-black/[0.04] px-5 py-3 dark:bg-white/[0.06]">
              First major internship
            </li>
            <li className="rounded-xl border-l-4 border-green-700 bg-black/[0.04] px-5 py-3 dark:bg-white/[0.06]">
              Website still used
            </li>
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 dark:border-white/15 dark:bg-white/[0.06]">
              <p className="font-mono text-sm uppercase tracking-widest opacity-60">
                Location
              </p>
              <p className="mt-2 text-xl font-bold">Seattle, Washington</p>
            </article>
            <article className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 dark:border-white/15 dark:bg-white/[0.06]">
              <p className="font-mono text-sm uppercase tracking-widest opacity-60">
                Year
              </p>
              <p className="mt-2 text-xl font-bold">Summer 2021</p>
            </article>
          </div>
        </section>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-black p-8 shadow-2xl shadow-green-900/20 md:p-12">
          <Image
            src="/amazon.png"
            alt="Amazon logo"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </div>
      </div>
    </main>
  );
}