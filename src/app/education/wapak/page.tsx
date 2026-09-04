import Image from "next/image";
import Link from "next/link";
export const generateMetadata = () => {
    return {
      title: 'John Doll | Wapak',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <h2 className="text-center">{"Wapak High School (Fall '15 - Spring '19)"}</h2>
      <div className="grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
        <div className="relative min-h-64 w-full">
          <Link href="https://wapak.org" target="_blank" title="Visit Wapakoneta High School website" className="transition-opacity hover:opacity-80">
            <Image
              src="/wapakW.png"
              alt="Wapakoneta High School logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <p className="self-center text-left text-xl">
          High school was a memorable experience, and I actually miss it jusssstttt a little.
          It felt like each of my teachers was one-in-a-million, and it made the days all the more enjoyable.
          From our AP Statistics music video, to our Zoology invertebrate project, or any of our countless editions of Daily Tennis, my friends and I stayed busy having fun.
        </p>
        <p className="text-left text-xl">
          I was highly involved in my teenage years, running cross country in the fall, being a part of academic team in the winter/spring, and playing tennis in the spring.
          I was a member of a club each day of the week, starting with Gatekeepers, then French Club, National Honor Society, Fellowship of Christian Athletes, and finishing off the week with Octagon Club.
          With a graduating class of 255 students, I finished high school with eleven varsity letters and served on the executive board for all of the organizations I was in.
        </p>
        <p className="text-left text-xl">
          Throughout my tenure at WHS, I constantly challenged myself taking every college-credit course available to me, which set me up well for a superb time during my undergrad at Miami University.
          Upon my graduation, Wapak added a larger engineering curriculum including computer science, meaning my only academic engineering exposure prior to college was my Introduction to Engineering class.
          This course followed more of a mechanical engineering path, so while I did get my hands dirty with CAD, I did not learn any programming or coding until I got to Miami where I would go on to graduate with a degree in computer science.
          Nonetheless, I consider the rigor of my everyday life in high school to be the main factor in my success in college.
        </p>
      </div>
    </div>
  );
}