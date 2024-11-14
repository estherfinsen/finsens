import { Ballet } from "next/font/google";

const ballet = Ballet({
  weight: "400",
  subsets: ["latin"],
});
export default function page() {
  return (
    <section className=" w-9/12 pt-32 md:flex gap-4 ">
      <h1 className={`${ballet.className} text-box_red uppercase text-first_letter`}>F</h1>
      <h1 className="text-box_red uppercase text-headers pt-3"> INSENS </h1>
    </section>
  );
}
