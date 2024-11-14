import Image from "next/image";
import Link from "next/link";
import logo_finsens from "../app/imgs/logo_finsens.png";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link className="max-h-1" href="/">
        <Image src={logo_finsens} alt="Logo" className="relative w-8/12" />
      </Link>
    </>
  );
}
