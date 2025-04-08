import { Card, Carousel } from "@/app/_components/ui/horizontal-card-carousel";
import { TextGenerateEffect } from "@/app/_components/ui/text-generate-effect";

import Image from "next/image";

function SingleFreelancer() {
  const i = 2;
  const freelancer = {
    id: i * 215,
    name: `Talent Talent ${i + 1}`,
    image: `https://robohash.org/${(i * 5) / 21 + 2001}`,
    description:
      i % 2 == 0
        ? `lorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`
        : `lorem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`,
  };

  const DummyContent = () => {
    return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/50498/50498-720.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  };

  const projects = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1743069956007-3bcb9b159cca?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1741705877378-124c4c259e30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },

    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
  ];

  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section>
      <main className="">
        <div className="h-screen flex flex-col gap-4 text-center justify-center">
          <Image
            src={freelancer.image}
            width={150}
            height={150}
            alt={freelancer.name}
            className="mx-auto rounded-full"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-br from-green-400 to-lightGreen bg-clip-text text-transparent uppercase">
            {freelancer.name}
          </h1>
          <TextGenerateEffect words={freelancer.description} />
        </div>

        <div className="bg-lightGreen py-10">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold bg-gradient-to-br from-purple-500 to-primary bg-clip-text text-transparent font-sans">
            Projects
          </h2>
          <Carousel items={cards} />
        </div>
      </main>
    </section>
  );
}

export default SingleFreelancer;
