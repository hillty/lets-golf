const express = require('express')
const path = require('path')
const cors = require('cors')
const ctrlr = require('./controller/controller') // controller file
const {seed} = require('./seed') // seed file

const app = express()

app.use(express.json())
app.use(cors())

//post
app.post('/seed', seed)

// use
    //landing page
app.use('/landing.css', express.static(path.join(__dirname, '../public/landing.css')))
app.use('/js', express.static(path.join(__dirname, '../public/index.js')))
    //list page
app.use('/list.css', express.static(path.join(__dirname, '../public/list.css')))
app.use('/list.js', express.static(path.join(__dirname, '../public/list.js')))
    //find page
app.use('/find.css', express.static(path.join(__dirname, '../public/find.css')))
app.use('/find.js', express.static(path.join(__dirname, '../public/find.js')))

// get htmls
app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})
app.get('/list.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/list.html'))
})
app.get('/find.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/find.html'))
})

// zipCodeFinder end points
app.get('/84062', ctrlr.getCedarHills)
app.get('/84097', ctrlr.getCascadeFairways)
app.get('/84004', ctrlr.getAlpine)
app.get('/84604', ctrlr.getRiverside)
app.get('/84003', ctrlr.getFox)
app.get('/84606', ctrlr.getTimp)
app.get('/84043', ctrlr.getThanksgiving)

// feelingLucky end point
app.get('/feelinLucky', ctrlr.getLucky)

// port
const port = process.env.PORT || 4207

app.listen(port, () => {
    console.log(`blazin on ${port}`)
})