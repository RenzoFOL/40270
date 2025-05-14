import { juntarFiguras } from "./juntarFiguras.js";
import { actualizarApp } from "./actualizarApp.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada y lista");

  const ids = [1, 2, 3];
  const contenido = juntarFiguras(ids);
  actualizarApp("app", contenido);
});
