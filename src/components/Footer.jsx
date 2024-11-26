import React from "react";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className="items-center  mt-16 pt-10 pb-10 px-10 bg-red text-blue uppercase">
      <Link href="/" className="self-start">
        <p className={`${work_header.className} text-footer`}>Finsens</p>
      </Link>
      <div className="grid grid-cols-2 pt-10">
        <ul className="flex flex-col justify-center items-start gap-y-3">
          <li>
            <Link className="hover:underline" href="tel:22174765">
              <p>tlf: 22 17 47 65</p>
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="mailto:rasmus@finsens.dk">
              <p>email: rasmus@finsens.dk</p>
            </Link>
          </li>
          <li>cvr: 33319924</li>
        </ul>

        <ul className="flex flex-col justify-center items-end gap-y-3">
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
        </ul>
      </div>
    </div>
  );
};

export default Footer;
