const cedarHills = [{
    "name": "Cedar Hills Golf Course",
    "zipcode": 84062,
    "holes": 18,
    "imageURL": "https://s3-media4.fl.yelpcdn.com/bphoto/auVDCuMTARNdm_g99zK8Ug/o.jpg"
}]

const cascadeFairways = [{
    "name": "Cascade Fairways Public Golf Course",
    "zipcode": 84097,
    "holes": 9,
    "imageURL": "https://www.golfcourseranking.com/pics/418250583.jpg"
}]

const alpineCountryClub = [{
    "name": "Alpine Country Club",
    "zipcode": 84004,
    "holes": 18,
    "imageURL": "https://www.alpinecountryclub.org/Images/Library/slide-2.jpg"
}]

const riversideCountryClub = [{
    "name": "Riverside Country Club",
    "zipcode": 84604,
    "holes": 18,
    "imageURL": "https://i.pinimg.com/originals/ea/fe/84/eafe841b1305c98165f8f1f204148239.jpg"
}]

const foxHollow = [{
    "name": "Fox Hollow Golf Course",
    "zipcode": 84003,
    "holes": 18,
    "imageURL": "https://live.staticflickr.com/3901/15039358538_da4933fb30_b.jpg"
}]

const timpanogosGolfClub = [{
    "name": "Timpanogos Golf Club",
    "zipcode": 84606,
    "holes": 9,
    "imageURL": "https://www.timpanogosgolf.com/wp-content/uploads/2019/09/Aerial-1-e1487718809123.jpg"
}]

const thanksgivingPoint = [{
    "name": "Thanksgiving Point Golf Club",
    "zipcode": 84043,
    "holes": 18,
    "imageURL": "http://farm3.staticflickr.com/2746/4093285924_33e118a793_z.jpg"
}]

module.exports = {

    getCedarHills: (req, res) => {
        res.send(cedarHills[0])
    },

    getCascadeFairways: (req, res) => {
        res.send(cascadeFairways[0])
    },

    getAlpine: (req, res) => {
        res.send(alpineCountryClub[0]) 
    },

    getRiverside: (req, res) => {
        res.send(riversideCountryClub[0])
    },

    getFox: (req, res) => {
        res.send(foxHollow[0])
    },

    getTimp: (req, res) => {
        res.send(timpanogosGolfClub[0])
    },

    getThanksgiving: (req, res) => {
        res.send(thanksgivingPoint[0])
    }
}