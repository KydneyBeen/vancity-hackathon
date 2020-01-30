const express = require('express')
const bodyparser = require('body-parser')
const utilities = require('utilities.js')
const app = express()
const port = 8080

app.use(bodyparser.text([]))

app.post('/data', (req, res) => {
  let operation = req.body.operation
  let dataset = req.body.dataset
  let params = req.body.params
  utilities.mongoquery(operation, dataset, params, (fromMongo) => {
    res.send(fromMongo)
  })
})

app.use(express.static(__dirname + '/front-end/public/'))

app.use((req, res, next) => {
  res.status(404)
  res.send(__dirname + '/front-end/public/404.html')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
