import React from "react";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { LuClipboard } from "react-icons/lu";
import { TbFileBroken } from "react-icons/tb";
import { FaSignature } from "react-icons/fa";
import { LuTableColumnsSplit } from "react-icons/lu";
import { Compare } from "./ui/compare";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Discover Top UGC Creators",
    description:
      "Find and explore talented content creators specializing in User-Generated Content for brands.",
    header: (
      <Image
        src={`/logo/brand-boost-icons.webp`}
        alt="brand-boost-icons"
        width={500}
        height={100}
        quality={100}
        className="w-full h-[180px] object-cover rounded-lg"
      />
    ),
    className: "md:col-span-2",
    icon: <LuClipboard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Launch Your Ad Campaigns",
    description:
      "Business owners can browse talents and request customized promotional videos effortlessly.",
    header: (
      <Image
        src={`/logo/white-green-word.webp`}
        alt="brand-boost-icons"
        width={300}
        height={100}
        quality={100}
        className="w-full h-[180px] object-contain rounded-lg"
      />
    ),
    className: "md:col-span-1",
    icon: <TbFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tailored Video Services",
    description:
      "Choose from a variety of services: 30-sec videos, 1-minute clips, Arabic voiceovers, and more!",
    header: (
      <Compare
        firstImage="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        secondImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        firstImageClassName="object-cover"
        secondImageClassname="object-cover"
        className="w-full h-[180px] object-contain rounded-lg"
        slideMode="hover"
        autoplay
      />
    ),
    className: "md:col-span-1",
    icon: <FaSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full Dashboard for Creators",
    description:
      "Freelancers can manage their profiles, showcase their work, track orders, and update their services.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <LuTableColumnsSplit className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Manage Orders & Collaborations",
    description:
      "Business owners have a dedicated dashboard to track orders, manage collaborations, and monitor project progress.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <LuTableColumnsSplit className="h-4 w-4 text-neutral-500" />,
  },
];
