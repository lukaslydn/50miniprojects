const sideBar = document.getElementById('sidebar');
const sideBarBtn = document.getElementById('sideBar-btn');


sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show');
});

function updateSideBarHeight() {
    const navheight = document.getElementById("nav-bar").clientHeight
    const screenHeight = screen.height;

    sideBar.style.top = navheight +'px';
    sideBar.style.height = `calc(100vh - ${navheight}px)`
};


updateSideBarHeight();
window.onresize = updateSideBarHeight;
