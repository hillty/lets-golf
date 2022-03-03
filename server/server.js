const express = require('express')
const path = require('path')
const cors = require('cors')
const ctrlr = require('./controller/controller')

const app = express()

app.use(express.json())
app.use(cors())

// use
    //landing
app.use('/landing.css', express.static(path.join(__dirname, '../public/landing.css')))
app.use('/js', express.static(path.join(__dirname, '../public/index.js')))
app.use('/list.css', express.static(path.join(__dirname, '../public/list.css')))
app.use('/find.css', express.static(path.join(__dirname, '../public/find.css')))

// get
app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})
app.get('/list.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/list.html'))
})
app.get('/find.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/find.html'))
})


const port = process.env.PORT || 4207

app.listen(port, () => {
    console.log(`blazin on ${port}`)
})