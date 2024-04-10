const hamButton = document.querySelector('.menu');
let logo = document.querySelector('.logo')
let companyName = document.querySelector('.company-name');
let tempbtn = document.querySelector('.collapsible')

const mediaQuery = window.matchMedia('(max-width: 500px)')
hamButton.addEventListener('click', () => {
	let navigation = document.querySelector('.nav-mobile');

	if (navigation.style.display === 'flex') {
		navigation.style.display = 'none';
		hamButton.textContent = '☰';
        logo.style.display = 'flex';
        companyName.style.display = 'flex';
        tempbtn.style.display = 'block';
	} else {
		navigation.style.display = 'flex';
		hamButton.textContent = '❌';
        logo.style.display = 'none';
		companyName.style.display = 'none';
    tempbtn.style.display = 'none';
	}
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const humidity = document.querySelector('#humidity');
const temperature = document.querySelector('#temperature');
const weatherDesc = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
let WeatherForcast = document.querySelector('#weatherforcast');
let windSpeed = document.querySelector('#windspeed');
const firstDay = document.querySelector('#firstday');
const secondDay = document.querySelector('#secondday');
const thirdDay = document.querySelector('#thirdday');

let maxTemp = document.querySelector('.content-test');
let content = document.querySelector('.collapsible');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.28&lon=5.59&units=imperial&appid=852bd7cf96a748cbfa8371397a65496c';

async function getWeatherApi() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data)
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
	humidity.innerHTML = `Current Temperature: ${current.list[0].main.temp} &deg;F`;
	temperature.innerHTML = `Humidity: ${current.list[0].main.humidity} &deg;F`;
	weatherDesc.innerHTML = `${current.list[0].weather[0].description}`;
	windSpeed.textContent = `Windspeed: ${current.list[0].wind.speed} m/s`;


	firstDay.innerHTML = `${current.list[4].dt_txt}: ${current.list[4].main.temp} &deg;F`;
	secondDay.innerHTML = `${current.list[14].dt_txt}: ${current.list[14].main.temp} &deg;F`;
	thirdDay.innerHTML = `${current.list[22].dt_txt}: ${current.list[22].main.temp} &deg;F`;



  
}


function displayweatherApi (real){
  content.addEventListener('click', () => {
    maxTemp.innerHTML = `Max-Temp: ${real.list[0].main.temp_max} &deg;F`;
    if (companyName.style.display = 'none'){
      companyName.style.display = 'none'
      maxTemp.style.display = 'flex'
    }else{
      companyName.style.display = 'flex'
    }
   
  });
}