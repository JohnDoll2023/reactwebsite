import Image from "next/image";

export const generateMetadata = () => {
 return {
   title: "John Doll | St. Mark's",
 };
};

export default function Home() {
  return (
   <div className="flex flex-1 justify-center p-6 md:p-10">
     <article className="w-full max-w-6xl space-y-8">
       <header className="space-y-3 text-center">
         <h1 className="text-3xl font-bold md:text-4xl">St. Mark&apos;s</h1>
         <p className="text-lg">
           Sound and Technology Support
         </p>
         <div className="inline-flex justify-center">
           <Image
             src="/church.png"
             alt="St. Mark's logo"
             width={700}
             height={220}
             className="h-auto w-full max-w-2xl object-contain"
             priority
           />
         </div>
       </header>

       <section className="space-y-5 text-base leading-8 md:text-lg">
         <p>
           St. Mark&apos;s gave me some of my earliest real-world technology
           experience. I started in December 2017 by running live sound for
           the church&apos;s Christmas program, including multiple microphones and
           live handheld audio. It was a high-pressure first assignment, but
           the event went smoothly and pushed me to learn fast.
         </p>
         <p>
           I continued supporting church services until the pandemic, when
           worship moved online. Another sound tech and I helped set up
           livestreaming equipment throughout the church so online viewers
           could have an experience as close as possible to being there in
           person. Even after in-person worship resumed, the streaming program
           continued.
         </p>
         <p>
           This experience taught me practical audio system management and
           troubleshooting skills that carried into other settings. One fun
           example was configuring the sound system at Miami&apos;s Goggin Ice
           Center during open skates to connect music playback for skaters. This
           was my precursor into DJing, and learning this mixer board first was
           great experience.
         </p>
       </section>

       <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
         <Image
           src="/IMG_9701.JPG"
           alt="Church soundboard"
           width={960}
           height={1280}
           className="h-full w-full rounded-lg object-cover shadow"
         />
         <Image
           src="/IMG_9702.JPG"
           alt="Interior view of St. Mark's church"
           width={960}
           height={1280}
           className="h-full w-full rounded-lg object-cover shadow"
         />
         <Image
           src="/IMG_9703.JPG"
           alt="Additional interior view of St. Mark's church"
           width={960}
           height={1280}
           className="h-full w-full rounded-lg object-cover shadow"
         />
       </section>
     </article>
   </div>
 );
}