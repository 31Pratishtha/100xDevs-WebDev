import jwt from 'jsonwebtoken'


function adminMiddleware(req, res, next) {
  const token = req.headers.token

  const decodedData = jwt.verify(token, process.env.ADMIN_SECRET)

  if (decodedData) {
    req.adminId = decodedData.id
    next()
  } else {
    res.status(403).json({
      message: "you are not signed in"
    })
  }
}

export default adminMiddleware