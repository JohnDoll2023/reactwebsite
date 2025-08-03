import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Education',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pt-8">
      {/* Mobile: Stacked by school, Desktop: 3 rows */}
      
      {/* Wapakoneta Section */}
      <div className="mb-32 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="text-3xl">Wapakoneta High School</h1>
          <h2 className="text-lg">Fall 2015 - Spring 2019</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/wapak" className="block relative w-full max-w-[32rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/wapakW.png"
              alt="Wapakoneta High School logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">Neil Armstrong and I have one thing in common, and it's this high school.</p>
        </div>
      </div>

      {/* Miami Section */}
      <div className="mb-32 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="text-3xl">Miami University</h1>
          <h2 className="text-lg">Fall 2019 - Spring 2023</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/miami" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/miami.png"
              alt="Miami University logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">"Oh you went to the U? Me too!" - Everyone in Florida</p>
        </div>
      </div>

      {/* Illinois Section */}
      <div className="mb-12 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="text-3xl">University of Illinois</h1>
          <h2 className="text-lg">Fall 2024 - Present</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/illinois" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/illinois.png"
              alt="University of Illinois block I logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">I'll think of something clever to put here when I graduate.</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Titles Row */}
        <div className="flex flex-row justify-evenly text-center font-bold mb-8">
          <div className="flex-1">
            <h1 className="text-3xl">Wapakoneta High School</h1>
            <h2 className="text-lg">Fall 2015 - Spring 2019</h2>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl">Miami University</h1>
            <h2 className="text-lg">Fall 2019 - Spring 2023</h2>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl">University of Illinois</h1>
            <h2 className="text-lg">Fall 2024 - Present</h2>
          </div>
        </div>

        {/* Images Row */}
        <div className="flex flex-row items-center justify-evenly mb-8">
          <div className="flex-1 flex justify-center">
            <Link href="/education/wapak" className="block relative w-full max-w-[32rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
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
            <Link href="/education/miami" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
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
            <Link href="/education/illinois" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
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

        {/* Descriptions Row */}
        <div className="flex flex-row justify-evenly">
          <div className="flex-1 mx-12">
            <p className="text-lg">Neil Armstrong and I have one thing in common, and it's this high school.</p>
          </div>
          <div className="flex-1 mx-12">
            <p className="text-lg">"Oh you went to the U? Me too!" - Everyone in Florida</p>
          </div>
          <div className="flex-1 mx-12">
            <p className="text-lg">I'll think of something clever to put here when I graduate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}