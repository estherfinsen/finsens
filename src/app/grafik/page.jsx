import { Work_Sans } from "next/font/google";
import Image from "next/image";
import dataGrafik from "../dataGrafik";

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
    <div className={`${work_header.className} text-red uppercase text-headers relative`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 w-screen pt-20">
        {data.map((item, index) => {
          const alignClass = index % 3 === 0 ? "items-start" : index % 3 === 1 ? "items-center" : "items-end";

          return (
            <li key={item.id} className={`group flex ${alignClass} flex-col h-[400px] w-full`}>
              <a href={`/grafik/${item.slug}`} className="block transition-opacity duration-500 group-hover:opacity-80">
                {/* Billedcontainer */}
                <div className="relative w-[400px] h-[400px] bg-grey overflow-hidden">
                  <Image src={dataGrafik.find((image) => image.id === item.id && image.images[0].name === "cover")?.images[0].src || "/default-image.jpg"} alt={dataGrafik.find((image) => image.id === item.id && image.images[0].name === "cover")?.images[0].alt || "Default alt text"} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Tekst */}
                <p className="mt-2 text-breads font-bold text-left w-[300px]">{item.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
