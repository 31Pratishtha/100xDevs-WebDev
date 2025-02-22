import express, { json } from 'express'
import fs from 'fs'

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if(err){
      console.log(1, err)
      return
    }

    res.send(JSON.parse(data))
  })
  // res.send('Hello World')
})

app.post('/todo', (req, res) => {
  fs.readFile('./todos.json', 'utf-8', (err, data) => {
        if (err) {
          console.log(err)
          return
        }
  
        let todos = {todos : []}
        let currId;
        if (data) {
          todos = JSON.parse(data)
          currId = todos.todos.length !== 0 ? todos.todos.at(todos.todos.length - 1).id : 0
          console.log(data)
          console.log(todos)
          }
  
        todos.todos.push({
          id: currId + 1, 
          item: req.body.item
        })
  
        fs.writeFile('./todos.json', JSON.stringify(todos, null, 2), (err) => {
          if (err) {
            console.log(3);
            return
          }
        })
      })

      res.send("todo added")

})

app.delete('/todo', (req, res) => {
  fs.readFile("./todos.json", 'utf8', (err, data) => {
    if(err){
      console.log(err)
      return
    }
    
    let todos = {todos: []}
    let deleteTodo = req.body.id
    if(data){
      todos = JSON.parse(data)
    }
    
    const initialLength = todos.todos.length
    todos.todos = todos.todos.filter(todoItem => todoItem.id !== deleteTodo)
    console.log(1)
    
    if(todos.todos.length === initialLength){
      res.send("Todo Item does not exist")
      return
    }

    fs.writeFile('./todos.json', JSON.stringify(todos, null, 2), (err) => {
      if(err){
        console.log(err)
        return
      }
      res.send("Todo deleted")
    })
  })
})

app.listen(3000)