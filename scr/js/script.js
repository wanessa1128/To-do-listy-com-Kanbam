// Seleciona o campo de input (onde digita a tarefa)
const input = document.getElementById("inputTarefa")

// Seleciona o botão "Adicionar"
const botao = document.getElementById("btnAdicionar")

// Seleciona a lista (ul) onde as tarefas serão exibidas
const conteiner2 = document.getElementById("listadeTarefas")

// Adiciona um evento de clique no botão
botao.addEventListener("click", adicionarTarefa)

// Faz com que adicione a tarefa com o Enter do teclado
input.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
     botao.click()
   }
})

// Função que cria uma nova tarefa
function adicionarTarefa() {

// Se o input estiver vazio, não faz nada
if (input.value === "") return

// Cria um novo elemento <li> (item da lista)
const li = document.createElement("li")

// Coloca o texto digitado dentro do <li>
li.textContent = input.value

// Evento para marcar/desmarcar como concluída
li.addEventListener("click", () => {

// Adiciona ou remove a classe "concluida"
li.classList.toggle("concluida")
})

// Cria um botão para remover a tarefa
const btnRemover = document.createElement("button")

// Texto do botão (X)
btnRemover.textContent = "Excluir"

// Evento de clique para remover a tarefa
btnRemover.addEventListener("click", (e) => {


// Impede que o clique no botão ative o clique do <li>
e.stopPropagation()

// Remove o <li> da lista
lista.removeChild(li)


});

// Coloca o botão dentro do <li>
li.appendChild(btnRemover)

// Adiciona o <li> dentro da <ul>
lista.appendChild(li)

// Limpa o campo de input
input.value = ""
}
// Permite arrastar e soltar tarefas entre as colunas do Kanban
const colunas = document.querySelectorAll(".coluna ul")

colunas.forEach(coluna => {
  coluna.addEventListener("dragover", (e) => {
    e.preventDefault()

    const dragging = document.querySelector(".dragging")
    coluna.appendChild(dragging)
  })
})