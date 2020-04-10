const novaTarefa = () => {
   const tarefa = document.getElementById("tarefa").value
   const select = document.getElementById("dia-da-semana").value
   const tarefaNova = document.getElementById("tarefa").innerHTML = "<li>" + tarefa + "</li>"
}