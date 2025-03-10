import express from 'express'
import { adminModel, courseModel } from '../db.js'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import adminMiddleware from '../middlewares/admin.js'
const Router = express.Router


const adminRouter = Router()

adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(8).max(30)
      .regex(/[A-Z]/, "must contain at least one uppercase letter")
      .regex(/[a-z]/, "must contain at least one lowercase letter")
      .regex(/\d/, "must contain at least one lowercase letter")
  })

  const parsedDataWithSuccess = requiredBody.safeParse(req.body)

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect input format",
      error: parsedDataWithSuccess.error
    })
    return
  }

  const { email, password, name } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 5)

    await adminModel.insertOne({
      email: email,
      password: hashedPassword,
      name: name
    })
  } catch (e) {
    return res.status(400).json({
      message: "User already exists. Please SignIn",
      error: e
    })
  }



  res.json({
    message: "You are signed up"
  })
})

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body

  const admin = await adminModel.findOne({
    email: email,
  })

  if (!admin) {
    res.status(403).json({
      message: "The admin does not exist"
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, admin.password)
  if (passwordMatch) {
    const token = jwt.sign({
      id: admin._id
    }, process.env.ADMIN_SECRET)
    res.json({
      token: token
    })
  } else {
    res.status(403).json({
      message: 'Incorrect Credentials'
    })
  }
})

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId
  const { title, description, price, imageUrl } = req.body

  const course = await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId
  })
  res.json({
    message: "Course created",
    courseId: course._id
  })
})

adminRouter.put("/course", adminMiddleware, async (req, res) => {

  const adminId = req.adminId
  const { title, description, price, imageUrl, courseId } = req.body

  const course = await courseModel.updateOne({ creatorId: adminId, _id: courseId }, {
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
  })
  res.json({
    message: "Course updated",
    courseId: course._id
  })
})

adminRouter.delete("/course", (req, res) => {
  res.json({ message: "signin" })
})

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.adminId
  const courses = await courseModel.find({
    creatorId: adminId
  })

  if(courses){
    res.json(courses)
  } else {
    res.status(500).json({message: "Could not fetch courses"})
  }
})

export default adminRouter