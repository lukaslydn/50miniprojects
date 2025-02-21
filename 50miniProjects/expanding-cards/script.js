
const panels = document.querySelectorAll('.panel') //gets al panels in an array

panels.forEach(panel => { //for each panel in panels
    panel.addEventListener('click', () => { //adds an event listener to the panel
        removeActiveClasses() //removes the active class from all panels
        panel.classList.add('active') //adds the active class to the clicked panel
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}