export function crearTabla(headers, rows) {
  let table = `<tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>`;
  for (const row of rows) {
    table += `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`;
  }
  return table;
}
