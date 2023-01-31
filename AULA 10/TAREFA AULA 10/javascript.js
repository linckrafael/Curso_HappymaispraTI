function pet() {
  let pe = document.forms["cadastrar"]["pe"].value;
  let bi = document.forms["cadastrar"]["bi"].value;
  let es = document.forms["cadastrar"]["es"].value;
  let da = document.forms["cadastrar"]["da"].value;
  let t1 = document.forms["cadastrar"]["t1"].value;

  let inserir = window.document.getElementById("inserirTabela");
  inserir.innerHTML = `<td scope="row">${pe}</td>`;
  inserir.innerHTML += `<td>${bi}</td>`;
  inserir.innerHTML += `<td>${es}</td>`;
  inserir.innerHTML += `<td>${da}</td>`;
  inserir.innerHTML += `<td>${t1}</td>`;
}
