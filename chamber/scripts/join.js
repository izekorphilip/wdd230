
/* let d = new Date();
let dateTime = document.querySelector('.timeanddate');
// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

// Set the value of the "time" field
let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();
let timeDate = document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
dateTime.textContent = timeDate;

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
*/
const currentDate = new Date();
let currentTime = localStorage.setItem( 'myTime', Date.now())
let button = document.querySelector('.btn');
let input = document.getElementById('time');
let time = document.querySelector('.time')
button.addEventListener("click", () => {
  input.value 
  time.textContent = (`${localStorage.getItem('myTime')}: Displayed in millisecond`);
  alert(`Form was Loaded at: ${currentDate}`)
});

const date = new Date();
const milliseconds = date.getMilliseconds();
console.log(milliseconds);

/*
Membership level benefits should be displayed to the side of the form in larger views.
 For example, a two column layout may be appropriate. Try to keep things uniform and visually appealing.
These membership levels have increasing costs as well as increased benefits per level. Benefits might
include special events, training, advertising (like spotlight positions on the home page), event discounts, etc.
*/


let npmembership = document.querySelector('#npmembership');
let bronzemembership = document.querySelector('#bronzemembership');
let silvermembership = document.querySelector('#silvermembership');
let goldmembership = document.querySelector('#goldmembership');
let generalcost = document.querySelector('.generalcost');
let generalbenefit = document.querySelector('.generalbenefit');

npmembership.addEventListener('click', () => {
   generalcost.textContent = '₦5000';
   generalbenefit.textContent = 'Special events, training, advertising, event discount and networking opportunities with other businesses in the community. ';
})

bronzemembership.addEventListener('click', () => {
   generalcost.textContent = '₦10000';
   generalbenefit.textContent = 'All features in NP level with access to resources and information to help grow your business and advocacy on behalf of businesses at the local, state, and national levels. ';
})


silvermembership.addEventListener('click', () => {
   generalcost.textContent = '₦15000';
   generalbenefit.textContent = 'All features in NP level and Bronze level with promotional opportunities to help increase visibility and attract customers and stay informed about important issues affecting your industry.'
});

goldmembership.addEventListener('click', () => {
   generalcost.textContent = '₦20000';
   generalbenefit.textContent = 'All features in NP level, Bronze level and silver level with increase visibility, and support for the growth and success of your business.'
});

