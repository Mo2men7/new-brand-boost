import Image from "next/image";
import AboutSection from "./_components/AboutSection";
import { BentoGridDemo } from "./_components/BentoGrid";
import HeroSection from "./_components/HeroSection";
import ThemedMarquee from "./_components/ThemedMarquee";
import { ContainerScroll } from "./_components/ui/container-scroll-animation";

export default function Home() {
  const marqueeImages = [
    { id: 1, src: "/logo/black-full.webp" },
    { id: 2, src: "/logo/black-green-letter.webp" },
    { id: 3, src: "/logo/black-letter.webp" },
    { id: 4, src: "/logo/black-rounded.webp" },
    { id: 5, src: "/logo/original-letter.webp" },
    { id: 6, src: "/logo/original-rounded.webp" },
    { id: 7, src: "/logo/white-green-word.webp" },
    { id: 8, src: "/logo/white-letter.webp" },
    { id: 9, src: "/logo/white-word.webp" },
  ];

  return (
    <div>
      <HeroSection />

      <ThemedMarquee items={marqueeImages} />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unlock the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                UGC Videos
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/logo/original-rounded.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-contain h-full"
          draggable={false}
        />
      </ContainerScroll>

      <AboutSection />

      <div className="bg-primary border-y-2 border-[#09060a] py-2 px-3">
        <BentoGridDemo />
      </div>
    </div>
  );
}
