const btn = document.getElementById('btn');
const text = document.getElementById('text');
let isLoading = false;
function updateButton() {
    if (isLoading) {
        btn.setAttribute('disabled', 'disabled');
        btn.textContent = 'Loading...';
    } else {
        btn.removeAttribute('disabled', 'disabled');
        btn.textContent = 'Generate Joke';
    }
}

async function generateJoke() {
    if (!navigator.onLine) {
        alert('No internet connection, please try again later.');
        return;
    }
    const config = {
    headers: {
        Accept: 'application/json', 
    },
    }
    isLoading = true;
    updateButton();
    const res = await fetch('https://icanhazdadjoke.com', config)
    console.log(res)
    const data = await res.json()
    text.textContent = data.joke;
    isLoading = false;
    updateButton();
}


updateButton();
btn.addEventListener('click', generateJoke);

window.addEventListener("online", () => {
    console.log("Back online!")
    if (isLoading){
            generateJoke();
    }
});
