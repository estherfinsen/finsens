"use client";
import { useState } from "react";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="h-20 sticky top-0 left-0 pt-16 text-links w-full">
      <div className="px-4 h-full mx-auto max-w-screen-lg">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <p className="uppercase text-box_red text-nav pt-14">Finsens</p>
          </Link>
          <div className="z-10 scale-x-[4] scale-y-[4.6] pt-3.5">
            <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#DBF2FF" : "#FF4125"} size={64} />
          </div>
          {isOpen && (
            <div className="fixed top-0 right-0 w-full h-screen bg-box_red">
              <ul className="fixed inset-0 flex flex-col justify-center items-center text-blue uppercase">
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link href="/grafik">
                    <p className="hover:underline">Grafik</p>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/scenografi">
                    <p className="hover:underline">Scenografi</p>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/speak">
                    <p className="hover:underline">speak</p>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
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
