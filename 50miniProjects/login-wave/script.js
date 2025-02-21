const labels = document.querySelectorAll('.form label')
const email = document.getElementById('username')
const password = document.getElementById('password')
const btn = document.getElementById('btn')


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
        .join('')
})


email.addEventListener('input', () => {
    if (email.value > '') {
        email.classList.add('active')
    } else if (!email.matches(':focus')) {
        email.classList.remove('active')
    }
})
email.addEventListener('focus', () => {
    email.classList.add('active')
})
email.addEventListener('blur', () => {
    if (!email.value > '') {
        email.classList.remove('active')
    }
})

password.addEventListener('input', () => {
    if (password.value > '') {
        password.classList.add('active')
    } else if (!password.matches(':focus')) {
        password.classList.remove('active')
    }
})
password.addEventListener('focus', () => {
    password.classList.add('active')
})
password.addEventListener('blur', () => {
    if (!password.value > '') {
        password.classList.remove('active')
    }
})

btn.addEventListener('click', () => {
    if (email.value === '' || password.value === '') {
        dialog.showModal()
    }
});


const dialog = document.querySelector('#popup');
const closeBTN = document.querySelector('#close-popup');

closeBTN.addEventListener('click', () => dialog.close());


dialog.addEventListener('click', () => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = 
        event.clientX >= rect.left &&
        event.clientX >= rect.right &&
        event.clientY >= rect.top &&
        event.clientY >= rect.bottom

    if (!isInDialog) {
        dialog.close();
    }
});