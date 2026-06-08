document.getElementById("add").addEventListener("click", input);

function input() {
  const campo = document.getElementById("entradaTarefa");
  const entradaTarefa = campo.value.trim();

  if (!entradaTarefa) return;

  const lista = document.createElement("li");
  lista.textContent = entradaTarefa;

  document.getElementById("adicionarTarefas").appendChild(lista);
  campo.value = "";
}
