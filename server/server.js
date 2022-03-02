const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/landing.css', express.static(path.join(__dirname, '../public/landing.css')))
app.use('/js', express.static(path.join(__dirname, '../public/index.js')))


app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})
// app.get('/styles', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/landing.css'))
// })
// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.js'))
// })




const port = process.env.PORT || 4207

app.listen(port, () => {
    console.log(`blazin on ${port}`)
})