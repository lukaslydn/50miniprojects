const sounds = document.querySelectorAll('audio');
const buttons = document.getElementById('buttons');

const stopBtn = document.createElement('button');
stopBtn.innerText = 'Stop sounds';
stopBtn.classList.add('stop-btn');
stopBtn.addEventListener('click', () => stopSounds());
document.body.appendChild(stopBtn);

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.innerText = sound.textContent;
    btn.addEventListener('click', () => {
        stopSounds();
        sound.play();
    });
    buttons.appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => sound.pause());
    sounds.forEach(sound => sound.currentTime = 0);
}