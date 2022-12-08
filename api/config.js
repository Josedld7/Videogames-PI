 
 const PORT = process.env.PORT || 3001;
 const DB_USER =  process.env.DB_USER || 'postgres'
 const DB_PASSWORD = process.env.DB_PASSWORD || '12345'
 const DB_HOST = process.env.DB_HOST || 'localhost'
 const DB_NAME = process.env.DB_NAME || 'videogames'

 const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports={
   DB_URL,
   PORT
};