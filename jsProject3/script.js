const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit',formSubmit);

function formSubmit(e){
    e.preventDefault();
    if(input.value === ''){
        errMsg.innerHTML = 'please enter something'
        input.classList.add('border-red');
    }
    else if(!validURL(input.value)){
        errMsg.innerHTML = 'please enter a valid url'
        input.classList.add('border-red')
    }else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}