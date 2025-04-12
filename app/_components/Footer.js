"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <footer className="bg-dark text-lightGreen py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="relative order-3 md:order-1">
          <div className="w-full h-64 relative">
            <Image
              src="/logo/original-rounded.webp"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <h2 className="text-9xl font-extrabold mb-4">BB</h2> */}
          <p className="text-xs text-accent mt-2">© 2025 Brand Boost</p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 order-1 md:order-2">
          <h3 className="text-sm font-semibold text-accent">(NAVIGATION)</h3>
          {["Home", "Works", "Studio", "Process", "Gallery", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                <span className="block text-2xl font-semibold hover:text-secondary transition-colors duration-300">
                  {item}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Right Section */}
        <div className="space-y-8 order-2 md:order-3">
          {/* Acknowledgement */}
          <div>
            <h3 className="text-sm font-semibold text-accent">
              (ACKNOWLEDGEMENT)
            </h3>
            <p className="text-sm text-white mt-2">
              We believe that User Generated Content (UGC) is the heartbeat of
              any successful marketing campaign. That&apos;s why we decided to
              build an integrated platform that connects brands with the best
              content creators in the market, simply and effectively.
            </p>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-accent">(INFO)</h3>
            <p className="text-sm text-white mt-2">
              A: Mokattam , Cairo - Egypt <br />
              E:{" "}
              <Link
                href="mailto:info@oharchitecture.com"
                className="hover:text-secondary"
              >
                help@brandboost-eg.com
              </Link>{" "}
              <br />
              P: 01070746146
            </p>
          </div>

          {/* Logo */}
          {/* <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-bold">OH</span>
            </div>
            <p className="text-xs text-accent">
              Member <br />
              Australian Institute of Architects
            </p>
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 pt-8 flex justify-between text-xs text-lightGreen border-t border-gray-200 mt-8">
        <div className="space-x-4">
          <Link href="/privacy-policy">
            <span className="hover:text-secondary">PRIVACY POLICY</span>
          </Link>
          <Link href="/terms-of-service">
            <span className="hover:text-secondary">TERMS OF SERVICE</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="https://instagram.com">
            <span className="hover:text-secondary">INSTAGRAM</span>
          </Link>
          <span>MADE BY WIKMEIDA</span>
        </div>
      </div>
    </footer>
  );
}
