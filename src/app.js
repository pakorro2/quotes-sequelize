const express = require('express');

const db = require('./utils/database')

const quoteRouter = require('./quotes/quotes.router')

const app = express();
const port = 9000;


db.authenticate()
  .then(() => {
    console.log('Database Authenticated!')
  }).catch((err) => {
    console.log(err)
  })
db.sync()
  .then(() => {
    console.log('Database Synced!')
  }).catch((err) => {
    console.log(err)
  })

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Todo OK!'
  })
});

app.use('/api/v1', quoteRouter)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})