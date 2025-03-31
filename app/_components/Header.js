"use client";

import { TiStarFullOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import HeaderContent from "./HeaderContent";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const pathname = usePathname();
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
    <>
      <nav className="w-full px-5 lg:px-8 xl:px-[8%] py-4 lg:ms-4 flex items-center justify-between fixed z-[100]">
        <Link href="/">
          <Image
            src={`/logo/original-letter.webp`}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        <ul className="hidden lg:flex items-center justify-center gap-4 lg:gap-6 px-12 py-3 bg-white/10 shadow-sm rounded-full uppercase">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                pathname === link.link
                  ? "text-[#c5fb79] font-bold border-b"
                  : "text-white"
              } font-semibold text-md hover:text-[#c5fb79]`}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            as={Link}
            href="/login"
            className="flex items-center gap-3 px-10 py-2.5 border border-[#c5fb79] text-[#c5fb79] rounded-full ml-4 hover:bg-[#c5fb79] hover:text-black transition-all"
          >
            Join Now <TiStarFullOutline />
          </Button>
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
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && <HeaderContent links={links} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
