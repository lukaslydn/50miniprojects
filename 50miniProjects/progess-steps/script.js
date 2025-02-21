
const progessBar = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev'); 
const steps = document.querySelectorAll('.step'); //gets all the steps
//progessBar.style.width = 50 + '%'
let currentStep = 1;
const container = document.getElementById('container');
nextBtn.addEventListener('click', ()=> { //listens for when next btn is clicked
    if(currentStep < steps.length){ //if current step is less than steps length
        currentStep++; //increment current step by 1
    }
    updateProgress(currentStep); //update progress and steps
})
prevBtn.addEventListener('click', ()=> { //listens for when prev btn is clicked
    if(currentStep != 1){ //if current is not equal to 1
        currentStep--; //decrement current step by 1 --doesnt allow to change is current step is 1
    }
    updateProgress(currentStep); //update progress and steps
})
function updateProgress(step){
    if(step == steps.length){ //step is equal to steps length
        nextBtn.setAttribute('disabled', 'true'); //disable next btn
    } else {
        nextBtn.removeAttribute('disabled'); //otherwise inable next btn
    }
    if(step == 1){ //if step equals 1
        prevBtn.setAttribute('disabled', 'true'); //disable prev btn
    } else {
        prevBtn.removeAttribute('disabled');  //other enable prev btn
    }
    steps[step - 1].classList.add('active'); //steps index add the active class
    if(step < steps.length){ //if step is less than steps length - ensures that we are not trying to remove the class from non exsitant step
        steps[step].classList.remove('active');
    }
    progessBar.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + '%'; // sets the width of the progress bar 
    // eg currentstep = 2 and steps length = 5, 2-1 =        1  / 4 times 100 = 25percent
}