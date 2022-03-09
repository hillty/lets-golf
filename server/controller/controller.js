const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// const cedarHills = [{
//     "name": "Cedar Hills Golf Course",
//     "zipcode": 84062,
//     "holes": 18,
//     "imageURL": "https://s3-media4.fl.yelpcdn.com/bphoto/auVDCuMTARNdm_g99zK8Ug/o.jpg"
// }]

// const cascadeFairways = [{
//     "name": "Cascade Fairways Public Golf Course",
//     "zipcode": 84097,
//     "holes": 9,
//     "imageURL": "https://www.golfcourseranking.com/pics/418250583.jpg"
// }]

// const alpineCountryClub = [{
//     "name": "Alpine Country Club",
//     "zipcode": 84004,
//     "holes": 18,
//     "imageURL": "https://www.alpinecountryclub.org/Images/Library/slide-2.jpg"
// }]

// const riversideCountryClub = [{
//     "name": "Riverside Country Club",
//     "zipcode": 84604,
//     "holes": 18,
//     "imageURL": "https://i.pinimg.com/originals/ea/fe/84/eafe841b1305c98165f8f1f204148239.jpg"
// }]

// const foxHollow = [{
//     "name": "Fox Hollow Golf Course",
//     "zipcode": 84003,
//     "holes": 18,
//     "imageURL": "https://live.staticflickr.com/3901/15039358538_da4933fb30_b.jpg"
// }]

// const timpanogosGolfClub = [{
//     "name": "Timpanogos Golf Club",
//     "zipcode": 84606,
//     "holes": 9,
//     "imageURL": "https://www.timpanogosgolf.com/wp-content/uploads/2019/09/Aerial-1-e1487718809123.jpg"
// }]

// const thanksgivingPoint = [{
//     "name": "Thanksgiving Point Golf Club",
//     "zipcode": 84043,
//     "holes": 18,
//     "imageURL": "http://farm3.staticflickr.com/2746/4093285924_33e118a793_z.jpg"
// }]

const luckyCourses = [
    {
        "name": "Cedar Hills Golf Course",
        "zipcode": 84062,
        "holes": 18,
        "imageURL": "https://s3-media4.fl.yelpcdn.com/bphoto/auVDCuMTARNdm_g99zK8Ug/o.jpg"
    },
    {
        "name": "Cascade Fairways Public Golf Course",
        "zipcode": 84097,
        "holes": 9,
        "imageURL": "https://www.golfcourseranking.com/pics/418250583.jpg" 
    },
    {
        "name": "Alpine Country Club",
        "zipcode": 84004,
        "holes": 18,
        "imageURL": "https://www.alpinecountryclub.org/Images/Library/slide-2.jpg"
    },
    {
        "name": "Riverside Country Club",
        "zipcode": 84604,
        "holes": 18,
        "imageURL": "https://i.pinimg.com/originals/ea/fe/84/eafe841b1305c98165f8f1f204148239.jpg"
    },
    {
        "name": "Fox Hollow Golf Course",
        "zipcode": 84003,
        "holes": 18,
        "imageURL": "https://live.staticflickr.com/3901/15039358538_da4933fb30_b.jpg"
    },
    {
        "name": "Timpanogos Golf Club",
        "zipcode": 84606,
        "holes": 9,
        "imageURL": "https://www.timpanogosgolf.com/wp-content/uploads/2019/09/Aerial-1-e1487718809123.jpg"
    },
    {
        "name": "Thanksgiving Point Golf Club",
        "zipcode": 84043,
        "holes": 18,
        "imageURL": "http://farm3.staticflickr.com/2746/4093285924_33e118a793_z.jpg"
    }
]

module.exports = {

    getCedarHills: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84062;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getCascadeFairways: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84097;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getAlpine: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84004;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err)) 
    },

    getRiverside: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84604;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getFox: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84003;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getTimp: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84606;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getThanksgiving: (req, res) => {
        sequelize.query(`
        SELECT * FROM courses
        WHERE course_zipcode = 84043;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getLucky: (req, res) => {
        let randomIndex = Math.floor(Math.random() * luckyCourses.length)
        let randomCourse = luckyCourses[randomIndex]
        res.send(randomCourse)
    }
}