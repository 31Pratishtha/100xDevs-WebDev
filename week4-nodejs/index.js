import { program } from 'commander';
import fs from 'fs'

program
  .name("mycli")
  .description("my custom CLI ")
  .argument('<string>');


program.command('file-count-chars')
  .argument('<string>', 'path to file')
  .action((str, options) => {
    fs.readFile(str, 'utf8', (err, data) => {
      const words = data.split(" ")
      const numWords = words.length;
      console.log("This file contains ", numWords, " words")
    })
  })

program.command('todo')
  .argument('<string>', 'todo-item')
  .action((str) => {
    fs.readFile('./storeTodo.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      let todos = {todo : []}
      let currId;
      if (data) {
        todos = JSON.parse(data)
        currId = todos.todo.length !== 0 ? todos.todo.at(todos.todo.length - 1).id : 0
        console.log(data)
        console.log(todos)
        }

      todos.todo.push({
        id: currId + 1, 
        item: str
      })

      fs.writeFile('./storeTodo.json', JSON.stringify(todos, null, 2), (err) => {
        if (err) {
          console.log(3);
          return
        }
      })
    })
  })

program.parse()