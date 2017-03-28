const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000, () => {
  console.log('listening on 3000')
})
