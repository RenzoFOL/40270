import { crearFigura } from "./crearFigura.js";

export function juntarFiguras(ids) {
  return ids.map(id => crearFigura(id)).join("");
}
