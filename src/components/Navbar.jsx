"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Slant as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="w-full h-20 sticky top-0 pt-16 text-links">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo className="" />
          <div className="z-10">
            <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#DBF2FF" : "#FF4125"} size={48} />
          </div>
          {isOpen && (
            <div className="fixed right-0 w-full h-full bg-box_red">
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
