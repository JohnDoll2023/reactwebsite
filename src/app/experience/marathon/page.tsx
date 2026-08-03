import Image from "next/image";

export const generateMetadata = () => {
 return {
   title: "John Doll | Marathon",
 };
};

export default function Home() {
  return (
   <div className="flex flex-1 justify-center p-6 md:p-10">
     <article className="w-full max-w-6xl space-y-8">
       <header className="space-y-3 text-center">
         <h1 className="text-3xl font-bold md:text-4xl">Marathon</h1>
         <p className="text-lg">IT and Engineering Explorers Program</p>
         <a
           href="https://www.marathonpetroleum.com/"
           target="_blank"
           rel="noreferrer"
           className="inline-flex justify-center"
         >
           <Image
             src="/marathon.png"
             alt="Marathon Petroleum logo"
             width={900}
             height={240}
             className="h-auto w-full max-w-3xl object-contain"
             priority
           />
         </a>
       </header>

       <section className="space-y-5 text-base leading-8 md:text-lg">
         <p>
           I participated in Marathon Petroleum&apos;s IT and Engineering
           Explorers Program during my senior year of high school. Weekly
           sessions were held at Marathon&apos;s headquarters in Findlay, Ohio.
           It was my first major exposure to applied engineering and
           technology work outside the classroom.
         </p>
         <p>
           The program mixed technical challenges with practical learning. In
           one engineering session, teams built the tallest roller coaster for
           marbles using limited materials. Another session introduced Arduino
           boards, where we wired components and passed signals to power a
           light. That hands-on experience helped shape my interest in
           computer engineering.
         </p>
         <p>
           We also attended talks from industry professionals on machine
           learning, high-performance computing, and server builds. This was a
           major turning point for me because my high school had very limited
           engineering coursework. The program gave me real technical context
           and pushed me to deepen my focus on computers and engineering.
         </p>
       </section>

       <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
         <a
           href="https://www.marathonpetroleum.com/"
           target="_blank"
           rel="noreferrer"
           className="flex items-center justify-center rounded-lg p-4 shadow"
         >
           <Image
             src="/mpc.png"
             alt="Marathon Petroleum Corporation emblem"
             width={480}
             height={480}
             className="h-auto w-full max-w-xs object-contain"
           />
         </a>
         <Image
           src="/arduino.jpeg"
           alt="Arduino board used during the explorers program"
           width={960}
           height={640}
           className="h-full w-full rounded-lg object-cover shadow"
         />
       </section>
     </article>
   </div>
 );
}