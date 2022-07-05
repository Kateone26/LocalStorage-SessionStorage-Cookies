// local storage

const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

const storedInput = localStorage.getItem('textinput')

if(storageInput){
    text.textContent = storedInput
}

storageInput.addEventListener('input', letter =>{ 
    text.textContent = letter.target.value
})

const saveToLocalStorage = ()=>{
    localStorage.setItem('textinput', text.textContent)
}
button.addEventListener('click', saveToLocalStorage)


// 
// localStorage.clear()

// localStorage.removeItem('textinput')



// 


// session storage

const storageInput2 = document.querySelector('.storage2');
const text2 = document.querySelector('.text2');
const button2 = document.querySelector('.button2');

const storedInput2 = sessionStorage.getItem('textinput')

if(storageInput2){
    text2.textContent = storedInput2
}

storageInput2.addEventListener('input', letter =>{ 
    text2.textContent = letter.target.value
})

const saveToLocalStorage2 = ()=>{
    sessionStorage.setItem('textinput', text2.textContent)
}
button2.addEventListener('click', saveToLocalStorage2)


// 
// sessionStorage.removeItem('textinput')

// sessionStorage.clear()


// 


// cookies


// document.cookie = 'name=kyle'

// document.cookie = 'name=kyle; expires=' + new Date(7777,7, 2).toUTCString()

// document.cookie = 'lastname=smith; expires=' + new Date(7777,7, 2).toUTCString()

// console.log(document.cookie);


