const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
})




const port = process.env.PORT || 4207

app.listen(port, () => {
    console.log(`blazin on ${port}`)
})