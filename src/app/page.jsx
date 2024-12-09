"use client"; // Sørger for, at denne komponent behandles som en klientkomponent

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import dataSpeak from "@/app/dataSpeak";

const work_bread = Work_Sans({
  weight: ["500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
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

  // State to control the audio playback
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={`${work_header.className} text-red uppercase pt-12 text-headers relative`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-screen px-0 pt-20 work_bread">
        <div className="md:col-start-1 md:row-start-1 relative w-full pb-[100%] overflow-hidden mt-3 bg-grey">
          <Image src={speak[0].images[0].src} alt={speak[0].images[0].alt || "Default alt text"} layout="fill" objectFit="cover" />
        </div>

        <div className="md:col-start-2 md:row-start-1 px-4 md:px-8 flex flex-col">
          <h1>{data.name}</h1>
          <p className="font-medium mt-4 text-breads">{data.description}</p>
        </div>

        {/* Add sounds data to grid */}
        <div className="md:col-start-2 md:row-start-2 px-4 md:px-8 flex flex-col">
          <h2 className="mt-4 text-xl font-bold">Sounds</h2>
          {data.sounds && data.sounds.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.sounds.map((sound, i) => (
                <li key={i} className="relative group">
                  <audio ref={audioRef} className="hidden">
                    <source src={sound.src} type="audio/m4a" />
                    <source src={sound.src} type="audio/mp4" />
                    <source src={sound.src} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>

                  {/* Custom Play Button */}
                  <button onClick={togglePlay} className="w-20 h-20 bg-blue text-white rounded-full flex items-center justify-center mt-2 hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <span className="text-xl">||</span> // Pause icon
                    ) : (
                      <span className="text-xl">▶</span> // Play icon
                    )}
                  </button>

                  <p className="text-center mt-2 text-blue font-semibold">{sound.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No sounds available.</p>
          )}
        </div>

        {speak[0].images.slice(1).map((image, i) => (
          <div key={i} className="relative w-full pb-[100%] overflow-hidden">
            <Image src={image.src} alt={image.alt || `Image ${i + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
