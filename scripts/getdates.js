const d = new Date();
let year = d.getFullYear();


document.getElementById('year').innerHTML =  (`Ⓒ ${year}`);

document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);
