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


// const generateToken = () => {
//   let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let token = ''
//   for(let i = 0; i < 32; i++){
//     token = token + options[Math.floor(Math.random() *options.length)]
//   }
//   return token;
// }

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
  
  const foundUser = users.find((u) => {
    if(u.username === username && u.password === password){
      return true
    }
    else{
      return false
    }
  })
  
  if(foundUser){
    const token = jwt.sign({
      username: username
    }, JWT_SECRET)
    // foundUser.token = token
    res.json({
      token: token
    })
  }
  else{
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
})

app.get('/me', (req, res) => {
  const token = req.headers.authorization
  const decodedInfo = jwt.verify(token, JWT_SECRET)
  const username = decodedInfo.username

  let foundUser = null
  foundUser = users.find((u) => u.username === username)

  if(foundUser){
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  } else {
    res.json({
      message: "token invalid"
    })
  }

})



app.listen(3000)