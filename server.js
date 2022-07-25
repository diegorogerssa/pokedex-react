'use strict'

const { join } = require('path')
const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'))
})

app.listen(3000)
console.log('localhost:3000')