
const day = new Date();
let year = day.getFullYear()

document.querySelector('.year').innerHTML =  (`Ⓒ ${year}`);
document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);
