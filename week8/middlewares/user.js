import jwt from 'jsonwebtoken'


function userMiddleware(req, res, next) {
  const token = req.headers.token

  const decodedData = jwt.verify(token, process.env.USER_SECRET)

  if (decodedData) {
    req.userId = decodedData.id
    next()
  } else {
    res.status(403).json({
      message: "you are not signed in"
    })
  }
}

export default userMiddleware