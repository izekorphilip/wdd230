
let visited = document.querySelector('.visited');
let numbers = document.querySelector('.num');
/*
let newDate = Date.now();
localStorage.setItem('date', newDate);
let realTime = localStorage.getItem('date');*/


let newDate = localStorage.setItem( 'current', Date.now());

let firstvisit = localStorage.getItem('current') || 0;
if(firstvisit ) 