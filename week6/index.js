import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

const JWT_SECRET = "iampratishthaandiamawebdeveloper"

const users = []

app.use((req, res, next) => {
  console.log(users);
  next()
})


app.post('/signup', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "you are signed up."
  })
})


app.post('/signin', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const foundUser = users.find((u) => (u.username === username && u.password === password))

  if (!foundUser) {
    res.json({
      message: "Incorrect credentials"
    })
    return
  }
  else {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET)

    res.json({
      token: token
    })
  }
})

app.use((req, res, next) => {
  const token = req.headers.authorization
  const decodedInfo = jwt.verify(token, JWT_SECRET)

  if (decodedInfo.username) {
    req.username = decodedInfo.username
    next()
  } else {
    res.json({
      message: "token invalid"
    })
  }
})


app.get('/me', (req, res) => {
  
  let foundUser = null

  foundUser = users.find((u) => u.username === req.username)


  res.json({
    username: foundUser.username,
    password: foundUser.password
  })
})



app.listen(3000)