const express = require('express')
const bodyparser = require('body-parser')
const utilities = require(__dirname + '/utilities.js')
const app = express()
const port = 8080

// app.use(bodyparser.text([]))
app.use(bodyparser.json())

app.post('/data', (req, res) => {
  let {operation, dataset, params} = req.body
  utilities(operation, dataset, params, (fromMongo) => {
    res.send(JSON.stringify(fromMongo))
  })
})

app.get('/', (req, res, next) => {
  req.path = '/index.html'
  next()
})

app.use(express.static(__dirname + '/front-end/public/'))

app.use((req, res, next) => {
  res.status(404)
  res.send(__dirname + '/front-end/public/404.html')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
