export async function cargarPersonas() {
  const res = await fetch("../../personas.txt");
  const data = await res.text();
  return data.split("\n").map(x => x.trim()).filter(x => x !== "");
}
