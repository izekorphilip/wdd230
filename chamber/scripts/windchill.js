let temp = document.querySelector('#temperature').innerHTML = 33;
let wSpeed = document.querySelector('#windspeed').innerHTML = 35;
let windChill = '';

if(temp <= 50 & wSpeed >3.0){
    windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    document.querySelector('#windChill').innerHTML = windChill;
}else {
    document.querySelector('#windChill').innerHTML = 'N/A';
}

