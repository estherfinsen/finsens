import React from "react";
import Image from "next/image";
import rasmus from "../imgs/rasmus.jpg";
import { Ballet } from "next/font/google";

const ballet = Ballet({
  weight: "400",
  subsets: ["latin"],
});

export default function about() {
  return (
    <section className="text-breads text-box_purple uppercase">
      <div className=" w-9/12 pt-32 md:flex gap-3">
        <h1 className={`${ballet.className} text-box_red text-first_letter`}>K</h1>
        <h1 className=" text-box_green text-headers pt-3"> ontakt </h1>
      </div>
      <div className="md:grid md:grid-cols-2 pt-5">
        <div className="md:col-start-1">
          <p className="">hejsa</p>
        </div>

        <div className="md:col-start-2 justify-content-end">
          <Image src={rasmus} alt="foos" className="w-10/12" />
        </div>
      </div>
    </section>
  );
}
