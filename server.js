const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/front-end/public/'))

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
