import express from 'express'

const app = express()


function isOldEnough(age) {
  if (age >= 14)
    return true
  else
    return false
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age
  if (age >= 14) {
    next()
  }
  else {
    res.json({
      msg: "you are smol"
    })
  }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1", (req, res) => {
  res.json({
    msg: "welcome to ride 1"
  })
})


app.get("/ride2", (req, res) => {
  res.json({
    msg: "welcome to ride 2"
  })
})

app.listen(3000)