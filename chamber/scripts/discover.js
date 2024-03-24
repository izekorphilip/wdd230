


const day = new Date();
let year = day.getFullYear();


document.getElementById('year').innerHTML = (`Ⓒ ${year}`);

document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);

/*
let visited = document.querySelector('.visited');
let numbers = document.querySelector('.num');

let newDate = Date.now();
localStorage.setItem('date', newDate);
let realTime = localStorage.getItem('date');


let newDate = localStorage.setItem( 'current', Date.now());

let firstvisit = Number(window.localStorage.getItem('current'))|| 0;
if(firstvisit !== 0){
    visited.textContent = firstvisit;
}else{
    visited.textContent = 'You are welcome here friend!'
}
firstvisit++;
localStorage.setItem('current', firstvisit);

*/
/*
let newDate = localStorage.setItem( 'current', new Date());

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visited");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(localStorage.getItem("current")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent =  numVisits;
}
else {
	visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
}
// 4️⃣ increment the number of visits by one.


// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
localStorage.clear();

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

*/

let newDate = localStorage.setItem( 'current', Date.now());

const visitsDisplay = document.querySelector(".visited");

let firstvisit = window.localStorage.getItem('visitedOne');
if (firstvisit == null){
    visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';   
}else{
    visitsDisplay.textContent = 'Back so soon! Awesome!'
}
localStorage.setItem('visitedOne', 1);

