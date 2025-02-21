
const searchBTN = document.getElementById('search-btn');
const inputBar = document.getElementById('inputBar');

searchBTN.addEventListener('click', () => {
    inputBar.classList.toggle('active')
    inputBar.focus(); //focus on input bar when search button is clicked
})
