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

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS courses;
        
        CREATE TABLE courses(
            course_id SERIAL PRIMARY KEY,
            course_name VARCHAR(100),
            course_zipcode INT,
            course_holes INT,
            course_image TEXT
        );

        INSERT INTO courses (course_name, course_zipcode, course_holes, course_image)
        VALUES 
        (
            'Cedar Hills Golf Course',
            84062,
            18,
            'https://s3-media4.fl.yelpcdn.com/bphoto/auVDCuMTARNdm_g99zK8Ug/o.jpg'
        ),
        (
            'Cascade Fairways Public Golf Course',
            84097,
            9,
            'https://www.golfcourseranking.com/pics/418250583.jpg'
        ),
        (
            'Alpine Country Club',
            84004,
            18,
            'https://www.alpinecountryclub.org/Images/Library/slide-2.jpg'
        ),
        (
            'Riverside Country Club',
            84604,
            18,
            'https://i.pinimg.com/originals/ea/fe/84/eafe841b1305c98165f8f1f204148239.jpg'
        ),
        (
            'Fox Hollow Golf Course',
            84003,
            18,
            'https://live.staticflickr.com/3901/15039358538_da4933fb30_b.jpg'
        ),
        (
            'Timpanogos Golf Club',
            84606,
            18,
            'https://www.timpanogosgolf.com/wp-content/uploads/2019/09/Aerial-1-e1487718809123.jpg'
        ),
        (
            'Thanksgiving Point Golf Club',
            84043,
            18,
            'http://farm3.staticflickr.com/2746/4093285924_33e118a793_z.jpg'
        );
        `)
    }
}