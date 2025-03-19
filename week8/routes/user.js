import express from 'express'
const Router = express.Router
// import { auth } from '../middlewares/auth'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { purchaseModel, userModel } from '../db.js'
import jwt from 'jsonwebtoken'
import userMiddleware from '../middlewares/user.js'
const userRouter = Router()

userRouter.post("/signup", async (req, res) => {
  

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

    await userModel.insertOne({
      email: email,
      password: hashedPassword,
      name: name
    })
  } catch {
    return res.status(400).json({
      message: "User already exists. Please SignIn"
    })
  }

  res.json({
    message: "You are signed up"
  })

})

userRouter.post("/signin", async (req, res) => {

  const { email, password } = req.body

  const user = await userModel.findOne({
    email: email,
  })

  if (!user) {
    res.status(403).json({
      message: "The user does not exist"
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (passwordMatch) {
    const token = jwt.sign({
      id: user._id
    }, process.env.USER_SECRET)
    res.json({
      token: token
    })
  } else {
    res.status(403).json({
      message: 'Incorrect Credentials'
    })
  }
})

userRouter.put("/purchase", userMiddleware, async (req, res) => {
  const { courseId } = req.body
  const userId = req.userId

  try{
    await userModel.updateOne({
      _id: userId
    }, {
        "$push": {
          purchasedCourses: courseId
      }
    })
  } catch(e) {
    console.log('error: ', e);
  }

  res.json({
    message: "Course purchased !"
  })
})

userRouter.get("/purchases", userMiddleware, async (req, res) => {

  const userId = req.userId

  const userCourses = await purchaseModel.find({ userId })

  res.json({ userCourses })
})

export default userRouter