"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaStarHalf } from "react-icons/fa6";

function HeaderContent({ links }) {
  const pathname = usePathname();
  const linksAnimation = {
    hidden: { y: "100%" },
    show: {
      y: 0,
      transition: { ease: "easeOut", delay: 0.2, duration: 0.4 },
    },
    exit: {
      y: "100%",
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const children = {
    hidden: { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },

    show: (i) => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.11, 0.325, 0.16, 0.95],
        delay: Math.random() * (i / 50),
        duration: 0.6,
      },
    }),

    exit: (i) => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.645, 0.045, 0.355, 0.8],
        delay: Math.random() * (i / 50),
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="w-screen h-screen overflow-hidden fixed inset-0">
      <div
        className="w-full h-full grid grid-rows-1"
        style={{ gridTemplateColumns: "repeat(20, minmax(100px, 1fr))" }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full bg-[#520a70]"
            variants={children}
            initial="hidden"
            animate="show"
            exit="exit"
            custom={i}
          ></motion.div>
        ))}
      </div>

      <section className="w-full h-full absolute inset-0 flex items-center justify-center z-20">
        <ul className="w-[900px] px-16 leading-10">
          {links.map((link) => (
            <li key={link.id} className="overflow-hidden">
              <motion.div
                variants={linksAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <a
                  className={`flex items-center gap-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase ${
                    pathname === link.link ? "text-[#d695f5]" : "text-[#c5fb79]"
                  } hover:text-white transition-all`}
                  href={link.link}
                >
                  {pathname === link.link && (
                    <span className="transform ">
                      <FaStarHalf />
                    </span>
                  )}
                  {link.name}{" "}
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HeaderContent;
