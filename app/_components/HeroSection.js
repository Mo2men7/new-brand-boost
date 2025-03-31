"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 lg:justify-between px-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://assets.mixkit.co/videos/50498/50498-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary/50 -z-5"></div>

      {/* Left Side - Text */}
      <div className="text-white max-w-lg z-10 text-center lg:text-start">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Explore the{" "}
          <span className="text-[#c5fb79] uppercase font-bold">Best</span> of{" "}
          <span className="text-[#c5fb79] uppercase font-bold">
            UGC Content Creation
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          We provide you the best UGC content creation services.
        </p>
        <div className="block mt-6 ">
          <Button
            as={Link}
            href="/freelancers"
            className="px-6 py-3 bg-[#c5fb79] text-black font-semibold rounded-full ring-2 border-1 ring-[#c5fb79] hover:bg-[#d695f5] hover:ring-[#d695f5] transition-all shadow-lg"
          >
            Start Exploring
          </Button>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="z-10">
        <Image
          src="/logo/white-green-word.webp"
          alt="Logo"
          width={400}
          height={400}
          className="w-[150px] md:w-[400px] sm:w-[300px] xs:w-[200px]"
        />
      </div>
    </div>
  );
}
