import React from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import dataSpeak from "@/app/dataSpeak";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function singleSpeak({ params }) {
  const { slug } = await params;
  const response = await fetch(`https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/speak?slug=eq.${slug}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const res = await response.json();
  const data = res[0];
  const speak = dataSpeak.filter((item) => item.id === data.id);
  console.log(speak);
  console.log(dataSpeak[0].id);
  console.log(data.id);

  return (
    <section className={`${work_header.className} text-red uppercase pt-12 text-headers relative`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>
      <div>
        {speak[0].images.map((image, i) => {
          return <Image key={i} src={image.src} alt="" height={500} width={500} />;
        })}
      </div>
    </section>
  );
}
