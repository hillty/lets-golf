// courseFinder page button variable
const findCourseBtn = document.querySelector('.findCourseBtn')
// event listener
findCourseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href="./find.html"
})