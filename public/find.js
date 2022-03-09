// courseFinder variables
const courseFinderInput = document.getElementById('courseFinderInput')
const courseFinderTeeBtn = document.getElementById('courseFinderBtn')

// zipCodeFinder function
const zipCodeFinder = () => {
    if(courseFinderInput.value !== "84062" && courseFinderInput.value !== "84097" && courseFinderInput.value !== "84004" && courseFinderInput.value !== "84604" && courseFinderInput.value !== "84003" && courseFinderInput.value !== "84606" && courseFinderInput.value !== "84043") {
        alert('There are no courses within this zip code area.')
    }else{
        axios.get(`http://localhost:4207/${courseFinderInput.value}`)
        .then(res => {

            console.log(res.data)
            
            removeAllChildNodes(zipCodeContainer)
            
            const zipCodeCard = document.createElement('div')
            zipCodeCard.classList.add('zipCodeCard')
            
            zipCodeCard.innerHTML = `
            <p id="courseName">Name- ${res.data[0].course_name}</p>
            <p id="courseHoles">Holes- ${res.data[0].course_holes}</p>
            `
            
            zipCodeContainer.appendChild(zipCodeCard)
        })
    }
}


// feelingLucky variable
const feelingLuckyBtn = document.getElementById('feelingLuckyBtn')

// feelingLucky function
const randomCourseFinder = () => {
    axios.get('http://localhost:4207/feelinLucky')
    .then(res => {

        removeAllChildNodes(feelingLuckyContainer)

        const feelingLuckyCard = document.createElement('div')
        feelingLuckyCard.classList.add('feelingLuckyCard')

        feelingLuckyCard.innerHTML = `
        <p id="randomCourseName">Name- ${res.data.name}</p>
        <p id="randomCourseZipCode">Zip Code- ${res.data.zipcode}</p>
        <p id="randomCourseHoles">Holes- ${res.data.holes}</p>
        `

        feelingLuckyContainer.appendChild(feelingLuckyCard)
    }) 
}

// div clearing function
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// event listeners
courseFinderTeeBtn.addEventListener('click', zipCodeFinder)
feelingLuckyBtn.addEventListener('click', randomCourseFinder)