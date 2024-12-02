"use client";
import { useState } from "react";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";
import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex relative justify-between ">
      <Link href="/" className="">
        <p className={`${work_header.className} uppercase text-red text-nav`}>Finsens</p>
      </Link>

      <div className="">
        <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#DBF2FF" : "#FF4125"} size={64} />
      </div>

      {isOpen && (
        <div className="w-full h-screen bg-red z-20 absolute insert-0">
          <ul className="flex flex-col justify-center items-center text-blue uppercase">
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/grafik">
                <p className="hover:underline ">Grafik</p>
              </Link>
            </li>

            <li
              onClick={() => {
                setOpen(false);
              }}
              className="pt-6"
            >
              <Link href="/scenografi">
                <p className="hover:underline">Scenografi</p>
              </Link>
            </li>

            <li
              onClick={() => {
                setOpen(false);
              }}
              className="pt-6"
            >
              <Link href="/speak">
                <p className="hover:underline">speak</p>
              </Link>
            </li>

            <li
              onClick={() => {
                setOpen(false);
              }}
              className="pt-6"
            >
              <Link href="/kontakt">
                <p className="hover:underline">kontakt</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
