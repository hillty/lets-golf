console.log('great success')

// landing page button
const findCourseBtn = document.querySelector('.findCourseBtn')
// landing btn to find page
findCourseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href="./find.html"
})
