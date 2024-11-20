import React from "react";
import Image from "next/image";
import rasmus from "../imgs/rasmus.jpg";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function kontakt() {
  return (
    <section className={`${work_header.className} text-box_red uppercase pt-28 text-headers relative`}>
      <div className="program relative w-screen max-w-full overflow-hidden text-white">
        <div className="track_2 absolute whitespace-nowrap will-change-transform animate-program-2">
          <p className="text-running uppercase">kontakt kontakt kontakt kontakt kontakt kontakt</p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2">
        <div className="md:col-start-1 z-10 relative flex flex-col items-start uppercase">
          <ul className="flex flex-col items-start uppercase gap-y-7">
            <li>
              <Link className="hover:underline" href="https://www.facebook.com/finsens.dk">
                <p>facebook</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.instagram.com/finsens.dk/?hl=da">
                <p>instagram</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.linkedin.com/in/rasmus-finsen-b8b22b6/?originalSubdomain=dk">
                <p>linkedin</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="tel:+45 22174765">
                <p>+45 22 17 47 65</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="mailto:rasmus@finsens.dk">
                <p>rasmus@finsens.dk</p>
              </Link>
            </li>
            <li>cvr: 33319924</li>
          </ul>
        </div>

        {/* Image section */}
        <div className="md:col-start-2 relative">
          <Image src={rasmus} alt="foos" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
