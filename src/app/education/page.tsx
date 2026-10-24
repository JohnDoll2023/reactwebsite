import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Education',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <main className="mx-auto w-full max-w-6xl space-y-10">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1>Education</h1>
          <p className="text-base leading-8 md:text-lg">
            My education has given me the foundation to grow as an engineer and a problem solver.
            As a lifelong learner, each of these institutions has been pivotal for my growth.
          </p>
        </header>
        <div className="mt-8 flex flex-1 flex-col items-center">

      {/* Mobile: Stacked by school, Desktop: 3 rows */}
      
      {/* Wapakoneta Section */}
      <div className="mb-32 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="!text-5xl leading-tight">Wapakoneta High School</h1>
          <h2 className="!text-3xl">Fall &apos;15 - Spring &apos;19</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/wapak" className="block relative w-full max-w-[32rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/education/wapak/wapakW.webp"
              alt="Wapakoneta High School logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">Neil Armstrong and I have one thing in common, and it&apos;s this high school.</p>
        </div>
      </div>

      {/* Miami Section */}
      <div className="mb-32 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="!text-5xl leading-tight">Miami University</h1>
          <h2 className="!text-3xl">Fall &apos;19 - Spring &apos;23</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/miami" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/education/miami/miami.webp"
              alt="Miami University logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">&quot;Oh you went to the U? Me too!&quot; - Everyone in Florida</p>
        </div>
      </div>

      {/* Illinois Section */}
      <div className="mb-12 md:hidden">
        <div className="text-center font-bold mb-4">
          <h1 className="!text-5xl leading-tight">University of Illinois</h1>
          <h2 className="!text-3xl">Fall &apos;24 - Summer &apos;26</h2>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/education/illinois" className="block relative w-full max-w-[28rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/education/illinois/illinois.webp"
              alt="University of Illinois block I logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="mx-12">
          <p className="text-lg">I&apos;ll think of something clever to put here when I graduate.</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Titles Row */}
        <div className="flex flex-row justify-evenly text-center font-bold mb-8">
          <div className="flex-1">
            <h1 className="!text-5xl leading-tight md:flex md:h-24 md:items-end md:justify-center">Wapakoneta High School</h1>
            <h2 className="!text-3xl">Fall &apos;15</h2>
            <h2 className="!text-3xl">Spring &apos;19</h2>
          </div>
          <div className="flex-1">
            <h1 className="!text-5xl leading-tight md:flex md:h-24 md:items-end md:justify-center">Miami University</h1>
            <h2 className="!text-3xl">Fall &apos;19</h2>
            <h2 className="!text-3xl">Spring &apos;23</h2>
          </div>
          <div className="flex-1">
            <h1 className="!text-5xl leading-tight md:flex md:h-24 md:items-end md:justify-center">University of Illinois</h1>
            <h2 className="!text-3xl">Fall &apos;24</h2>
            <h2 className="!text-3xl">Summer &apos;26</h2>
          </div>
        </div>

        {/* Images Row */}
        <div className="flex flex-row items-center justify-evenly mb-8">
          <div className="flex-1 flex justify-center">
            <Link href="/education/wapak" className="block relative w-full max-w-[32rem] aspect-[4/3] cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/education/wapak/wapakW.webp"
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
                src="/education/miami/miami.webp"
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
                src="/education/illinois/illinois.webp"
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
            <p className="text-lg">Neil Armstrong and I have one thing in common, and it&apos;s this high school.</p>
          </div>
          <div className="flex-1 mx-12">
            <p className="text-lg">&quot;Oh you went to the U? Me too!&quot; - Everyone in Florida</p>
          </div>
          <div className="flex-1 mx-12">
            <p className="text-lg">I&apos;ll think of something clever to put here when I graduate.</p>
          </div>
        </div>
      </div>
        </div>
      </main>
    </div>
  );
}