import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import db from './db'
import restaurant from './model/restaurant'
const app = express()

const port = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/pid', (req, res) => {
  res.send(`My PIDss is ${process.pid}`)
})
app.get('/', (req, res, next) => {
  const Restaurant = mongoose.model('Restaurant')
  restaurant.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
})
app.post('/', (req, res, next) => {
  const restaurantJson = req.body
  const Restaurant = mongoose.model('Restaurant')
  const restaurantDoc = new Restaurant(restaurantJson)
  restaurantDoc.save()
    .then(data => {
      res.json(data)
    })
    .catch(next)
})
app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.toString()
  })
})
app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening on port ${port}`)
})
