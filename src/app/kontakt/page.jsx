import React from "react";
import Image from "next/image";
import rasmus from "../imgs/rasmus.jpg";
import Link from "next/link";

export default function kontakt() {
  return (
    <section className="text-box_red uppercase pt-24">
      <div className="md:grid md:grid-cols-2 ">
        <div className="md:col-start-1">
          <h1 className=" w-9/12 text-headers">Kontakt</h1>
          <p className="pt-5">hejsa</p>
          <ul className="flex flex-col justify-center items-start uppercase gap-y-3">
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

        <div className="md:col-start-2 justify-content-end">
          <Image src={rasmus} alt="foos" className="w-10/12" />
        </div>
      </div>
    </section>
  );
}
