
const bodyParser = require('body-parser');
// require("./Database/mongooseConnect");
require('./Database/connect')

const express = require('express')
const app = express()
const port =8080

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})