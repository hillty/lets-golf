
// courseFinderInput variable
const courseFinderInput = document.getElementById('courseFinderInput')
// courseFinderBtn variable 
const courseFinderTeeBtn = document.getElementById('courseFinderBtn')
// zipCodeFinder back end call
const zipCodeFinder = () => {
    axios.get(`http://localhost:4207/${courseFinderInput.value}`)
    .then(res => {

        removeAllChildNodes(zipCodeContainer)
        
        const zipCodeCard = document.createElement('div')
        zipCodeCard.classList.add('zipCodeCard')

        zipCodeCard.innerHTML = `
        <p id="courseName">Name- ${res.data.name}</p>
        <p id="courseHoles">Holes- ${res.data.holes}</p>
        `

        zipCodeContainer.appendChild(zipCodeCard)
    })
}

const feelingLuckyBtn = document.getElementById('feelingLuckyBtn')

const randomCourseFinder = () => {
    axios.get('http://localhost:4207/feelinLucky')
    .then(res => {

        removeAllChildNodes(feelingLuckyContainer)

        const feelingLuckyCard = document.createElement('div')
        feelingLuckyCard.classList.add('feelingLuckyCard')

        feelingLuckyCard.innerHTML = `
        <p id="randomCourseName">Name- ${res.data.name}</p>
        <p id="randomCourseHoles">Holes- ${res.data.holes}</p>
        `

        feelingLuckyContainer.appendChild(feelingLuckyCard)
    })
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// zipCodeFinder button event
courseFinderTeeBtn.addEventListener('click', zipCodeFinder)

feelingLuckyBtn.addEventListener('click', randomCourseFinder)