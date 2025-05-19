const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.use('/', require(path.join(__dirname, 'routers/blog.js')))


app.listen(3000)