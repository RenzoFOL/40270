import { juntarFiguras } from "./juntarFiguras.js";
import { actualizarApp } from "./actualizarApp.js";
import { asignarEventos } from "./asignarEventos.js";

document.addEventListener("DOMContentLoaded", () => {
  const ids = [1, 2, 3];
  const contenido = juntarFiguras(ids);
  actualizarApp("app", contenido);
  asignarEventos();
});
