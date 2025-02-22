function random(resolve){
  setTimeout(resolve, 3000)
  // resolve()
}

function callback(){
  console.log("promise success")
}

let p = new Promise(random)


p.then(callback)
