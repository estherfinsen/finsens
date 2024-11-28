import supabase from "../../lib/supabase";

export default async function grafik() {
  const response = await fetch("https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/bands", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Grafik Projekter</h1>
      <ul>
        {grafik.map((item) => (
          <li key={item.id}>
            <a href={`/grafik/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
