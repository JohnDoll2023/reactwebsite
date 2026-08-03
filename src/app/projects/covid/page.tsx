import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "John Doll | COVID-19 Dashboard",
  };
};

export default function Home() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(37,82,48,0.14),_transparent_40%),linear-gradient(180deg,#f8faf6_0%,#eef4ea_48%,#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            COVID-19 Dynamic Dashboard
          </h1>
          <p className="mt-6 max-w-5xl text-base leading-7 text-slate-700 md:text-lg">
            This dashboard showing COVID-19 case statistics might be my favorite project. A team of developers and I, 
            along with our advisor, managed to create this working beauty in under a week. It started just after 2020 
            Fall Semester finals when our professor reached out to some of us asking if we wanted to expand our final 
            project into the dashboard you see here. I had the opportunity to lead the team along with another student, 
            and we met every day during the development process to iron out all the details. We got feedback from our advisor, 
            the Butler County Health Commisioner, and several others without connections to statistics in order to make our 
            web application a useful tool for anyone who wanted to use it. The dashboard was published before Christmas 2020 
            and has had a few minor updates since then, especially concerning data retrieval since the State of Ohio changed 
            the way they report case metrics. There have been no major changes to design or features of the dashboard. 
            Miami actually wrote an article about this project and interviewed me for the piece, which you can find{" "}
            <a
              href="https://www.miamioh.edu/cec/news/2021/02/cse-covid-dashboard-website.html?_ga=2.136893304.911892736.1622614028-1011827537.1583760840"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              here
            </a>
            . This article was the number one article on the{" "}
            <a
              href="https://www.miamioh.edu/cec/index.html?_ga=2.177312621.911892736.1622614028-1011827537.1583760840"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              College of Engineering and Computing page
            </a>{" "}
            on Miami&apos;s website for a little while.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Image
            src="/projects/covid/covidmap.gif"
            alt="Dashboard gif"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-sm"
          />
          <Image
            src="/projects/covid/covidgraph.gif"
            alt="Dashboard gif"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-sm"
          />
          <Image
            src="/projects/covid/covidchart.gif"
            alt="Dashboard gif"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-sm"
          />
        </div>

        <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            I learned a lot of the skills required to create a web application such as this one from two classes at Miami:{" "}
            <a
              href="https://bulletin.miamioh.edu/courses-instruction/sta/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#255230] underline underline-offset-4"
            >
              STA 363 and STA 404
            </a>
            . 363 is Statistical Modeling, a class that gives an intro to the R language and RStudio. 
            In 404, Advanced Data Visualization, I obtained most of the skills I needed to create a web app. 
            Both were wonderful classes that made me love the field of statistics and analytics. 
            Shout out to Dr. Fisher and Dr. Bailer for being quality, engaging, and humorous professors, 
            especially during a pandemic. Anyway, the application is a Shiny app using Plotly and is 
            hosted through one of Miami&apos;s web servers. What was great about this project was the 
            reason for which we built it. It wasn&apos;t for a grade; it was for the public. 
            It wasn&apos;t for money or fame; it was built to be a free resource for anyone who wanted 
            to see how the data was trending. Our charts and graphs ended up being used by the 
            Butler County Health Department for their weekly reports and updates about the COVID-19 
            situation for residents of their county, which was really neat to see.
          </p>
        </div>
      </section>
    </main>
  );
}