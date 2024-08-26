import Image from "next/image";
import Hero from "./_components/Hero";
import Section from "./_components/Section";

export default function Home() {
  return (
    <div>
      {/*hero section */}
       <Hero />

       {/*section area*/}
       <Section />
    </div>
  );
}
