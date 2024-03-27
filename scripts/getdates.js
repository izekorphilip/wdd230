
const day = new Date();
let year = day.getFullYear();


document.getElementById('year').innerHTML = (`Ⓒ ${year}`);

document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = `Number of page visit: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
`Number of visit ${numVisits++}`;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);


// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

const temparature = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.28&lon=5.59&units=imperial&appid=9c0dfd55bf88135ea4f19ff144ce1d20';

async function getWeatherApi(){
	try{
		const response = await fetch(url);
		if(response.ok){
			const data = await response.json();
			console.log(data);
			displayweatherApi(data)
		} else {
			throw Error(await response.text())
		}
	} catch (error){
		console.log(error);
	}
}
getWeatherApi();

function displayweatherApi(current){
	temparature.innerHTML = `🌞 Current temperature: ${current.main.humidity}&deg;F`;
	weather.innerHTML = `Weather Description: ${current.weather[0].description}`;
	const iconsrc = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
	weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather section');
}	