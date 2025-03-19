import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course'
  }]
})

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String
})

const purchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId
})

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId
})

const adminModel = mongoose.model("admin", adminSchema)
const userModel = mongoose.model("user", userSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)
const courseModel = mongoose.model("course", courseSchema)

export { adminModel, userModel, purchaseModel, courseModel }