"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AboutSection() {
  const videos = [
    {
      id: 1,
      src: "https://brandboost-eg.com/videos/home/1735307084.mp4",
      poster: "/logo/white-letter.webp",
    },
    {
      id: 2,
      src: "https://brandboost-eg.com/videos/home/1735307197.mp4",
      poster: "/logo/white-letter.webp",
    },
    {
      id: 3,
      src: "https://brandboost-eg.com/videos/home/1735307234.mp4",
      poster: "/logo/white-letter.webp",
    },
    {
      id: 4,
      src: "https://brandboost-eg.com/videos/home/1735307977.mp4",
      poster: "/logo/white-letter.webp",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#c5fb79]">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center text-center lg:text-start p-8"
        >
          <h1 className="text-primary text-5xl font-bold capitalize">
            About Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl p-6 leading-[2.5rem]">
            We believe that User Generated Content (UGC) is the heartbeat of any
            successful marketing campaign. That&apos;s why we decided to build
            an integrated platform that connects brands with the best content
            creators in the market, simply and effectively.
            <br />
            <br />
            Brand Boost is not just a middleman... We are your partner in
            success, helping you get closer to your audience, build their trust,
            and achieve your marketing goals.
            <br />
            <br />
            With real content, and tangible impact.
          </p>
          <div>
            <Button
              as={Link}
              href="/about"
              className="capitalize px-6 py-3 bg-primary text-white font-semibold rounded-full ring-2 border-1 ring-primary 
              hover:bg-[#d695f5] hover:ring-[#d695f5] hover:text-black transition-all shadow-lg"
            >
              Read more about us
            </Button>
          </div>
        </motion.div>

        {/* Right Section (Videos) */}
        <div className="hidden md:grid flex-1 grid-cols-2 gap-6 p-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-[220px] h-[420px] max-w-xs mx-auto group relative"
            >
              <video
                src={video.src}
                className="w-full h-full rounded-xl object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={video.poster}
              ></video>

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
