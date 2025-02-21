const faqs = document.querySelectorAll('.faq');
const btns = document.querySelectorAll('.fas')


faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        btns.forEach((btn) => {
            if (btn.parentNode.parentNode === faq) {
                btn.classList.toggle('active')
            }
        });
    })
})
