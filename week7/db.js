import mongoose from 'mongoose'
import { type } from 'os'

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
  email: {type: String, unique: true},
  password: String,
  name: String,
})

const Todo = new Schema({
  task: String,
  done: Boolean,
  userId: ObjectId
})


const UserModel = mongoose.model('users', User)
const TodoModel = mongoose.model('todos', Todo)

export { UserModel, TodoModel }