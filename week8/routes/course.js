import express from 'express'
import userMiddleware from '../middlewares/user.js'
import { courseModel, purchaseModel } from '../db.js'
const Router = express.Router


const courseRouter = Router()

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const { courseId } = req.body
  const userId = req.userId

  await purchaseModel.create({
    userId: userId,
    courseId: courseId
  })

  res.json({
    message: "Purchase successful"
  })
})
courseRouter.get("/preview", async (req, res) => {

  const courses = await courseModel.find({})

  res.json({ courses })
})

export default courseRouter