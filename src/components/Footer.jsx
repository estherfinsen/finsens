import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 items-center py-12 px-20 bg-box_purple">
      <ul className="flex flex-col justify-center items-start text-blue uppercase gap-y-3">
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

      <div className="flex justify-center items-center">
        <Logo />
      </div>

      <ul className="flex flex-col justify-center items-end text-blue uppercase gap-y-3">
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
    </div>
  );
};

export default Footer;
