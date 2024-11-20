import React from "react";
import Image from "next/image";
import rasmus from "./imgs/rasmus.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative w-full h-screen pt-24">
      <div className="grid grid-cols-3 gap-4 w-full h-full z-10">
        <Link href="/grafik" className="relative group aspect-square">
          <div className="relative w-full h-full">
            <Image src={rasmus} alt="grafik" layout="fill" objectFit="cover" className="w-full h-full" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-box_green w-1/2 left-0 transition-opacity duration-500 ease-in-out">
              <p className="text-box_red uppercase text-breads">grafik</p>
            </div>
          </div>
        </Link>

        <Link href="/scenografi" className="relative group aspect-square">
          <div className="relative w-full h-full">
            <Image src={rasmus} alt="scenografi" layout="fill" objectFit="cover" className="w-full h-full" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-box_green w-1/2 left-0 transition-opacity duration-500 ease-in-out">
              <p className="text-box_red uppercase text-breads">scenografi</p>
            </div>
          </div>
        </Link>

        <Link href="/speak" className="relative group aspect-square">
          <div className="relative w-full h-full">
            <Image src={rasmus} alt="speak" layout="fill" objectFit="cover" className="w-full h-full" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-box_green w-1/2 left-0 transition-opacity duration-500 ease-in-out">
              <p className="text-box_red uppercase text-breads">speak</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
