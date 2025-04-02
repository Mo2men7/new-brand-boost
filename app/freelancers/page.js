"use client";

import {
  CardContainer,
  CardItem,
  ThreeDCardDemo,
} from "../_components/ui/3d-card";
import { BackgroundGradientAnimation } from "../_components/ui/background-gradient-animation";

function Freelancers() {
  const talents = Array.from({ length: 10 }, (_, i) => {
    return {
      id: i * 215,
      name: `Talent Talent ${i + 1}`,
      image: `https://robohash.org/${(i * 5) / 21 + 2001}`,
      description:
        i % 2 == 0
          ? `lorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`
          : `lorem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`,
    };
  });

  return (
    <section>
      <main className="pt-32">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl uppercase font-bold text-transparent sm:text-7xl text-center">
          Our{" "}
          <span className="bg-gradient-to-b from-green-400 to-lightGreen bg-clip-text py-8 uppercase font-bold text-transparent">
            Freelancers
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-10 px-7">
          {talents.map((talent, i) => (
            <ThreeDCardDemo key={i} item={talent} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Freelancers;
