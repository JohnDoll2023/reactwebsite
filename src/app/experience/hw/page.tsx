import Image from "next/image";

export const generateMetadata = () => {
 return {
   title: "John Doll | Hospitality Wifi",
 };
};

export default function Home() {
  return (
   <div className="flex flex-1 justify-center p-6 md:p-10">
     <article className="w-full max-w-6xl space-y-8">
       <header className="space-y-4 text-center">
         <h1 className="text-3xl font-bold md:text-4xl">Hospitality Wifi</h1>
         <p className="text-lg">
           Global Support Liaison
         </p>
         <a
           href="https://www.hospitalitywifi.com/"
           target="_blank"
           rel="noreferrer"
           className="inline-flex justify-center"
         >
           <Image
             src="/hw.png"
             alt="Hospitality Wifi logo"
             width={700}
             height={220}
             className="h-auto w-full max-w-2xl object-contain"
             priority
           />
         </a>
       </header>

       <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
         <Image
           src="/meraki.jpeg"
           alt="Cisco Meraki dashboard screenshot"
           width={1280}
           height={720}
           className="h-full w-full rounded-lg object-cover shadow"
         />
         <Image
           src="/meraki2.png"
           alt="Additional Cisco Meraki dashboard screenshot"
           width={1280}
           height={720}
           className="h-full w-full rounded-lg object-contain shadow"
         />
       </section>

       <section className="space-y-5 text-base leading-8 md:text-lg">
         <p>
           I was extremely grateful for my time at{" "}
           <a
             href="https://www.hospitalitywifi.com/"
             target="_blank"
             rel="noreferrer"
             className="underline"
           >
             Hospitality Wifi
           </a>{" "}
           over the COVID-19 summer. At a time when many internships were
           canceled or moved remote, I was able to work in person and get
           hands-on experience. Since Miami sent us home in March, I began in
           mid-April and worked through August for nearly five months. I also
           continued remotely through my sophomore year with flexible hours.
         </p>
         <p>
           Hospitality Wifi is based in Ada, Ohio, and sets up and manages
           hotel wifi networks around the world. During my internship, we
           managed more than 1,200 hotels. Their sister company, Say Security,
           worked out of the same office. The team culture was exceptional,
           and this role gave me an excellent start to my career.
         </p>
         <p>
           One of my biggest responsibilities was helping manage the Cisco
           Meraki dashboard for hotel networks. We monitored gateways,
           switches, and access points across all locations. With roughly 60
           devices per hotel, that meant around 72,000 devices to monitor.
           I documented outages, troubleshot incidents, and escalated issues
           when needed. I learned a huge amount about networking, VPNs,
           routing, and hardware while solving real operational problems.
         </p>
         <p>
           I also configured hardware for deployment, including gateways,
           switches, access points, and{" "}
           <a
             href="https://www.tomsguide.com/us/what-is-google-chromecast,news-17637.html"
             target="_blank"
             rel="noreferrer"
             className="underline"
           >
             Chromecasts
           </a>
           . We staged devices in office setups that mirrored hotel
           environments so they were ready on arrival. I also worked through
           ticket backlogs by documenting and resolving completed issues, which
           helped reduce active tickets and free support staff for priority
           work.
         </p>
       </section>
     </article>
   </div>
 );
}