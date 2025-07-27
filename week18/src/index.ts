import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_8ZwEWrGfx4AF@ep-winter-sunset-adjoqatu-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const pgClient2 = new Client ({
  user: 'neondb_owner',
  password: 'npg_8ZwEWrGfx4AF',
  port: 5432,
  host: 'ep-winter-sunset-adjoqatu-pooler.c-2.us-east-1.aws.neon.tech',
  database: 'neondb',
  ssl: true
})

const main = async () => {
  await pgClient.connect()
  const res = await pgClient.query('select * from users')
  console.log(res.rows)
}

main()