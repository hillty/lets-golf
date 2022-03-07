console.log('great success')

// courseFinderInput variable
const courseFinderInput = document.getElementById('courseFinderInput')
// courseFinderBtn variable 
const courseFinderTeeBtn = document.getElementById('courseFinderBtn')
// zipCodeFinder back end call
const zipCodeFinder = () => {
    axios.get(`http://localhost:4207/${courseFinderInput.value}`)
    .then(res => {
        console.log(res.data)
    })
}
// zipCodeFinder button event
courseFinderTeeBtn.addEventListener('click', zipCodeFinder)