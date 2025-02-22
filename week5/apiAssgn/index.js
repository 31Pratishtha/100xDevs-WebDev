import express from 'express'

const app = express()

let reqCount = 0;
const loggerFunc = (req, res, next) => {
  reqCount = reqCount + 1
  const timestamp = new Date()
  res.on('finish', () => {
    console.log(req.method, req.url, res.statusCode, timestamp)
  })
  next()
}

app.use(express.json())

app.use(loggerFunc)

app.get('/', (req, res) => {
  res.send("Hello guys")
})

app.get('/sum/:a/:b', (req, res) => {

  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)

  res.json({
    answer: a + b
  })

})

app.get('/multiply/:a/:b', (req, res) => {
  const a = req.params.a
  const b = req.params.b

  res.json({
    answer: a * b
  })
})

app.post('/subtract', (req, res) => {
  const a = req.body.a
  const b = req.body.b

  res.json({
    answer: a - b
  })
})

app.get('/reqcount', (req, res) => {
  res.json({
    requestCount: reqCount
  })
})


app.listen(3000)