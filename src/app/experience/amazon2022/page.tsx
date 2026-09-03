import Image from "next/image";

export const generateMetadata = () => ({
  title: "John Doll | Amazon (2022)",
});

const professionalStory = [
  <>
    Both of my internships with Amazon have been great for me in different
    ways. Last summer, it was the opportunity to see how companies managed
    large codebases and worked through the agile process. For this internship,
    I vastly improved my problem solving skills by working on an open source
    project that my team manages,{" "}
    <a href="https://github.com/deepjavalibrary/djl" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
      Deep Java Library (DJL)
    </a>
    .
  </>,
  <>
    Having never worked on an open source project before, especially not one of
    this magnitude, I had to do a lot of problem solving individually. DJL has
    only been around for a couple years, so there are not many internet
    resources to help solve issues with it. If I found errors, I had to fix
    them myself. This forced me to dig deep and become more resourceful, using
    tools available to me in new ways.
  </>,
  <>
    For my project, I used DJL to develop three Android demo apps that ran deep
    learning inference on a phone. The apps downloaded a model, accepted user
    input, ran inference locally, and returned results. The first was{" "}
    <a href="https://github.com/deepjavalibrary/djl-demo/tree/master/android/pytorch_android/semantic_segmentation" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
      Semantic Segmentation
    </a>
    , which colors objects detected in pictures. The second was{" "}
    <a href="https://github.com/deepjavalibrary/djl-demo/tree/master/android/pytorch_android/neural_machine_translation" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
      Neural Machine Translation
    </a>
    , which translated French input to English. The third was{" "}
    <a href="https://github.com/deepjavalibrary/djl-demo/pull/245" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
      Speech Recognition
    </a>
    , which transcribed audio. I also updated documentation, fixed bugs, and
    released a{" "}
    <a href="https://pub.towardsai.net/build-semantic-segmentation-app-with-deep-java-library-723adbbaf225" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
      Semantic Segmentation blog
    </a>
    .
  </>,
];

const personalStory = [
  "Everyone likes to talk about how great the weather in California is, but it is part of the reason I do not want to return. It did not rain once all summer, and the Bay Area was windy every day. I love sports and running, so fighting 20+ mph winds was not easy. I did catch a lot of sun, though.",
  "What worked for me was the number of friends I made and places we saw. Every weekend, my friends and I visited a new location in the Bay. We traveled to Yosemite, Los Angeles, and Santa Cruz, went skydiving and surfing, and crossed the Golden Gate Bridge. I think this summer was more vacation with work on the side. It was the best summer I have had because of the things I did and people I was with.",
  "The summer prior in Seattle was my first using public transportation, but this summer I became an absolute master. The Bay Area is massive, so every weekend I connected trains and buses, plus ferries and trolleys. Sunnyvale, Mountain View, Santa Clara, Cupertino, and Palo Alto all have a small-town feel like Wapakoneta. San Jose was nearby for a big-city feel, while San Francisco and Oakland were only a train ride away.",
];

function Story({ paragraphs }: { paragraphs: React.ReactNode[] }) {
  return (
    <div className="space-y-5 text-lg leading-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function Amazon2022Page() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <article className="w-full max-w-6xl space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Amazon (2022)</h1>
          <p className="text-lg">Software Development Engineer Intern</p>
          <Image
            src="/amazon.png"
            alt="Amazon logo"
            width={2400}
            height={723}
            className="mx-auto h-auto w-full max-w-64 object-contain brightness-0 invert"
            priority
          />
          <p className="mx-auto max-w-3xl text-left text-lg leading-8">
            This internship marked my second with Amazon. My{" "}
            <a href="/experience/amazon2021" className="font-semibold text-[#255230] underline underline-offset-4">first</a> was in Seattle working
            on Amazon Go technology. This summer, I switched to Silicon Valley
            and joined the{" "}
            <a href="https://github.com/deepjavalibrary/djl" target="_blank" rel="noreferrer" className="font-semibold text-[#255230] underline underline-offset-4">
              Deep Java Library (DJL)
            </a>
            .
          </p>
        </header>
        <section className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <article className="flex flex-col">
            <h2 className="mb-6 text-center">Professional</h2>
            <Image
              src="/amazon-shoreline.jpeg"
              alt="Amazon team picture"
              width={4032}
              height={2377}
              className="mb-8 aspect-[4/3] h-auto w-full rounded-lg object-cover shadow"
            />
            <Story paragraphs={professionalStory} />
          </article>
          <article className="flex flex-col">
            <h2 className="mb-6 text-center">Personal</h2>
            <Image
              src="/amazon-volleyball.jpeg"
              alt="Amazon intern volleyball activity"
              width={4032}
              height={2268}
              className="mb-8 aspect-[4/3] h-auto w-full rounded-lg object-cover shadow"
            />
            <Story paragraphs={personalStory} />
          </article>
        </section>
        <Image
          src="/amazon.png"
          alt="Amazon logo"
          width={2400}
          height={723}
          className="mx-auto h-auto w-full max-w-md object-contain brightness-0 invert"
        />
      </article>
    </div>
  );
}
