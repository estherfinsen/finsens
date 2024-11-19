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
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FF4125" size={48} />
          </div>
          {isOpen && (
            <div className="fixed top-20 right-0 w-6/12 md:w-4/12 h-full bg-fooBlue">
              <ul className=" fixed right-3 text-end text-box_red uppercase pt-16 ">
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
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                ></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
