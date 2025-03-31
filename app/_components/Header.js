"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import HeaderContent from "./HeaderContent";
import { Button } from "@heroui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const burger = {
    opened: (deg) => ({
      rotate: deg,
    }),
    closed: { rotate: 0 },
  };

  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Creators", link: "/freelancers" },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact", link: "/contact" },
    { id: 6, name: "Blogs", link: "/blogs" },
  ];

  return (
    <nav className="bg-black w-full h-full px-12 py-4 absolue z-20">
      <div className="relative w-full p-2 flex justify-between items-center rounded-lg z-40">
        <h1 className="font-bold text-white text-2xl">Brand Boost</h1>

        <ul className="hidden lg:flex items-center justify-center gap-4 uppercase">
          {links.map((link) => (
            <li key={link.id} className="text-white font-semibold text-lg">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button className="bg-white text-black">Login</Button>
        </div>

        <div
          className="space-y-2 cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            variants={burger}
            animate={isOpen ? "opened" : "closed"}
            custom={"20deg"}
            className="w-[30px] h-[2px] bg-white origin-left"
          ></motion.div>
          <motion.div
            variants={burger}
            animate={isOpen ? "opened" : "closed"}
            custom={"-20deg"}
            className="w-[30px] h-[2px] bg-white origin-left"
          ></motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && <HeaderContent links={links} />}
      </AnimatePresence>
    </nav>
  );
}

export default Header;
