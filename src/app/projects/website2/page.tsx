import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "John Doll | Website 2.0",
  };
};

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,82,48,0.14),_transparent_40%),linear-gradient(180deg,#f8faf6_0%,#eef4ea_48%,#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center md:p-10">
          <Image
            className="h-auto w-full rounded-2xl object-cover shadow-lg"
            src="/projects/website2/website.png"
            alt="Picture of this website"
            width={500}
            height={333}
            priority
          />
          <div className="space-y-5">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Website 2.0
            </h1>
            <p className="text-base leading-7 text-slate-700 md:text-lg">
              My second personal public facing website, and the latest to be deprecated.
            </p>
          </div>
        </div>

        <section className="rounded-[1.5rem] border border-[#255230]/20 bg-[#255230]/8 p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
            History of this Website
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            I actually had the idea to make a new website shortly after beginning work on{" "}
            <Link
              href="/projects/website1"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              my first site
            </Link>
            . In case you haven&apos;t seen the run-down on my old website 1.0, here it is: I began
            working shortly after the end of my first year at Miami, having merely been exposed
            to HTML, CSS, and JavaScript. I had never heard of Bootstrap
            or jQuery or anything of the sort. All I knew was that HTML + CSS + JavaScript =
            website. I knew I was going to be taking Web Applications at Miami my sophomore year,
            and expecting to learn more about web design, so I lost interest and began to focus on
            other projects. At the time of creation of this website, my sophomore year had just
            ended. Keep reading for more about why this, why
            that and what I&apos;ve picked up thus far. I made some changes in attempt
            to keep the website up to date, but the majority of the content and structure was still
            from May 2022.
          </p>
        </section>

        <section className="grid gap-6 rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm md:grid-cols-2 md:items-center md:p-8">
          <Image
            className="h-auto w-full rounded-xl object-contain"
            src="/projects/website2/code.png"
            alt="Picture of code"
            width={800}
            height={520}
          />
          <p className="text-sm leading-7 text-slate-700 md:text-base">
            I created my first website without the use of Bootstrap. Compared to that experience, Bootstrap saved my
            life. You wouldn&apos;t believe the pain I felt when I figured out that creating a
            navigation bar could be done with just a few lines in Bootstrap, after I had spent an
            entire day creating my own custom navigation bar way back when. Switching the
            navigation bar over to Bootstrap was about the first thing I did when writing up the
            code behind website 2.0. That and my footer, which I also built on my own way back
            when, were now going to be handled by Bootstrap. Also, the grid system. Several hours of
            work converted to minutes by beautiful Bootstrap. Enough about Bootstrap though, how
            was website 2.0 hosted?
          </p>
        </section>

        <section className="grid gap-6 rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm md:grid-cols-2 md:items-center md:p-8">
          <p className="order-2 text-sm leading-7 text-slate-700 md:order-1 md:text-base">
            Originally, I hosted my website using{" "}
            <Link
              href="https://www.hostgator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              HostGator
            </Link>
            . It did the job just fine. I didn&apos;t realize it at the time, but it was much more
            expensive than other options out there. Upon getting my{" "}
            <Link
              href="/experience/amazon2021"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              internship at Amazon
            </Link>
            , I enrolled in a course they were offering on Amazon Web Services (AWS). I learned
            mostly surface level information which prepared me for the AWS Cloud Practitioner Exam.
            It touched on Amazon Simple Storage Service (Amazon S3) and Amazon Cloudfront. I
            didn&apos;t know it at the time, but my site would end up being hosted using those
            services. It took just one push from my Mentor at Amazon on the first Friday of my
            internship nudging me to use S3, and the next day I was all over it. What I decided to
            do first was transfer my domain from Google Domains over to Amazon Route53, their DNS
            service. This turned out to be very useful because now, effectively all the resources I
            was going to use were on AWS. What&apos;s more is that I decided I wanted to create some
            SSL/TLS certificates for my website, which is where Cloudfront and Amazon Certificate
            Manager come in. This took me just a bit but now as you can see, my website is secure using HTTPS.
            Transitioning to AWS was overall a very good move in retrospect because now all my
            services are in one hub and very conveniently interact with one another and integrate
            seamlessly.
          </p>
          <Image
            className="order-1 h-auto w-full rounded-xl object-contain md:order-2"
            src="/projects/website2/aws.png"
            alt="Picture of AWS Console"
            width={1759}
            height={1073}
          />
        </section>

        <section className="grid gap-6 rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm md:grid-cols-2 md:items-center md:p-8">
          <Image
            className="h-auto w-full rounded-xl object-contain"
            src="/projects/website2/history.png"
            alt="Picture of this webpage"
            width={2204}
            height={1700}
          />
          <p className="text-sm leading-7 text-slate-700 md:text-base">
            I used a combination of the developer tab in Chrome and Visual Studio Code to do my
            development. I started with just the 5 webpages and slowly expanded to a smaller version of the website I have today.
            At the time of creation, my website 1.0 had content on the five main
            pages, but website 2.0 was to have content on more pages in multiple sections.
            Once I developed every page to a satisfactory level, I went back
            and made enhancements and changes as I saw fit. First, I wanted to create a good product
            that to your average person looked pretty darn good. Then, I went back, tidied up,
            got rid of any existing bugs, and did some beautification, especially for the mobile
            end. In hindsight, I know this website wasn't the best, but it was much better than website 1.0,
            and I was able to use a lot more skills all-around to build it, with a bigger vision.
          </p>
        </section>
      </section>
    </main>
  );
}
