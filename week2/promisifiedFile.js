const fs = require('fs');

function readFile() {
  return new Promise(readAndDoToFile)
}
function callback(contents) {
  console.log(contents)
}

function readAndDoToFile(resolve){
  fs.readFile("promise.txt", 'utf8', (err, contents) => {
    resolve(contents)
  })
}

const p = readFile();


p.then(callback)