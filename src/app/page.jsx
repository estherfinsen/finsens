import React from "react";
import Image from "next/image";
import rasmus from "./imgs/rasmus.jpg";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_bread = Work_Sans({
  weight: ["500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <section className="w-screen min-h-screen text-blue uppercase pt-24 text-headers relative snap-y snap-mandatory">
      <div className="grid grid-cols-3 gap-4 w-full h-full px-7 snap-center">
        {["grafik", "scenografi", "speak"].map((category) => (
          <Link key={category} href={`/${category}`} className="relative group aspect-square overflow-hidden">
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image src={rasmus} alt={category} layout="fill" objectFit="cover" className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105" />

              {/* Animated Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-red/60 transition-opacity duration-500">
                <p className={`${work_bread.className} uppercase tracking-widest text-hover_${category}`}>{category}</p>
                <div className="relative w-full overflow-hidden mt-3">
                  <div className="flex animate-program-2 space-x-8">
                    {Array(10)
                      .fill(category)
                      .map((word, i) => (
                        <span key={i} className="text-blue uppercase tracking-widest whitespace-nowrap">
                          {word}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
