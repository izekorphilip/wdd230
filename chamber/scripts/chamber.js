const hamButton = document.querySelector('#menu');

const navTop = document.querySelector('.nav-top');
const link = document.querySelector('link')
/*
hamButton.addEventListener('click', () => {
	navTop.classList.toggle('open').innerHTML = navigation;
	hamButton.classList.toggle('open');
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
*/

hamButton.addEventListener('click', () => {
	let navigation = document.querySelector('.nav-mobile');

	if (navigation.style.display === 'flex') {
		navigation.style.display = 'none';
		hamButton.textContent = '☰';
		navigation.style.display = 'sticky';
	} else {
		navigation.style.display = 'flex';
		hamButton.textContent = 'x';
		
	}
});
const d = new Date();
let year = d.getFullYear();
document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);


const checkButton = document.querySelector('.input');
const webMain = document.querySelector('main');
const WebBody = document.querySelector('body');
const section = document.querySelector('.card-11');
const header = document.querySelector('header');
const footer = document.querySelector('footer');


checkButton.addEventListener('click', () => {
	webMain.classList.toggle('dark-mode');
	WebBody.classList.toggle('dark-mode');
	section.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
});



let visited = document.querySelector('.visited');

let numVisited = Number(window.localStorage.getItem("visitedNumber")) || 0;

if (numVisited !== 0) {
	visited.textContent = numVisited;
} else {
	visited.textContent = `This is your first time of visiting. You are welcome🎁`
}
numVisited++;

localStorage.setItem('visitedNumber', numVisited);

const humidity = document.querySelector('#humidity');
const temperature = document.querySelector('#temperature');
const weatherDesc = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
let WeatherForcast = document.querySelector('#weatherforcast');
let windSpeed = document.querySelector('#windspeed');
const firstDay = document.querySelector('#firstday');
const secondDay = document.querySelector('#secondday');
const thirdDay = document.querySelector('#thirdday');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.28&lon=5.59&units=imperial&appid=852bd7cf96a748cbfa8371397a65496c';

async function getWeatherApi() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayweatherApi(data)
		} else {
			throw Error(await response.text())
		}
	} catch (error) {
		console.log(error);
	}
}
getWeatherApi();

function displayweatherApi(current) {
	const iconsrc = `https://openweathermap.org/img/w/${current.list[0].weather[0].icon}.png`;
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', 'weather section');
	humidity.innerHTML = `Current Humidity: ${current.list[0].main.temp} &deg;F`;
	temperature.innerHTML = `Temperature: ${current.list[0].main.humidity} &deg;F`;
	weatherDesc.innerHTML = `${current.list[0].weather[0].description}`;
	windSpeed.textContent = `Windspeed: ${current.list[0].wind.speed} m/s`;


	firstDay.innerHTML = `${current.list[6].dt_txt}: ${current.list[6].main.temp} &deg;F`;
	secondDay.innerHTML = `${current.list[14].dt_txt}: ${current.list[14].main.temp} &deg;F`;
	thirdDay.innerHTML = `${current.list[22].dt_txt}: ${current.list[22].main.temp} &deg;F`;
}

const meetBtn = document.querySelector('.meeting-btn');

const invite = document.querySelector('.invite-message')


meetBtn.addEventListener('click', removeBtn);
function removeBtn() {


	invite.remove()
}
let love = document.querySelector('.love1')
let todayDay = new Date();
let dayToday = todayDay.getDay();
setTimeout(invitee, 3000)
function invitee() {
	if (dayToday === 1 || dayToday === 2 || dayToday === 3 && numVisited === 1) {
		invite.style.display = 'block'
	} else {
		invite.style.display = 'none'
	}
}

