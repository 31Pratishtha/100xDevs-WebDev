import express from 'express'
import { UserModel, TodoModel } from './db.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { auth, JWT_SECRET } from './auth.js'
import bcrypt from 'bcryptjs'

const app = express()
mongoose.connect("mongodb+srv://Pratishtha:Mongodbpswd@backenddb.kn00wnx.mongodb.net/todo-app")
app.use(express.json())

app.post('/signup', async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password


  try {
    const hashedPassword = await bcrypt.hash(password, 5)
    console.log('hashedPassword: ', hashedPassword);

    await UserModel.insertOne({
      email: email,
      password: hashedPassword,
      name: name
    })


  } catch (error) {
    return res.status(400).json({
      message: "User already exists. Please SignIn"
    })
  }

  res.json({
    message: "You are signed up"
  })
})

app.post('/signin', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = await UserModel.findOne({
    email: email,
  })

  if (!user) {
    res.status(403).json({
      message: "The user does not exist"
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  console.log("user: ", user);

  if (passwordMatch) {
    const token = jwt.sign({
      id: user._id.toString()
    }, JWT_SECRET)
    res.json({
      token: token
    })
  } else {
    res.status(403).json({
      message: "Incorrect Credential"
    })
  }


})

app.post('/todo', auth, async (req, res) => {
  const userId = req.userId
  const task = req.body.task

  const todoCreated = await TodoModel.create({
    task: task,
    userId: userId
  })

  res.json({
    userId: userId,
    todoCreated: todoCreated
  })
})

app.get('/todo', auth, async (req, res) => {
  const userId = req.userId
  const todos = await TodoModel.find({
    userId: userId
  })

  res.json({
    todos
  })
})

app.listen('3000', () => {
  console.log("Server running on port 3000")
})