import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "John Doll | Checkers",
  };
};

export default function Home() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(37,82,48,0.14),_transparent_40%),linear-gradient(180deg,#f8faf6_0%,#eef4ea_48%,#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Checkers
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg">
            If there is one project that made me feel like I had passed a point
            of no return, it is this one. This project was the biggest one I had
            built at the time of creation and required the most thought and
            planning by far over previous projects. Also, it was fun because I
            literally got to make a game! I was a programmer. I knew this was
            what I wanted to do for the rest of my life. I had fun downloading
            the code as a .jar file and distributing it to my friends and family
            to show off what I had created. This fully functioning checkers game
            was my first big success in programming. I will admit after looking
            back on it that the code could use some work. Yeah it works, but the
            code is hardly readable. I&apos;ve come a long way since my second semester of
            college (Spring 2020), and consequently, I know better about creating an if
            statement that has over 20 conditions.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          <Image
            src="/projects/checkers/checkerscode.png"
            alt="Picture of checkers code"
            width={1200}
            height={900}
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-sm"
          />
          <video
            controls
            autoPlay
            muted
            className="h-full w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
          >
            <source src="/projects/checkers/checkers.mov" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <Image
            src="/projects/checkers/checkers.png"
            alt="Checkers game board"
            width={1200}
            height={900}
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-sm"
          />
        </div>

        <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            I&apos;ll admit that I also put off till the final weekend what was the
            biggest project of my life up to that point. It was a grind, but in
            one weekend I was able to pump out this project with just under a
            year&apos;s worth of experience under my belt. The project requirement
            was only to create the checkerboard, making moving pieces was only
            for bonus. I always take every bonus opportunity, and this was no
            exception. Getting the board to show up was the easy part. Getting
            the pieces to move and disappear took some serious thinking. Also, I
            made my board resizable which was another significant challenge, not
            only for getting the graphics to properly adjust, but because I also
            had to change how I received mouse-clicking inputs.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
            You can download the game and play it for yourself{" "}
            <a
              href="/projects/checkers/Checkergame.jar"
              download="Checkers"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              here
            </a>
            . You will likely need to open your security preferences to gain
            access to it, since identified developer signing is expensive and I
            was not one at the time.
          </p>
        </div>
      </section>
    </main>
  );
}