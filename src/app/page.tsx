import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
    <div className="flex flex-row">
        <div>
            <Image
                className="rounded-md"
                src="/doll.jpg"
                alt="me, John Doll"
                width={600}
                height={600}
                priority
            />
        </div>
        <div> 
            My name is John Doll and I graduated from Miami University with a Bachelor of Science in Computer Science in May 2023.
            I started full-time with Lutron Electronics in Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I started my pursuit of a Master's 
            in Computer Science at the University of Illinois in Fall 2024.
        </div>
    </div>
    </main>
  );
}
