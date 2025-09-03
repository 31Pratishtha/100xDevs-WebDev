import express from "express";
import { Client } from "pg";

const app = express()
app.use(express.json())

const pgClient = new Client("postgresql://neondb_owner:npg_8ZwEWrGfx4AF@ep-winter-sunset-adjoqatu-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const main = async () => {
  await pgClient.connect()
  await app.listen(3000, () => {
    console.log('Server listening on port 3000')
  })
  const res = await pgClient.query('select * from users')
  // console.log(res.rows)
}

app.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  const city = req.body.city
  const country = req.body.country
  const pincode = req.body.country

  

  try{

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) returning id;`
    const addressInsterQuery = `insert into addresses (city, country, pincode, user_id) values ($1, $2, $3, $4)`

    await pgClient.query("BEGIN");
    
    const response = await pgClient.query(insertQuery, [username, email, password])
    const userId = response.rows[0].id

    // await new Promise(x => setTimeout(x, 100 * 1000))
    const addressInsertResponse = await pgClient.query(addressInsterQuery, [city, country, pincode, userId])

    await pgClient.query("COMMIT");

    res.json({
      message: "You have signed up !"
    })

  } catch (e) {
    console.log(e)
    res.json({
      message: 'Error while signing up'
    })
  }
})

app.get('/metadata', async (req, res) => {
  const id = req.query.id

  const query1 = `Select * from users where id=$1`
  const response1 = await pgClient.query(query1, [id])

  const query2 = `Select * from addresses where user_id=$1`
  const response2 = await pgClient.query(query2, [id])

  res.json({
    user: response1.rows[0],
    address: response2.rows
  })
})

app.get('/metadata-v2', async (req, res) => {
  const id = req.query.id;

  const query = `select users.id, users.username, users.email, addresses.city, addresses.country from users join addresses on users.id = addresses.user_id where user_id = $1`

  const response = await pgClient.query(query, [id])

  res.json({
    response: response.rows
  })


})

main()