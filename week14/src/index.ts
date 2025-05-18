type TodoType = {
  title: string
  description: string
  done: boolean

}
type TodoInput = {
  lastDoneAt: Date
}
function Todo(props: TodoInput) {

}

type myType = TodoType & TodoInput

const a:  string | number = 3
const b: string | number = 4

const z = a + b

type sumInput = string | number

const func = (a: sumInput, b: sumInput) => {
  // return a + b   //Operator '+' cannot be applied to types 'sumInput' and 'sumInput'.
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b
  }
  else{
    return String(a) + String(b)
  }

}

console.log('hii', func(3, '5'))