import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import face from "../app/imgs/face.png";
import insta from "../app/imgs/insta.png";

const footer = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 py-12 px-20 bg-box_purple">
      <div className="w-6/12 grid grid-cols-4 self-center">
        <Logo />
        <Link href="https://www.facebook.com/finsens.dk">
          <Image className="w-6/12" src={face} alt="face" />
        </Link>

        <Link href="https://www.instagram.com/finsens.dk/?hl=da">
          <Image className="w-6/12" src={insta} alt="insta" />
        </Link>

        <Link href="https://www.linkedin.com/in/rasmus-finsen-b8b22b6/?originalSubdomain=dk">
          <Image className="w-6/12" src={insta} alt="linkedin" />
        </Link>
      </div>

      <ul className="grid grid-cols-2 justify-end mr-0 text-blue uppercase gap-y-3">
        <li className="place-self-end">
          <Link className="hover:underline" href="/about">
            <p>about</p>
          </Link>
        </li>
        <li className="place-self-end">
          <Link className="hover:underline" href="/contact">
            <p>contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default footer;
