// Adiciona tarefa na lista quando clicar no botão "Adicionar Tarefa"
document.getElementById("add").addEventListener("click", input);
// Adiciona tarefa na lista quando pressionar a tecla Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    input();
  }
});
// Função para adicionar as tarefa na lista
function input() {
  const entrada = document.getElementById("entradaTarefa");
  const tarefacriada = entrada.value.trim();

  if (!tarefacriada) return;

  const lista = document.createElement("li");

  lista.textContent = tarefacriada;

  document.getElementById("adicionarTarefas").appendChild(lista);
  entrada.value = "";
}
// Adiciona checkbox para cada tarefa quando clicar nos botões "Selecionar Tarefa"
document.getElementById("select1").addEventListener("click", addCheckbox);
document.getElementById("select2").addEventListener("click", addCheckbox);
// Função para criar checkbox
function criarCheckbox(tarefa) {
  if (!tarefa.querySelector("input[type='checkbox']")) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    tarefa.insertBefore(checkbox, tarefa.firstChild);
  }
}
// Função para adicionar checkbox para cada tarefa
function addCheckbox() {
  switch (event.target.id) {
    case "select1":
      const lista1 = document.querySelectorAll("#adicionarTarefas li");
      lista1.forEach((tarefa) => criarCheckbox(tarefa));
      break;
    case "select2":
      const lista2 = document.querySelectorAll("#tarefasFinalizadas li");
      lista2.forEach((tarefa) => criarCheckbox(tarefa));
      break;
    default:
      break;
  }
}
// Move tarefa da lista de pendentes para a lista de tarefas finalizadas quando clicar no botão "Marcar como finalizada"
document.getElementById("done").addEventListener("click", Finalizada);
// Função para mover tarefa para a lista de tarefas finalizadas
function Finalizada() {
  const selecionadas = document.querySelectorAll("#adicionarTarefas li");
  selecionadas.forEach((tarefa) => {
    const checagem = tarefa.querySelector("input[type='checkbox']");
    if (checagem && checagem.checked) {
      const tarefaFinalizada = tarefa.cloneNode(true);
      tarefaFinalizada.querySelector("input[type='checkbox']").remove();
      document
        .getElementById("tarefasFinalizadas")
        .appendChild(tarefaFinalizada);
      tarefa.remove();
    }
    if (checagem && !checagem.checked) {
      checagem.remove();
    }
  });
}
// Remove tarefa da lista de tarefas finalizadas quando clicar no botão "Remover Tarefa Finalizada"
document.getElementById("remov").addEventListener("click", Remover);
// Função para remover tarefa da lista de tarefas finalizadas
function Remover() {
  const selecao = document.querySelectorAll("#tarefasFinalizadas li");
  selecao.forEach((tarefa) => {
    const check = tarefa.querySelector("input[type='checkbox']");

    if (check && check.checked) {
      tarefa.remove();
    }
    if (check && !check.checked) {
      check.remove();
    }
  });
}
