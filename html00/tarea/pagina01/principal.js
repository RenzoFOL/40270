import { cargarPersonas } from "./cargarPersonas.js";
import { crearTabla } from "./crearTabla.js";
import { actualizarTabla } from "./actualizarTabla.js";

document.addEventListener("DOMContentLoaded", async () => {
  const personas = await cargarPersonas();
  const tabla = crearTabla(["Nombre"], personas.map(nombre => [nombre]));
  actualizarTabla("demo", tabla);
});
