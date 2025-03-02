import jwt from 'jsonwebtoken'

const JWT_SECRET = "iamawebdeveloper"

function auth(req, res, next) {
  const token = req.headers.token

  const decodedData = jwt.verify(token, JWT_SECRET)

  if (decodedData) {
    req.userId = decodedData.id
    next()
  } else {
    res.status(403).json({
      message: "Incorrect Credentials"
    })
  }
}

export {auth, JWT_SECRET}
