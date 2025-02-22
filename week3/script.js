const todoList = document.getElementById("listTodo")


function addTodo() {
  const value = document.querySelector("input").value
  const newTodoItem = document.createElement("li")
  const spanEl = document.createElement('span')
  const buttonEl = document.createElement("button")
  spanEl.innerHTML = value
  buttonEl.innerHTML = "Delete"

  const divEl = document.createElement("div")
  divEl.appendChild(spanEl)
  divEl.appendChild(buttonEl)

  document.querySelector("ul").appendChild(divEl)
  
}


let todos = []

function addTodoState() {
  todos.push({
    title: document.querySelector('input').value
  })

  render()
}

function deleteTodo() {
  todos.pop()
  render()
}

function todoComponent(todo){
  const spanEl = document.createElement('span')
  const buttonEl = document.createElement("button")
  
  spanEl.innerHTML = todo.title
  buttonEl.innerHTML = "Delete"
  buttonEl.onclick = deleteTodo
  
  const divEl = document.createElement("div")
  divEl.appendChild(spanEl)
  divEl.appendChild(buttonEl)
  
  document.querySelector("ul").appendChild(divEl)
}

function render() {
  
  document.querySelector("ul").innerHTML = ""
  todos.forEach(todo => {
    todoComponent(todo)
  });
}