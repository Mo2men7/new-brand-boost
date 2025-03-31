import AboutSection from "./_components/AboutSection";
import { BentoGridDemo } from "./_components/BentoGrid";
import HeroSection from "./_components/HeroSection";
import ThemedMarquee from "./_components/ThemedMarquee";

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
    <div className="min-h-screen">
      <HeroSection />

      <ThemedMarquee items={marqueeImages} />

      <AboutSection />

      <div className="bg-primary border-y-2 border-[#09060a] py-2 px-3">
        <BentoGridDemo />
      </div>
    </div>
  );
}
