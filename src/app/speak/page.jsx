import { Work_Sans } from "next/font/google";
import Image from "next/image";
import dataSpeak from "../dataSpeak";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function speak() {
  const response = await fetch("https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/speak", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const data = await response.json();
  console.log(data);

  return (
    <div className={`${work_header.className} text-red uppercase text-headers relative`}>
      <div className="relative overflow-hidden w-screen v">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>
      <ul className="text-breads">
        {data.map((item) => (
          <li key={item.id}>
            <a href={`/speak/${item.slug}`}>
              {item.name}
              {dataSpeak.map((image) => {
                return image.id === item.id && image.images[0].name === "cover" && <Image className="bg-grey" src={image.images[0].src} alt={image.images[0].alt || "Default alt text"} width={500} height={300} />;
              })}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
