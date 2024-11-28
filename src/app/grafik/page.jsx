import { Work_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function grafik() {
  const response = await fetch("https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/grafik", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const data = await response.json();
  console.log(data);

  return (
    <div className={`${work_header.className} text-red uppercase pt-12 text-headers relative`}>
      <div className="relative overflow-hidden w-screen v">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a href={`/grafik/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
