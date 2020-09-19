"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


console.log(`Hello world!`);


const plus = document.querySelector('.hydrapp__add--js');
const remove = document.querySelector('.hydrapp__delete--js');
const number = document.querySelector('.hydrapp__counter--js');
const key = new Date().toISOString().slice(0, 10)
if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0)
    number.innerHTML = '0'
} else {
    number.innerHTML = localStorage.getItem(key)
}


plus.addEventListener('click', (e) => {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)
    number.innerHTML = localStorage.getItem(key)

})


remove.addEventListener('click', (e) => {
    const currentValue = parseInt(number.innerHTML);
    if (currentValue > 0) {
        number.innerHTML = currentValue - 1; {
            localStorage.setItem(key, localStorage.getItem(key) - 1)
        }
        number.innerHTML = localStorage.getItem(key);
    }
})