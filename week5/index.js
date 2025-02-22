const input = [1, 2, 3, 4, 5]

function transform(i) {
  return i * 2
}

const ans = input.map(transform)
console.log(ans)


//My implementation of Map function
function mapOnArray(array, callback) {
  const res = []
  for (let i = 0; i < array.length; i++) {
    res.push(callback(array[i]))
  }
  return res
}

const myAns = mapOnArray(input, transform)
console.log(myAns);


//filtering
const filterAns = input.filter((n) => {
  if(n % 2 == 0) return true
  else return false
})

console.log(filterAns)