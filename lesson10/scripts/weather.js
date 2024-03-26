
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figcaption = document.querySelector('figcaption')
const body = document.querySelector('body');
const id = document.querySelector('.id');
const cloud = document.querySelector('.main-cloud');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=144fde209ca5d4b7054a523b6053c366'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.table(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.humidity.toFixed(2)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather section');
    figcaption.textContent = ` Discription: ${description}`;
    id.textContent = `ID: ${data.weather[0].id}`;
    cloud.textContent = `Main: ${data.weather[0].main.toUpperCase()}`
}
body.style.backgroundColor = '#eee'
body.style.textAlign = 'center'