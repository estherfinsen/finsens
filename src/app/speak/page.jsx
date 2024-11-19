import Card from "../../components/Card";

export default async function Speak() {
  const response = await fetch("https://mature-insidious-monitor.glitch.me/bands");
  const data = await response.json();
  console.log(data);

  return (
    <section className="grid">
      <h1 className="text-box_red uppercase text-headers py-8 pt-16 ">Speak</h1>
      <div className=" justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-white uppercase text-breads md:text-links">
          {data.map((band) => {
            return <Card key={band.name} data={band} />;
          })}
        </div>
      </div>
    </section>
  );
}
