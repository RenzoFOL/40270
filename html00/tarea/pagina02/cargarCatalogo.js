export async function cargarCatalogo() {
  const res = await fetch("cd_catalog.xml");
  const text = await res.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");
  return Array.from(xmlDoc.getElementsByTagName("CD"));
}
