import express from 'express'

const app = express()

app.use(express.json())

app.use(logger)

app.get('/', async (req, res) => {
  console.log('hiii');
  // const resp = await getData()
  // console.log(resp);
  
  res.send('Hellooo server')
  
})

app.get('/api', (req, res) => {
  console.log('apiiii');
  // getData()
  res.send('Hellooo server')
  
})

// app.get('/getReqCount', (req, res) => {
//   // console.log(numReq)
//   res.send(numReq)
// })

// async function getData() {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   return resp
// }

let numReq = 0;

function logger(req, res, next){
  console.log(req.url, req.method, req.date)
  numReq = numReq + 1
  next()
}



app.listen(3000)