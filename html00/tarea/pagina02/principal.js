import { cargarCatalogo } from "./cargarCatalogo.js";
import { crearTabla } from "./crearTabla.js";
import { actualizarTabla } from "./actualizarTabla.js";

document.addEventListener("DOMContentLoaded", async () => {
  const cds = await cargarCatalogo();
  const datos = cds.map(cd => [
    cd.getElementsByTagName("ARTIST")[0]?.textContent ?? "",
    cd.getElementsByTagName("TITLE")[0]?.textContent ?? ""
  ]);
  const tabla = crearTabla(["Artist", "Title"], datos);
  actualizarTabla("demo", tabla);
});
