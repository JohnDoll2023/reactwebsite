import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Education',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-row md:flex-col">
      <div className="flex flex-col md:flex-row pt-8 justify-evenly text-center font-bold mb-8">
        <div className="flex-1">
          <h1 className="text-3xl order-5 md:order-1">Wapakoneta High School</h1>
          <h2 className="text-lg">Fall 2015 - Spring 2019</h2>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl order-3 md:order-2">Miami University</h1>
          <h2 className="text-lg">Fall 2019 - Spring 2023</h2>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl order-1 md:order-3">University of Illinois</h1>
          <h2 className="text-lg">Fall 2024 - Present</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="flex-1 flex justify-center">
          <Link href="/education/wapak" className="order-6 md:order-4 block relative w-full max-w-[32rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/wapakW.png"
              alt="Wapakoneta High School logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/education/miami" className="order-4 md:order-5 block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/miami.png"
              alt="Miami University logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/education/illinois" className="order-2 md:order-6 block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/illinois.png"
              alt="University of Illinois block I logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-8 justify-evenly mb-8">
        <div className="flex-1 flex-row mx-12">
          <p className="text-lg order-5 md:order-1">Neil Armstrong and I have one thing a common, and it's this high school.</p>
        </div>
        <div className="flex-1 flex-row mx-12">
          <p className="text-lg order-5 md:order-1">"Oh you went to the U? Me too!" - Everyone in Florida</p>
        </div>
        <div className="flex-1 flex-row mx-12">
          <p className="text-lg order-5 md:order-1">I'll think of something clever to put here when I graduate.</p>
        </div>
      </div>
    </div>
  );
}