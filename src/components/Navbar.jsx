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
    <div className="h-20 sticky top-0 left-0 pt-16 text-breads w-full z-50">
      <div className="px-4 h-full mx-auto max-w-screen-lg">
        <div className="flex justify-start items-center h-full">
          <Link href="/" className="justify-self-start">
            <p className={`${work_header.className} uppercase text-red text-nav pt-14`}>Finsens</p>
          </Link>
          <div className="z-30 scale-x-[4] scale-y-[4.6] pt-3.5 ml-auto">
            <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#DBF2FF" : "#FF4125"} size={64} />
          </div>
          {isOpen && (
            <div className="fixed top-0 right-0 w-full h-screen bg-red z-20">
              <ul className="fixed inset-0 flex flex-col justify-center items-center text-blue uppercase">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
