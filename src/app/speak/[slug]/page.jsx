"use client";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import dataSpeak from "@/app/dataSpeak";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function SingleSpeak({ params }) {
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

  const [isPlaying, setIsPlaying] = useState(Array(dataSpeak[0].sounds.length).fill(false));
  const [progress, setProgress] = useState(Array(dataSpeak[0].sounds.length).fill(0));
  const audioRefs = useRef(Array(dataSpeak[0].sounds.length).fill(null));

  const handlePlayPause = (index) => {
    const newIsPlaying = [...isPlaying];
    if (newIsPlaying[index]) {
      audioRefs.current[index].pause();
    } else {
      audioRefs.current[index].play();
    }
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);
  };

  const handleTimeUpdate = (index, e) => {
    const progressPercentage = (e.target.currentTime / e.target.duration) * 100;
    const newProgress = [...progress];
    newProgress[index] = progressPercentage;
    setProgress(newProgress);
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
        <div className="md:col-start-1 md:row-start-1 relative w-full pb-[100%]  overflow-hidden mt-3">
          <Image src={speak[0].images[0].src} alt={speak[0].images[0].alt || "Default alt text"} layout="fill" objectFit="cover" />
        </div>

        <div className="md:col-start-2 md:row-start-1 px-4 md:px-8 flex flex-col">
          <h1>{data.name}</h1>
          <p className="font-medium mt-4 text-breads">{data.description}</p>
        </div>

        <div className="md:col-start-2 md:row-start-2 w-full">
          {speak[0].sounds.map((sound, i) => (
            <div key={i} className="flex items-center justify-between w-full pb-[100%] overflow-hidden mb-6">
              <button onClick={() => handlePlayPause(i)} className="bg-blue-500 text-white p-2 rounded-full w-32">
                {isPlaying[i] ? "Pause" : "Play"}
              </button>

              <div className="flex flex-1 justify-center items-center w-full">
                <audio ref={(el) => (audioRefs.current[i] = el)} src={sound.src} onTimeUpdate={(e) => handleTimeUpdate(i, e)} className="w-full" />
                <progress value={progress[i]} max="100" className="w-full h-2 bg-gray-300 ml-4" />
              </div>
            </div>
          ))}
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
