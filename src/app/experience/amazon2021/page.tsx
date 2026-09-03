import Image from "next/image";

export const generateMetadata = () => ({
  title: "John Doll | Amazon (2021)",
});

const professionalStory = [
  "If you've ever used the automated technology to grab a grocery item off the shelf at an airport or elsewhere, and Just Walked Out without paying, I had a part in that process. This experience easily provided the most growth for me in a professional manner more than any other experience has before. I was able to look at and work with Amazon's code base and pipelines and see how a large company manages such a large infrastructure of code. I was able to directly interact with this when I was working on my project, an internal website to help connect customer service agents with developers when customers were having issues with Just Walk Out (JWO) shopping trips.",
  "The website I was able to create is confidential but I can touch on what technology I got to use to build it. I pulled together my skills in HTML, CSS, JavaScript, jQuery and Ajax in order to build the entire front end dashboard display as well as the back end functionality in making API calls and parsing the data. I had to deal with issues such as Cross-Site Scripting and making sure my project was secure with multi-factor authentication and authorization mechanisms.",
  "Overall, I got to design pretty much the entire thing. My team gave me some requirements at the beginning of the summer, and it was my job to fit the requirements in any way possible. I spent about the first half of my project on design, writing no code, and the back half of my internship actually working on the implementation and testing of website. I was able to deploy my project to production in my final week and see it get put to use just before I left which was extremely rewarding.",
  "Not only did I get to see what it was like to be a professional developer, but I was able to see what it was like working in a professional environment. I went in to work with my team nearly everyday which I loved because I felt that I was a more efficient worker when I had others around me. I was able to get past obstacles more quickly with people around to help me. Having others around also meant I got to hear and watch them solve the problems they were running in to, which gave me a better idea of how to troubleshoot myself. I picked up on and learned many small things that I do not believe I would have gotten from working in a virtual environment and am very happy with my choice to choose the hybrid option to work in Seattle.",
];

const personalStory = [
  "It was a summer of many firsts for me. This summer marked my first time on a plane, living alone, living in a big city, renting an apartment, and doing all my own cooking and grocery shopping. I felt mentally prepared to move from little Wapakoneta to the center of Seattle, and all things considered, I was not too shell-shocked by the big move. What really caught me off guard was how different the work environment was at Amazon compared to my previous internship. Going from an office of about 20 people to a building meant for a couple thousand was hard for me to comprehend. It is still hard for me to wrap my head around this summer as a whole. It doesn't feel real to say that I interned across the country in Seattle working for Amazon.",
  "I am very grateful for my hybrid experience because I was still able to go into the office and work with other Amazonians such as fellow interns and members of my team. Being able to work in-person with my team everyday was probably the most enjoyable part of my whole summer. Eating and socializing with the team and always having people to count on and give me advice made going to work everyday something I looked forward to. Additionally, since I was hybrid, I was not required to work with the team which meant I was able to work with hundreds of other interns across the 50 building Amazon campus. All-in-all, I worked in 20 different Amazon offices over the course of my internship which made for a great time.",
  "During my first week in Seattle, I created a list of all the places and attractions I wanted to visit, and of the 15 or so, I was able to do all but 2. I, of course, made it to the Space Needle a couple times, the Woodland Park Zoo, the Seattle Aquarium, Mount Rainier, the Pike Place Market, and many Seattle Mariners games. Without a car in Seattle, I had to rely on public transportation which was pretty brand new to me. Sure, I went the wrong way or took the wrong bus a couple times, but I was able to utilize all five of their transportation systems at least once. I regularly rode the light-link rail and the bus for reaching the attractions, as well as the street car, the monorail and the ferry for other fun adventures.",
];

function Story({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5 text-lg leading-8">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function Amazon2021Page() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <article className="w-full max-w-6xl space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Amazon (2021)</h1>
        <p className="text-lg">Software Development Engineer Intern</p>
        <Image
          src="/amazon.png"
          alt="Amazon logo"
          width={2000}
          height={600}
          className="mx-auto h-auto w-full max-w-64 object-contain brightness-0 invert"
          priority
        />
      </header>
      <section className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        <article className="flex flex-col">
          <h2 className="mb-6 text-center">Professional</h2>
          <Image
            src="/amazon-team.jpeg"
            alt="Amazon team"
            width={2000}
            height={1500}
            className="mb-8 aspect-[4/3] h-auto w-full rounded-lg object-cover shadow"
          />
          <Story paragraphs={professionalStory} />
        </article>
        <article className="flex flex-col">
          <h2 className="mb-6 text-center">Personal</h2>
          <Image
            src="/amazon-rainier.jpeg"
            alt="Mount Rainier near Seattle"
            width={2000}
            height={1500}
            className="mb-8 aspect-[4/3] h-auto w-full rounded-lg object-cover shadow"
          />
          <Story paragraphs={personalStory} />
        </article>
      </section>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Image
          src="/amazon-shoreline.jpeg"
          alt="Seattle experience"
          width={2000}
          height={1500}
          className="aspect-[4/3] h-full w-full rounded-2xl object-cover"
        />
        <Image
          src="/amazon-volleyball.jpeg"
          alt="Amazon summer activity"
          width={2000}
          height={1500}
          className="aspect-[4/3] h-full w-full rounded-2xl object-cover"
        />
      </section>
      </article>
    </div>
  );
}
