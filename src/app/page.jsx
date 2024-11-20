import React from "react";
import Image from "next/image";
import rasmus from "./imgs/rasmus.jpg";

export default function page() {
  return (
    <section className="w-9/12 pt-32 md:flex gap-4 grid-cols-3">
      <Image src={rasmus} alt="foos" className="w-10/12 col-span-1" />
      <Image src={rasmus} alt="foos" className="w-10/12 col-span-2" />
      <Image src={rasmus} alt="foos" className="w-10/12 col-span-3" />
    </section>
  );
}
